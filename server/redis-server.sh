#!/bin/bash

# Load from .env file in CWD into env vars
export $(cat .env | xargs)

# Start Redis server
redis-server --port $REDIS_PORT