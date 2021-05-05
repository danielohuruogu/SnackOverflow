from flask import Blueprint, request, jsonify

from bson.json_util import dumps

from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity

from ...models import User
from .... import mongo


from ... import extensions

###### reading users on the database #######

users = Blueprint('users', __name__)

@users.route('/users', methods=['GET'])
def find_user():
    listedUsers = User.objects

    for user in listedUsers:
        print( user.id, user.username, user.email, user.password )

    return "found all users"

### removing users off the database ###

#### UNTESTED - VALIDATION ERROR WITH EXISTINGUSER.DELETE() - OBJECTS HAVE NO ID THAT THE ENGINE CAN USE (???)

@users.route('/users/delete/<id>', methods=['DELETE'])
def delete_user(id):
    body = request.get_json() # parse info coming in
    # usernameToDelete = body['username'] # grab username 

    existingUser = User.objects.get(id=id) # search database for existing user that matches username, but just creates object with that one matching item
    # print(existingUser.id)
    # print(existingUser.username)
    # print(existingUser.email)
    # print(existingUser.password)
    existingUser.delete() # delete that member

    return jsonify(existingUser)

# it wants to carry out these functions, along with the registration - but can't do so with the wrong users already in the database
# 00.20 edit - no longer applicable for some reason ¯\_(ツ)_/¯


@users.route('/signup', methods=['POST'])
def create_user():
    # create a new model based on info coming in
    body = request.get_json()
    existingEmailAddress = User.objects( email = body['email'] )
    existingUserName = User.objects( username = body['username'])
    if existingEmailAddress or existingUserName:
        return "unable to register a new user"

    else:
        print("cant find user. will create a new one")

        # hashing the password
        hashed_pass = generate_password_hash(body['password'], method='sha256')
        # adding data to a new document
        # newUser = {'username': body['username'],'password': hashed_pass,'email': body['email']}
        newUser = User(username = body['username'], password = hashed_pass, email = body['email'])
        print(newUser)
        # saving it to the database
        newUser.save()
        print("success")
        # returning user to see if it worked
        return "added user to the database"

# this route works, but issue with the database - object has id=null, the same as the users already in the database.
# won't save a new one because of this
# edit @ 00:00 - this works


# ################# NOT TESTED YET ###################
@users.route('/login', methods=['GET', 'POST'])
def login():
    body = request.get_json()
    check_user = User.objects(email=body['email']).first()
    if check_user:
        if check_password_hash(check_user['password'], body['password']):
            login_user(check_user)

# @users.route('/users/login', methods=['GET'])
# def login():
#     # database search
#     username = request.json.get("username", None)
#     password = request.json.get("password", None)
#     if username != User.objects(username='username') or password != User.objects(password='password'):
#         return "incorrect username/password. please try again"

#     # if good, pass a token through
#     access_token = create_access_token(identity=username)
#     return jsonify(access_token=access_token)


# @users.route('/logout', methods=['GET', 'POST'])
# def logout():
#     logout_user()
