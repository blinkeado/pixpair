const chokidar = require('chokidar');
const { exec } = require('child_process');
const path = require('path');

// Configuration
const BUILD_COMMAND = 'npm run build';
const PREVIEW_COMMAND = 'cd dist && python3 -m http.server 9000';
const WATCH_PATHS = ['src/**/*', 'public/**/*', 'index.html'];
const THROTTLE_TIME = 1000; // ms

let buildProcess = null;
let previewProcess = null;
let buildTimer = null;
let isFirstRun = true;

console.log('👀 Watching for file changes...');

// Start the preview server
function startPreviewServer() {
  if (previewProcess) {
    previewProcess.kill();
  }
  
  console.log('🚀 Starting preview server...');
  previewProcess = exec(PREVIEW_COMMAND);
  
  previewProcess.stdout.on('data', (data) => {
    console.log(`Preview server: ${data.trim()}`);
  });

  previewProcess.stderr.on('data', (data) => {
    console.error(`Preview server error: ${data.trim()}`);
  });

  console.log('🌐 Preview available at: http://localhost:9000');
}

// Build the project
function buildProject() {
  console.log('🔨 Building project...');
  
  if (buildProcess) {
    buildProcess.kill();
  }
  
  buildProcess = exec(BUILD_COMMAND, (error, stdout, stderr) => {
    if (error) {
      console.error(`Build error: ${error.message}`);
      return;
    }
    
    if (stderr) {
      console.error(`Build stderr: ${stderr}`);
    }
    
    console.log(`${stdout}`);
    console.log('✅ Build completed successfully');
    
    // Start or restart the preview server
    startPreviewServer();
  });
}

// Watch for file changes
const watcher = chokidar.watch(WATCH_PATHS, {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true
});

// Handle file changes with throttling
watcher.on('all', (event, path) => {
  console.log(`File ${event}: ${path}`);
  
  // Clear any existing timer
  if (buildTimer) {
    clearTimeout(buildTimer);
  }
  
  // Set a new timer to throttle builds
  buildTimer = setTimeout(() => {
    buildProject();
  }, isFirstRun ? 0 : THROTTLE_TIME);
  
  if (isFirstRun) {
    isFirstRun = false;
  }
});

// Handle cleanup on exit
process.on('SIGINT', () => {
  console.log('Shutting down...');
  if (buildProcess) buildProcess.kill();
  if (previewProcess) previewProcess.kill();
  process.exit();
});

console.log('⌛ Initial build starting...');
buildProject();
