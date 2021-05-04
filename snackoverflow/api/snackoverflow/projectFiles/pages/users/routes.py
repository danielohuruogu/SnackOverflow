from flask import Blueprint, request, jsonify
from bson.json_util import dumps

from ...models import Topic, User
from .... import mongo


# from ... import extensions

users = Blueprint('users', __name__)

@users.route('/users', methods=['GET'])
def find_user():
    listedUsers = User.objects # can't use this raw data straight from MongoDB, throws error - to be jsonified

    for user in listedUsers:
        print(user.username)
    # print(listedUsers)

    return 'done'

    # list_cur = list(listedUsers)

    # jsonified = dumps(list_cur)
    
    # return jsonified # jsonify the array