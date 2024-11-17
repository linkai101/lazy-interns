#!/bin/bash

# Load from .env file in CWD into env vars
export $(cat .env | xargs)

# Run the server
gunicorn main:app --worker-class gevent --bind 127.0.0.1:$BACKEND_PORT --reload --timeout 1
