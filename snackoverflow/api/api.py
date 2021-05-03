import time
from flask import Flask

from pages.main.routes import main
from pages.topics.routes import topics
from pages.posts.routes import posts
from pages.comments.routes import comments

app = Flask(__name__)

app.register_blueprint(main)
app.register_blueprint(topics)
app.register_blueprint(posts)
app.register_blueprint(comments)




# # database connection    client = pymongo.MongoClient("mongodb+srv://tim:<password>@cluster0.ieiow.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
# # db = client.test
# app.config["MONGO_URI"] = 'mongodb://tim:TimMongoPw@cluster0.ieiow.mongodb.net/SnackOverflowDb?retryWrites=true&w=majority' # removed +srv
# client = PyMongo(app)
# print(dir(client))
# db = client.db
# print(dir(db))
# # db = client.SnackOverflowDb
# # db = client.db.SnackOverflowDb

# # print(dir(db))

# # db.init_app(app)
# # mongo_client.init_app(app)

# @app.route('/going')
# def test():
#     print('Test insert')
#     # print(db.list_collection)
#     # print(dir(db))
#     # db.insert_one({'name':'test'})
#     print('done')
#     return 'going'
#     # helper function to check if user is logged in
#         # do something

# import pymongo
# # from flask_pymongo import PyMongo

# mongo = pymongo.MongoClient('mongodb+srv://tim:TimMongoPw@cluster0.ieiow.mongodb.net/SnackOverflowDb?retryWrites=true&w=majority')

# db = pymongo.database.Database(mongo, 'SnackOverflowDb')
# col = pymongo.collection.Collection(db, 'users')
# # print(col.find_one())

# class User(db.Document):
#     name = db.StringField()


# @app.route('/going')
# def test():
#     new = User()
#     return 'something'

from flask_pymongo import PyMongo

app.config["MONGO_URI"] = "mongodb+srv://tim:TimMongoPw@cluster0.ieiow.mongodb.net/SnackOverflowDb?retryWrites=true&w=majority"
mongo=PyMongo(app)

col = mongo.db.users

@app.route('/going')
def test():
    data = col.find_one()
    col.insert_one({'name':'test'})
    print(data)
    # new = User()
    return 'something'

# print(col.find_one())

# class User(db.Document):
    # name = db.StringField()


# @app.route('/going')
# def test():
#     data = col.find_one()
#     col.insert_one({'name':'test'})
#     print(data)
#     # new = User()
#     return 'something'