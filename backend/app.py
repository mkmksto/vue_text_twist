import random
import time
import uuid
from pprint import pprint

from flask import Flask, render_template, request
from flask_cors import cross_origin
from utils import dictionary, game_settings
