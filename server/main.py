import re

from flask import Flask, request, render_template, jsonify, Blueprint
from flask_cors import CORS
from flask_sse import sse
from dataclasses import dataclass, field
import uuid
import os
import typing as t

state: t.Optional["GameState"] = None


@dataclass(frozen=True)
class Player:
    id: str
    name: str

    def to_response(self):
        return jsonify(self.__dict__)


@dataclass
class GameState:
    started: bool = False
    players: dict[str, Player] = field(default_factory=dict)


def reset():
    global state
    state = GameState()


reset()
app = Flask(__name__)

# debug = os.environ.get('FLASK_DEBUG', True)
CORS(app)
app.secret_key = os.environ['FLASK_SECRET_KEY']
app.config['REDIS_URL'] = os.environ['REDIS_URL']
app.register_blueprint(sse, url_prefix='/_/global-gamestate/stream')

api_bp = Blueprint('api', __name__, url_prefix='/api')


@api_bp.route('/reset_all')
def reset_route():
    reset()

    return {}, 200


@api_bp.route('/')
def index():
    return render_template('index.html')


@api_bp.route('/hello')
def publish_hello():
    global state
    sse.publish(state, type='gamestate-change')
    return 'Message sent!'


@api_bp.route('/get_player')
def get_player_id():
    global state

    # Check if the player ID cookie is already set
    player_id = request.cookies.get('player_id')
    if player_id:
        # Check if player id is uuid
        try:
            uuid.UUID(player_id)
        except ValueError:
            return {'error': f'Player ID is not a valid UUID: {player_id}'}, 400

    player = state.players.get(player_id)

    if player:
        return player.to_response()

    return {'error': 'Player not found'}, 404


@api_bp.route('/create_player/<name>', methods=['POST'])
def create_player(name):
    global state

    if not is_valid_username(name):
        return {'error': f'Invalid username: "{name}"'}, 400

    # Check if the player ID cookie is already set
    player_id = request.cookies.get('player_id')
    if player_id:
        # Check if player id is uuid
        try:
            uuid.UUID(player_id)
        except ValueError:
            return {'error': f'Player ID is not a valid UUID: {player_id}'}, 400

    print(player_id)
    player = state.players.get(player_id)
    found = bool(player)
    print(state.players)

    if not found:
        print('not found')
        # Generate a new player with randomly generated UUID as their player id
        player_id = str(uuid.uuid4())
        player = Player(id=player_id, name=name)
        state.players[player.id] = player

    # Create a response object to set the cookie
    response = player.to_response()

    # Set the cookie with the player ID, valid for 12 hours
    response.set_cookie('player_id', str(player_id), max_age=12 * 60 * 60)  # 12 hours in seconds

    return response


app.register_blueprint(api_bp)

# Regex pattern for allowed characters: alphanumeric, space, hyphen, underscore, and punctuation
USERNAME_REGEX = re.compile(r'^[a-zA-Z0-9-_.,!?*:;]+$')


def is_valid_username(username: str) -> bool:
    return len(username) <= 24 and re.match(USERNAME_REGEX, username)
