from flask import Blueprint, request, jsonify, render_template, redirect, url_for, flash

from bson.json_util import dumps
from bson import ObjectId

from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash

from flask_login import current_user, login_user, logout_user, login_required

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


@users.route('/signup')
def signup():
    return render_template('signup.html')

@users.route('/signup', methods=['POST'])
def create_user():
    # # create a new model based on info coming in
    # body = request.get_json()
    email = request.form.get("email")
    username = request.form.get("username")
    password = request.form.get("password")

    existingEmailAddress = User.objects( email = email )
    existingUserName = User.objects( username = username)

    if existingEmailAddress or existingUserName:
        flash("Email address/username already exists")
        return redirect(url_for('.signup'))

    else:
        print("cant find user. will create a new one")

        # hashing the password
        hashed_pass = generate_password_hash(password, method='sha256')
        # adding data to a new document
        newUser = User(username = username, password = hashed_pass, email = email)
        print(newUser)
        # saving it to the database
        newUser.save()
        print("success")
        # returning user to see if it worked
        return redirect(url_for('.login'))

# this route works, but issue with the database - object has id=null, the same as the users already in the database.
# won't save a new one because of this
# edit @ 00:00 - this works


# ################# NOT TESTED YET ###################
# method with flask-login - still working on it
# @users.route('/login')
# def login():
#     return render_template('login.html')

@users.route('/login', methods=['POST'])
def login_to_site():
    email = request.body.get("email")

    password = request.get.get("password")

    check_user = User.objects.get(email=email) # finding user in database by email

    if check_user is None:
        flash("User doesn't exist. Please try again")
        return redirect(url_for('.login'))
        # need to send something back to React instead

    login_user(check_user) # log the user in if passwords match
    return redirect(url_for('.profile'))
    # again, need to send something back to React - unsure of what, though


#### to display an account - NOT TESTED ####
## 6/5/21, 13.30 - these will be protected routes
@users.route('/profile')
@login_required
def profile():
    return render_template('profile.html', name=current_user.username)


@users.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('.login'))