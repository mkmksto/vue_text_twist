import random
import time
import uuid
from pprint import pprint

from flask import Flask, render_template, request
from flask_cors import cross_origin

# from utils import dictionary, game_settings

app = Flask(__name__)


def main():
    pass


@app.route('/')
def index():
    return 'HAHA!'
    # return render_template('index.html')


@app.route('/api/random', methods=['GET'])
@cross_origin(origins=['http://127.0.0.1:5173', 'http://localhost:5173'])
def get_random_word():
    return {'word': 'hah!!!H'}


if __name__ == '__main__':
    app.run(debug=True)
