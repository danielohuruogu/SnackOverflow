from flask import Blueprint, request, jsonify, render_template

from bson.json_util import dumps
from bson import ObjectId

from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash

# from flask_login import current_user, login_user

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

@users.route('/users/delete/<id>', methods=['DELETE'])
def delete_user(id):
    # body = request.get_json() # can be used for PostMan

    ObjId = ObjectId(id)

    existingUser = User.objects.get(id=ObjId) # search database for existing user that matches username, but just creates object with that one matching item

    existingUser.delete()

    return "user deleted"

# it wants to carry out these functions, along with the registration - but can't do so with the wrong users already in the database
# 00.20 edit - no longer applicable for some reason ¯\_(ツ)_/¯


@users.route('/signup', methods=['GET'])
def signup():
    return render_template('/signup')
    # # create a new model based on info coming in
    # body = request.get_json()
    # existingEmailAddress = User.objects( email = body['email'] )
    # existingUserName = User.objects( username = body['username'])
    # if existingEmailAddress or existingUserName:
    #     return "unable to register a new user"

    # else:
    #     print("cant find user. will create a new one")

    #     # hashing the password
    #     hashed_pass = generate_password_hash(body['password'], method='sha256')
    #     # adding data to a new document
    #     newUser = User(username = body['username'], password = hashed_pass, email = body['email'])
    #     print(newUser)
    #     # saving it to the database
    #     newUser.save()
    #     print("success")
    #     # returning user to see if it worked
    #     return "added user to the database"

# this route works, but issue with the database - object has id=null, the same as the users already in the database.
# won't save a new one because of this
# edit @ 00:00 - this works


# ################# NOT TESTED YET ###################
# method with flask-login - still working on it
@users.route('/login', methods=['GET'])
def login():
    return render_template('login.html')
    
    # body = request.get_json()
    # check_user = User.objects.get(email=body['email'])
    # if check_user:
    #     try:
    #         check_password_hash(check_user['password'], body['password'])
    #         login_user(check_user) # no idea what this means yet, but it all goes through with status 200
    #         return "passwords match - will login"

    #     except ValidationError as e:
    #         return "Validation error - passwords don't match"


#### to display an account - NOT TESTED ####
@users.route('/profile', methods=['GET'])
def profile():
    return render_template('profile.html')
