from flask import Blueprint, request, jsonify

from bson.json_util import dumps

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from werkzeug.security import check_password_hash

from ...models import Topic, User
from .... import mongo


# from ... import extensions

users = Blueprint('users', __name__)

@users.route('/users', methods=['GET'])
def find_user():
    listedUsers = User.objects # can't use this raw data straight from MongoDB, throws error - to be jsonified

    for user in listedUsers:
        print(user.username)

    return 'done'



@users.route('/users/login', methods=['GET'])
def login():
    # database search
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    if username != User.objects(username='username') or password != User.objects(password='password'):
        return "incorrect username/password. please try again"

    # if good, pass a token through
    access_token = create_access_token(identity=username)
    return jsonify(access_token=access_token)



