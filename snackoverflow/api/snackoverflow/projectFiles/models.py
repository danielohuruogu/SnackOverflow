import flask
from snackoverflow import mongo
import datetime
from mongoengine import Document, ListField, StringField, DateTimeField, IntField, EmailField, ReferenceField

class Topic(mongo.Document):
    title = StringField(required=True)
    date_created = DateTimeField(default=datetime.datetime.utcnow)
    posts_id = ListField(ReferenceField('Post'))

    meta = {'collection': 'topics'}

class Post(mongo.Document):
    title = StringField(required=True)
    user_id = ReferenceField('User')
    post_body = StringField()
    comments_id = ListField(ReferenceField('Comment'))

    meta = {'collection': 'posts'}

class Comment(mongo.Document):
    text = StringField(required=True)
    user_id = ReferenceField('User',required=True)
    popularity = IntField(default=0)

    meta = {'collection': 'comments'}

class User(mongo.Document):
    username = StringField(required=True)
    password = StringField(required=True)
    email = EmailField(required=True)
    posts_id = ListField(ReferenceField('Post'))
    comments_id = ListField(ReferenceField('Comment'))

    meta = {'collection': 'users'}