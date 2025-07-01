#!/bin/bash

# Exit on error
set -e

echo "Rebuilding and starting containers..."
docker compose down
docker compose build
docker compose up -d

echo "Waiting for containers to be ready..."
sleep 5

echo "Setting up database..."
docker compose exec backend rails db:create db:migrate db:seed

echo "Services started and configured successfully!"
echo "Frontend: http://localhost:5173"
echo "Backend: http://localhost:3000"
