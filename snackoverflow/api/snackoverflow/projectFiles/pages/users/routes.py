from flask import Blueprint, request, jsonify
from bson.json_util import dumps


from ... import extensions

users = Blueprint('users', __name__)

@users.route('/users', methods=['GET'])
def find_user():
    listedUsers = extensions.mongo.db.users.find() # can't use this raw data straight from MongoDB, throws error - to be jsonified

    list_cur = list(listedUsers)

    jsonified = dumps(list_cur)
    
    return jsonified # jsonify the array