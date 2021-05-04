import flask
from snackoverflow import mongo
import datetime
from mongoengine import Document, ListField, StringField, URLField, DateTimeField, IntField

class Topic(mongo.Document):
    # id = StringField()
    title = StringField(required=True)
    date_created = DateTimeField(default=datetime.datetime.utcnow)
    posts_id = ListField(IntField())

    meta = {'collection': 'topics'}

class Comment(mongo.Document):
    # id = StringField()
    text = StringField(required=True)
    user_id = IntField(required=True)
    popularity = IntField()

    meta = {'collection': 'comments'}

class Post(mongo.Document):
    title = StringField(required=True)
    user_id = IntField()
    post_body = StringField()
    comments = ListField(IntField())

    meta = {'collection': 'posts'}

class User(mongo.Document):
    # id = StringField()
    username = StringField(required=True)
    password = StringField(required=True)
    email = StringField(required=True)
    posts_id = ListField(IntField())
    comments_id = ListField(IntField())

    meta = {'collection': 'users'}