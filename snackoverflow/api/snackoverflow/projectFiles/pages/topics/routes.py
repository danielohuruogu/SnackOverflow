from flask import Blueprint, request, Response
from ...models import Topic, User
from .... import mongo
import datetime

topics = Blueprint('topics', __name__)

@topics.route('/topics')
def test():

    topics = Topic.objects().to_json()
    return Response(topics, mimetype="application/json", status=200)
