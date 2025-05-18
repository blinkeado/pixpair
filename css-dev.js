const chokidar = require('chokidar');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const BUILD_COMMAND = 'npm run build';
const PREVIEW_COMMAND = 'cd dist && python3 -m http.server 8888';
const CSS_WATCH_PATH = 'src/index.css';
const FULL_WATCH_PATHS = ['src/**/*.js', 'src/**/*.jsx', 'public/**/*', 'index.html'];
const CSS_THROTTLE_TIME = 500; // ms - faster for CSS changes
const FULL_THROTTLE_TIME = 2000; // ms - slower for other changes

let buildProcess = null;
let previewProcess = null;
let buildTimer = null;
let isFirstRun = true;
let isServerRunning = false;

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
    // If the server fails because the port is in use, try to kill that process
    if (data.includes('Address already in use')) {
      exec('lsof -ti:8888 | xargs kill -9 || true', () => {
        // Try again after a short delay
        setTimeout(startPreviewServer, 1000);
      });
    }
  });

  isServerRunning = true;
  console.log('🌐 Preview available at: http://localhost:8888');
}

// Build the project
function buildProject(isFullBuild = true) {
  const message = isFullBuild ? '🔨 Building full project...' : '💄 Processing CSS changes...';
  console.log(message);
  
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
    
    // Start the preview server if it's not running
    if (!isServerRunning) {
      startPreviewServer();
    }
  });
}

// Watch for CSS file changes
const cssWatcher = chokidar.watch(CSS_WATCH_PATH, {
  persistent: true
});

// Watch for other file changes
const fullWatcher = chokidar.watch(FULL_WATCH_PATHS, {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true
});

// Handle CSS file changes with quick throttling
cssWatcher.on('change', (path) => {
  console.log(`CSS file changed: ${path}`);
  
  // Clear any existing timer
  if (buildTimer) {
    clearTimeout(buildTimer);
  }
  
  // Set a new timer with faster throttle for CSS
  buildTimer = setTimeout(() => {
    buildProject(false);
  }, isFirstRun ? 0 : CSS_THROTTLE_TIME);
  
  if (isFirstRun) {
    isFirstRun = false;
  }
});

// Handle other file changes with longer throttling
fullWatcher.on('all', (event, path) => {
  // Skip CSS files as they're handled by the other watcher
  if (path === CSS_WATCH_PATH) return;
  
  console.log(`File ${event}: ${path}`);
  
  // Clear any existing timer
  if (buildTimer) {
    clearTimeout(buildTimer);
  }
  
  // Set a new timer with longer throttle for non-CSS files
  buildTimer = setTimeout(() => {
    buildProject(true);
  }, FULL_THROTTLE_TIME);
});

// Handle cleanup on exit
process.on('SIGINT', () => {
  console.log('Shutting down...');
  if (buildProcess) buildProcess.kill();
  if (previewProcess) previewProcess.kill();
  process.exit();
});

// Kill any existing processes on port 8888
exec('lsof -ti:8888 | xargs kill -9 || true', () => {
  console.log('⌛ Initial build starting...');
  buildProject(true);
});
