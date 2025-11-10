#!/bin/bash

# Script to update landing page links to point to deployed app
# Usage: ./UPDATE_LINKS.sh https://app.yoursite.com

if [ -z "$1" ]; then
  echo "Usage: ./UPDATE_LINKS.sh <app-url>"
  echo "Example: ./UPDATE_LINKS.sh https://app.yoursite.com"
  exit 1
fi

APP_URL=$1

echo "Updating links to point to: $APP_URL"

# Update dashboard links
find src/components -name "*.tsx" -type f -exec sed -i '' "s|href=\"/dashboard\"|href=\"$APP_URL\"|g" {} \;

# Update sign-in links
find src/components -name "*.tsx" -type f -exec sed -i '' "s|href=\"/sign-in\"|href=\"$APP_URL/sign-in\"|g" {} \;

# Update sign-up links
find src/components -name "*.tsx" -type f -exec sed -i '' "s|href=\"/sign-up\"|href=\"$APP_URL/sign-up\"|g" {} \;

echo "✅ Links updated successfully!"
echo "Please review the changes and test before deploying."
