import random
import time
import uuid
from pprint import pprint

from flask import Flask, render_template, request
from flask_cors import cross_origin
from utils import english_dictionary, game_settings, json_utils

app = Flask(__name__)


def main():
    dict_file_paths = json_utils.get_dict_file_paths()
    all_dict_data = json_utils.get_all_dict_data(dict_file_paths)
    return english_dictionary.EnglishDict(all_dict_data)


@app.route('/')
def index():
    return 'HAHjjjjjA!'
    # return render_template('index.html')


@app.route(
    '/api/random_word',
)
# @cross_origin(origins=['http://127.0.0.1:5173', 'http://localhost:5173'])
def get_random_word():
    """Get a random word and its corresponding subwords
    in python dict format
    This endpoint repeatedly queries for a random word
    until the word actually meets the criteria passed
    by the client through the fetch POST request
    Returns:
        dict: {'word': random_word, 'sub_words': sub_words}
    """

    params = {}
    # params: dict = request.json

    min_chars = params.get('min_chars', 6)
    max_chars = params.get('max_chars', 12)
    diff: str = params.get('difficulty', 'medium')
    diff: int = game_settings.diff_map.get(diff)
    max_subwords = params.get('max_subwords', 20)

    while True:
        rand_word = eng_dict.get_random_word()
        frequency = eng_dict.get_frequency(rand_word)
        if (
            len(rand_word) < max_chars
            and len(rand_word) > min_chars
            and frequency > diff
        ):
            break

        sub_words = eng_dict.get_subwords(rand_word, max_num=max_subwords)
        sub_words.insert(0, rand_word)
        sub_words = [
            {'sub_word': sub_word, 'id': str(uuid.uuid4()), 'has_been_guessed': False}
            for sub_word in sub_words
        ]

        shuffled_word = list(rand_word)
        shuffled_word = [
            {'letter': letter, 'id': str(uuid.uuid4()), 'letter_transferred': False}
            for letter in shuffled_word
        ]
        random.shuffle(shuffled_word)

        # return 'helllooo'
        return {
            'word': rand_word,
            'sub_words': sub_words,
            'shuffled_word': shuffled_word,
        }


if __name__ == '__main__':
    eng_dict = main()
    app.run(debug=True)
