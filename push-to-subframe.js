const { exec, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Ensure the Subframe config directory exists
const subframeDir = path.join(require('os').homedir(), '.subframe');
if (!fs.existsSync(subframeDir)) {
  fs.mkdirSync(subframeDir, { recursive: true });
}

// Create the config file with the token
const configPath = path.join(subframeDir, 'config.json');
fs.writeFileSync(configPath, JSON.stringify({ 
  token: 'c31c04e2b8b8dc35b51849a921296777fc81251888e759d69cd2e91f864d4c35' 
}));

console.log('✅ Created Subframe config with your token');

// Create a .subframerc.json file in the project
const subframeRcPath = path.join(process.cwd(), '.subframerc.json');
const subframeConfig = {
  "componentsDir": "./src/components/ui",
  "alias": "@/components/ui",
  "tailwind": true,
  "framework": "vite"
};

fs.writeFileSync(subframeRcPath, JSON.stringify(subframeConfig, null, 2));
console.log('✅ Created .subframerc.json configuration file');

// Create the components/ui directory if it doesn't exist
const componentsDir = path.join(process.cwd(), 'src', 'components', 'ui');
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
  console.log('✅ Created components/ui directory');
}

// Create a sample component to push to Subframe
const sampleComponentPath = path.join(componentsDir, 'Button.jsx');
const sampleComponent = `import React from 'react';

/**
 * A customizable button component with rainbow glow effect
 */
export default function Button({ 
  children, 
  className = '', 
  variant = 'primary', 
  size = 'md',
  onClick,
  ...props 
}) {
  const baseClasses = 'rainbow-button';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    text: 'btn-text'
  };
  const sizeClasses = {
    sm: 'text-sm py-1 px-2',
    md: 'text-base py-2 px-4',
    lg: 'text-lg py-3 px-6'
  };
  
  const buttonClasses = \`\${baseClasses} \${variantClasses[variant] || ''} \${sizeClasses[size] || ''} \${className}\`;
  
  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}`;

fs.writeFileSync(sampleComponentPath, sampleComponent);
console.log('✅ Created sample Button component');

// Now try to run the sync command
console.log('🔄 Attempting to sync with Subframe...');
console.log('⚠️ Note: This may not complete due to interactive prompts');
console.log('📋 To complete this process, run in your terminal:');
console.log('   npx @subframe/cli sync');

// Try to run the sync command
exec('npx @subframe/cli sync', (error, stdout, stderr) => {
  if (stdout) console.log(stdout);
  if (stderr) console.error(stderr);
  
  if (error) {
    console.log('⚠️ Could not complete automatic sync due to interactive prompts');
    console.log('📋 Please run the following command in your terminal:');
    console.log('   npx @subframe/cli sync');
  } else {
    console.log('✅ Successfully synced with Subframe!');
  }
});
