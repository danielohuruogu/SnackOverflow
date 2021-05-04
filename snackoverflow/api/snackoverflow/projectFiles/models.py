import flask
from snackoverflow import mongo
import datetime
from mongoengine import Document, ListField, StringField, URLField, DateTimeField

class Topic(mongo.Document):
    # id = StringField()
    title = StringField(required=True)
    date_created = DateTimeField(default=datetime.datetime.utcnow)
    posts_id = ListField(StringField())

    meta = {'collection': 'topics'}

class User(mongo.Document):
    # id = StringField()
    username = StringField(required=True)
    password = StringField(required=True)
    email = StringField(required=True)
    posts_id = ListField(StringField())
    comments_id = ListField(StringField())

    meta = {'collection': 'users'}