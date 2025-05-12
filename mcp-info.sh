#!/bin/bash

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== PixCrab MCP Architecture Information ===${NC}\n"

echo -e "${BLUE}What is MCP?${NC}"
echo "MCP stands for Model-Controller-Presenter, a variant of the MVC pattern."
echo "It helps organize code into components with specific responsibilities:"
echo "  - Models: Handle data and business logic"
echo "  - Controllers: Coordinate between models and presenters"
echo "  - Presenters: Update the UI based on model changes"
echo

echo -e "${BLUE}Directory Structure:${NC}"
echo "src/"
echo "├── models/        # Data models"
echo "├── controllers/   # Business logic controllers"
echo "├── presenters/    # UI presentation logic"
echo "├── services/      # External service integrations"
echo "└── utils/         # Utility functions"
echo

echo -e "${BLUE}Key Benefits:${NC}"
echo "✓ Separation of concerns"
echo "✓ Improved testability"
echo "✓ Better code organization"
echo "✓ Easier maintenance"
echo "✓ More extensible code base"
echo

echo -e "${BLUE}Quick Start:${NC}"
echo "1. Read the documentation in src/README.md"
echo "2. Understand the flow: UI → Presenter → Controller → Model → Controller → Presenter → UI"
echo "3. When modifying functionality, identify which component is responsible"
echo

echo -e "${YELLOW}Debugging Tips:${NC}"
echo "• Access the debug console by clicking the button in the bottom right corner"
echo "• Check the browser console for errors"
echo "• Models notify listeners when they change - track events there"
echo "• Use AppUtils.debugLog() for consistent logging"
echo

echo -e "${BLUE}Ready to use!${NC}"
echo "You can now run the application and see the MCP architecture in action."
echo "Open index.html in your browser to get started."
echo

echo -e "${GREEN}Happy coding!${NC}" 