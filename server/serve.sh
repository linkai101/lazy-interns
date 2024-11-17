#!/bin/bash

# Load from .env file in CWD into env vars
export $(cat .env | xargs)

# Function to clean up and kill the Redis server
cleanup() {
    if [ -n "$REDIS_PID" ]; then
        kill "$REDIS_PID" 2>/dev/null
    fi
}

# Run cleanup function on exit
trap cleanup EXIT

# Start Redis server in the background
redis-server --port $REDIS_PORT --daemonize yes

# Capture the PID of redis-server
REDIS_PID=$!

# Activate the Python virtual environment
. .venv/bin/activate

# Run the server
gunicorn main:app --worker-class gevent --bind 127.0.0.1:$BACKEND_PORT --reload --timeout 1
