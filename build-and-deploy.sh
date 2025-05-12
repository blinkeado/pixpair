#!/bin/bash

# Comprehensive build and deploy script for GitHub Pages

echo "⚡ Starting build and deployment process"

# Clean up any previous builds
echo "🧹 Cleaning up previous builds..."
rm -rf dist

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
fi

# Build the application
echo "🔨 Building the application..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
  echo "❌ Build failed! Aborting deployment."
  exit 1
fi

# Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment completed!"
echo "📱 Visit your site at: https://blinkeado.github.io/pixpair/" 