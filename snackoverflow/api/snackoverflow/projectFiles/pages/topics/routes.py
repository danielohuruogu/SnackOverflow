from flask import Blueprint, request, jsonify
from ...models import Topic, User
from .... import mongo
import datetime

topics = Blueprint('topics', __name__)

@topics.route('/topics')
def test():

    for topic in Topic.objects:
        # print(dir(topic.objects))
        print(topic.title)

    # print(datetime.datetime.now())

    # new = User()
    return 'topics'
