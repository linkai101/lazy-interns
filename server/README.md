# Backend

The backend server is a Flask application that manages the game logic and game state.
The server receives game state updates from clients using REST API requests
and distributes game state updates to all connected clients using server-sent events.

## Installation

First, make sure you are on a Unix-based operating system (e.g., macOS or Linux), otherwise, this setup will not work.
This server requires Python and Redis to be installed.
It is built on Flask, a Python web framework, and uses Redis as a pub/sub message broker.

1. Install [Python 3.12](https://www.python.org/downloads/) or newer.
   To check whether Python is installed properly, run `python3 --version` in a terminal and ensure that it works.
2. Install [Redis](https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/).
   To check whether Redis is installed properly, run `redis-server --version` in a terminal and ensure that it works.

## Setup

The setup only needs to be run once when cloning and every time after changing the dependencies.

1. Open a terminal and navigate to the `server` subfolder.
2. Run `./setup.sh` to set up the Python virtual environment and install the required packages.

## How to Run

1. Open a terminal and navigate to the `server` subfolder.
2. Run `./serve.sh` to start the Redis & Flask servers. It will begin serving the API under `http://localhost:8080`.