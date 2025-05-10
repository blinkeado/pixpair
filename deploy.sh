#!/bin/bash

# Build CSS
echo "Building CSS..."
npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify

# Deploy to Firebase
echo "Deploying to Firebase..."
firebase deploy

echo "Deployment complete!" 