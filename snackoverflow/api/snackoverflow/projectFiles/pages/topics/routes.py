from flask import Blueprint, request, jsonify
from ...models import Topic, User
from .... import mongo

topics = Blueprint('topics', __name__)

@topics.route('/going')
def test():

    for user in User.objects:
        print (user.username)

    # new = User()
    return 'something'
