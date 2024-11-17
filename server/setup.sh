# Create a Python virtual environment
python3 -m venv .venv

# Activate the virtual environment
. .venv/bin/activate

# Install required Python packages
pip install -r requirements.txt

# Only do if .env file does not exist
if [ ! -f .env ]; then
  # Generate a random secret key
  SECRET_KEY=$(cat /dev/urandom | tr -dc 'A-Za-z0-9' | fold -w 64 | head -n 1)

  # Create .env file with the necessary contents
  cat <<EOL > .env
BACKEND_PORT=8080
REDIS_PORT=6379
REDIS_URL=redis://localhost:6379
FLASK_SECRET_KEY=$SECRET_KEY
EOL

fi
