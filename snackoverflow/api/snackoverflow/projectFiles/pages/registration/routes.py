from flask import Blueprint, request, jsonify

from bson.json_util import dumps

from werkzeug.security import generate_password_hash

from ...models import User
from .... import mongo

registration = Blueprint('registration', __name__)


@registration.route('/signup', methods=['POST'])
def create_user():
    # create a new model based on info coming in
    body = request.get_json()
    existingEmailAddress = User.objects( email = body.email ).first()
    if existingEmailAddress is None:
        hashed_pass = generate_password_hash(form.password, method='sha256')
        newUser = User(username = body.username, password = hashed_pass, email = body.email)
        newUser.save()
        return newUser
    else:
        return "error. please try again"

    # will have to parse result into format that server can read
    # create a new instance of the model
    # newUser = User(**body)

    # newUser.hash_password
    # newUser.save()