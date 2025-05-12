#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== Building and Pushing PixCrab to GitHub ===${NC}\n"

# Check for uncommitted changes
echo -e "${YELLOW}Checking for changes...${NC}"
git status

# Stage all changes
echo -e "\n${YELLOW}Staging changes...${NC}"
git add .

# Use default commit message without user input
COMMIT_MESSAGE="Update PixCrab app with MCP architecture"
echo -e "\n${YELLOW}Using commit message: ${COMMIT_MESSAGE}${NC}"

# Commit changes
echo -e "\n${YELLOW}Committing changes...${NC}"
git commit -m "$COMMIT_MESSAGE"

# Push to remote
echo -e "\n${YELLOW}Pushing to GitHub...${NC}"
git push

if [ $? -eq 0 ]; then
  echo -e "\n${GREEN}Successfully pushed to GitHub!${NC}"
  echo -e "${YELLOW}Now you can deploy to Netlify:${NC}"
  echo -e "1. Go to Netlify dashboard"
  echo -e "2. Connect to your GitHub repo"
  echo -e "3. Follow the deployment steps"
else
  echo -e "\n${RED}Error pushing to GitHub. Please check your credentials and try again.${NC}"
fi 