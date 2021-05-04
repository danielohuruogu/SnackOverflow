from flask import Blueprint, request, jsonify
from ...models import Topic, User
from .... import mongo

# from ... import extensions
# from ..

topics = Blueprint('topics', __name__)

# @topics.route('/topics', methods=['GET'])
# def topicpage():

#     col = mongo.db.users

#     return 'topics'



@topics.route('/going')
def test():

    # print(dir(extensions.mongo))
    # print(dir(mongo))
    # print(extensions.mongo.get_connection())
    # print(mongo.get_connection())

    for user in User.objects:
        print (user.username)

    # col = extensions.mongo.db.users
    # data = col.find_one()
    # col.insert_one({'name':'test'})
    # print(data)
    # new = User()
    return 'something'
