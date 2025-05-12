const admin = require('firebase-admin');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Check for environment variables
const NETLIFY_TOKEN = process.env.NETLIFY_TOKEN;
const NETLIFY_SITE_ID = process.env.NETLIFY_SITE_ID || 'pixcrab';

if (!NETLIFY_TOKEN) {
  console.error('Error: NETLIFY_TOKEN environment variable is required');
  process.exit(1);
}

// Load Firebase service account
let serviceAccount;
try {
  const serviceAccountPath = path.resolve(__dirname, '../firebase-service-account.json');
  serviceAccount = require(serviceAccountPath);
} catch (error) {
  console.error('Error loading Firebase service account:', error.message);
  console.error('Make sure firebase-service-account.json exists in the project root directory');
  process.exit(1);
}

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

async function monitorDeployment() {
  try {
    console.log('Checking for recent Netlify deployments...');
    
    // Poll Netlify API for the latest deployment
    const response = await axios.get(
      `https://api.netlify.com/api/v1/sites/${NETLIFY_SITE_ID}/deploys`,
      { headers: { Authorization: `Bearer ${NETLIFY_TOKEN}` } }
    );
    
    // Get the most recent successful deployment
    const latestDeploy = response.data.find(deploy => deploy.state === 'ready');
    if (!latestDeploy) {
      console.log('No completed deployments found');
      return;
    }
    
    // Extract the domain
    const deploymentUrl = latestDeploy.deploy_ssl_url || latestDeploy.url;
    const domain = new URL(deploymentUrl).hostname;
    
    console.log(`Found latest deployment: ${domain}`);
    
    // Add domain to Firebase authentication
    const auth = admin.auth();
    const settings = await auth.getProjectConfig();
    
    // Don't add if it already exists
    if (!settings.authDomains.includes(domain)) {
      settings.authDomains.push(domain);
      await auth.updateProjectConfig({ authDomains: settings.authDomains });
      console.log(`✅ Added ${domain} to Firebase authorized domains`);
      
      // Update APP_BASE_URL in index.html
      updateAppBaseUrl(deploymentUrl);
    } else {
      console.log(`✓ Domain ${domain} already authorized in Firebase`);
    }
    
    // List all currently authorized domains
    console.log('\nCurrently authorized domains:');
    settings.authDomains.forEach(domain => console.log(`- ${domain}`));
    
  } catch (error) {
    console.error('Error:', error.message);
    if (error.response) {
      console.error('API response:', error.response.data);
    }
  }
}

function updateAppBaseUrl(url) {
  try {
    const indexPath = path.resolve(__dirname, '../index.html');
    let htmlContent = fs.readFileSync(indexPath, 'utf8');
    
    // Update the APP_BASE_URL
    htmlContent = htmlContent.replace(
      /window\.APP_BASE_URL\s*=\s*['"].*?['"]/,
      `window.APP_BASE_URL = '${url}'`
    );
    
    fs.writeFileSync(indexPath, htmlContent);
    console.log(`✅ Updated APP_BASE_URL to ${url} in index.html`);
  } catch (error) {
    console.error('Error updating APP_BASE_URL:', error.message);
  }
}

// Run the main function
monitorDeployment(); 