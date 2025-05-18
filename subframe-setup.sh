#!/bin/bash

# This script will help set up Subframe for your PixCrab project
echo "Setting up Subframe for PixCrab..."

# Step 1: Clean up any existing processes
echo "Cleaning up any existing Subframe processes..."
pkill -f "node.*@subframe/cli" || true

# Step 2: Install Subframe CLI locally
echo "Installing Subframe CLI..."
npm install --save-dev @subframe/cli

# Step 3: Create configuration file with token
echo "Creating Subframe configuration..."
mkdir -p ~/.subframe
echo '{
  "token": "c31c04e2b8b8dc35b51849a921296777fc81251888e759d69cd2e91f864d4c35"
}' > ~/.subframe/config.json

echo "Subframe setup is complete!"
echo ""
echo "Now you can run the following commands in your regular terminal:"
echo "1. npx @subframe/cli init"
echo "   - When prompted for component directory, enter: ./src/components/ui"
echo "   - When prompted for alias, enter: @/components/ui"
echo ""
echo "2. After initialization, sync your components:"
echo "   npx @subframe/cli sync"
echo ""
echo "Your Vite configuration is already set up correctly with '@' alias pointing to '/src'"
