import time
from flask import flask

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}
