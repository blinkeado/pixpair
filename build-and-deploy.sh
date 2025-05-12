#!/bin/bash

# Comprehensive build and deploy script for GitHub Pages or Netlify

# Default to GitHub Pages if no platform is specified
PLATFORM=${1:-"github"}

echo "⚡ Starting build and deployment process for $PLATFORM"

# Clean up any previous builds
echo "🧹 Cleaning up previous builds..."
rm -rf dist

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
fi

# Build the application based on platform
if [ "$PLATFORM" = "netlify" ]; then
  echo "🔨 Building the application for Netlify..."
  npm run build:netlify
else
  echo "🔨 Building the application for GitHub Pages..."
  npm run build
fi

# Check if build was successful
if [ ! -d "dist" ]; then
  echo "❌ Build failed! Aborting deployment."
  exit 1
fi

# Deploy based on platform
if [ "$PLATFORM" = "netlify" ]; then
  # Deploy to Netlify
  if command -v netlify &> /dev/null; then
    echo "🚀 Deploying to Netlify..."
    netlify deploy --prod
  else
    echo "⚠️ Netlify CLI not found! Please install it with: npm install -g netlify-cli"
    echo "Then login with: netlify login"
    echo "After that, run: netlify deploy --prod"
  fi
  echo "📱 Once deployed, visit your site at your Netlify domain"
else
  # Deploy to GitHub Pages
  echo "🚀 Deploying to GitHub Pages..."
  npm run deploy
  echo "📱 Visit your site at: https://blinkeado.github.io/pixpair/"
fi

echo "✅ Deployment completed!" 