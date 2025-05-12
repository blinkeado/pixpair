#!/bin/bash

# Script to push changes to GitHub, wait for Netlify deployment, and authorize the domain in Firebase

# ANSI color codes for pretty output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check for Netlify token
if [ -z "$NETLIFY_TOKEN" ]; then
  echo -e "${RED}Error: NETLIFY_TOKEN environment variable is not set${NC}"
  echo "Please set it with: export NETLIFY_TOKEN=your_netlify_api_token"
  exit 1
fi

echo -e "${BLUE}=== Pushing to GitHub and Updating Netlify Domains ===${NC}"

# Step 1: Push to GitHub
echo -e "${YELLOW}Pushing changes to GitHub...${NC}"
./push-to-github.sh

if [ $? -ne 0 ]; then
  echo -e "${RED}GitHub push failed!${NC}"
  exit 1
fi

echo -e "${GREEN}Successfully pushed to GitHub!${NC}"

# Step 2: Wait for Netlify deployment to start
echo -e "${YELLOW}Waiting for Netlify deployment to start (30 seconds)...${NC}"
sleep 30

# Step 3: Install necessary packages
echo -e "${YELLOW}Installing required npm packages...${NC}"
npm install --no-save axios firebase-admin

if [ $? -ne 0 ]; then
  echo -e "${RED}Failed to install required packages!${NC}"
  exit 1
fi

# Step 4: Run domain authorization script
echo -e "${YELLOW}Checking Netlify deployment and updating Firebase domains...${NC}"
node scripts/authorize-domain.js

echo -e "${BLUE}=== Process Complete ===${NC}"
echo -e "${GREEN}If successful, your new Netlify domain has been added to Firebase authorized domains.${NC}"
echo "You can now access your app at the latest Netlify URL." 