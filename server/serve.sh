#!/bin/bash

gunicorn main:app --worker-class gevent --bind 127.0.0.1:$1
