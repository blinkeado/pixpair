const { exec } = require('child_process');
const readline = require('readline');

// Create a token file first
const fs = require('fs');
const os = require('os');
const path = require('path');

// Create the .subframe directory if it doesn't exist
const subframeDir = path.join(os.homedir(), '.subframe');
if (!fs.existsSync(subframeDir)) {
  fs.mkdirSync(subframeDir, { recursive: true });
}

// Create/update the config file with the token
const configPath = path.join(subframeDir, 'config.json');
fs.writeFileSync(configPath, JSON.stringify({ token: 'c31c04e2b8b8dc35b51849a921296777fc81251888e759d69cd2e91f864d4c35' }));

console.log('Initialized token file at:', configPath);
console.log('Now attempting to run subframe init...');

// Try running the init command
exec('npx @subframe/cli init --yes', (error, stdout, stderr) => {
  console.log(stdout);
  if (stderr) console.error(stderr);
  if (error) {
    console.error('Error running init:', error);
  } else {
    console.log('Subframe init completed');
    
    // Then run sync command
    console.log('Attempting to run subframe sync...');
    exec('npx @subframe/cli sync', (syncError, syncStdout, syncStderr) => {
      console.log(syncStdout);
      if (syncStderr) console.error(syncStderr);
      if (syncError) {
        console.error('Error running sync:', syncError);
      } else {
        console.log('Subframe sync completed');
      }
    });
  }
});
