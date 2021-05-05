import flask
from snackoverflow import mongo
import datetime
from mongoengine import Document, ListField, StringField, DateTimeField, IntField, EmailField, ReferenceField

# importing hashing functions from bcrypt
from werkzeug.security import generate_password_hash, check_password_hash

class Topic(mongo.Document):
    title = StringField(required=True)
    date_created = DateTimeField(default=datetime.datetime.utcnow)

    # to reference the posts and stuff, this may need to change quite a bit
    posts_id = ListField(IntField()) # should that be an intfield?

    meta = {'collection': 'topics'}

class Comment(mongo.Document):
    text = StringField(required=True)
    user_id = ReferenceField('User',required=True)
    popularity = IntField()

    meta = {'collection': 'comments'}

class Post(mongo.Document):
    title = StringField(required=True)
    user_id = ReferenceField('User')
    post_body = StringField()
    comments_id = ListField(ReferenceField(Comment))

    meta = {'collection': 'posts'}

class User(mongo.Document):
    username = StringField(required=True)
    password = StringField(required=True)

    # adding hashing functions
    def hash_password(self, password):
        self.password_hash = generate_password_hash(password).decode('utf8')

    def check_password(Self, password):
        return check_password_hash(self.password_hash, password)

    email = EmailField(required=True)
    posts_id = ListField(ReferenceField(Post))
    comments_id = ListField(ReferenceField(Comment))

    meta = {'collection': 'users'}