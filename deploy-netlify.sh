#!/bin/bash

# Deployment script for Netlify

echo "⚡ Starting Netlify deployment process"

# Clean up any previous builds
echo "🧹 Cleaning up previous builds..."
rm -rf dist

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
fi

# Build the application
echo "🔨 Building the application for Netlify..."
npm run build:netlify

# Check if build was successful
if [ ! -d "dist" ]; then
  echo "❌ Build failed! Aborting deployment."
  exit 1
fi

# Deploy to Netlify using their CLI
# You need to have the Netlify CLI installed and be logged in
if command -v netlify &> /dev/null; then
  echo "🚀 Deploying to Netlify..."
  netlify deploy --prod
else
  echo "⚠️ Netlify CLI not found! Please install it with: npm install -g netlify-cli"
  echo "Then login with: netlify login"
  echo "After that, run: netlify deploy --prod"
fi

echo "✅ Deployment process completed!" 