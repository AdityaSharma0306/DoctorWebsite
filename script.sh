#!/bin/bash

if [ -f "package.json" ]; then
  echo "package.json found. Running npm install..."
  npm install
else
  echo "package.json not found. Skipping install."
fi
