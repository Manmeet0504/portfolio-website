#!/bin/bash

# Portfolio Website Deployment Script
# This script runs before deployment to ensure everything is ready

echo "🚀 Starting pre-deployment checks..."

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed"
    exit 1
fi

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed"
    exit 1
fi

echo "✅ Node.js and npm are available"

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run build
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ -d "dist" ]; then
    echo "✅ Build successful! dist/ directory created"
    echo "📁 Build directory contents:"
    ls -la dist/
else
    echo "❌ Build failed! dist/ directory not found"
    exit 1
fi

echo "🎉 Pre-deployment checks completed successfully!"