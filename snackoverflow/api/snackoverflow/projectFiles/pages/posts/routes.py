from flask import Blueprint, request, Response, jsonify
from ...models import User, Post
from .... import mongo
import datetime
from bson import ObjectId
from ..comments.routes import get_one_comment
import json

posts = Blueprint('posts', __name__)

@posts.route('/posts/<id>',methods=['GET'])
def get_one_post(id):

    ObjId = ObjectId(id)

    post = Post.objects.get(id=ObjId).to_json()
    return Response(post, mimetype="application/json", status=200)

@posts.route('/posts',methods=['GET'])
def get_all():

    post = Post.objects().to_json()
    return Response(post, mimetype="application/json", status=200)

@posts.route('/posts/<id>',methods=['PATCH'])
def update_posts(id):

    ObjId = ObjectId(id)
    posts = Post.objects.get(id=ObjId)

    body = request.get_json()
    post  = Post.objects.get(id=id).update(**body)

    # print('increase/decrease popularity - depends on hwo you want to pass data in.')
    # Two different ways, simply pass in +1 or -1 from frontend OR pass in the updated value (so prev popularity +- 1)

    return post.to_json(), 200 #Correct code?
    # return 'not working properly'

@posts.route('/posts',methods=['POST'])
def post_post():

    body = request.get_json()
    post = Post(**body).save()
    id = post.id

    return {'id': str(id)}, 200

@posts.route('/posts/<id>/comments',methods=['GET'])
def return_comments_for_post(id):

    ObjId = ObjectId(id)
    post = Post.objects.get(id=ObjId)

    comments = []
    for comment in post.comments_id:
        comment_data = json.loads(get_one_comment(ObjectId(comment.id)).get_data())
        comments.append(comment_data)

    return jsonify(comments), 200

