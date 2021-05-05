from flask import Blueprint, request, Response
from ...models import posts, User, Post
from .... import mongo
import datetime
from bson import ObjectId

posts = Blueprint('posts', __name__)

@posts.route('/posts/<id>',methods=['GET'])
def get_one_post(id):

    ObjId = ObjectId(id)
    # print(ObjId)

    post = Post.objects.get(id=ObjId).to_json()
    return Response(post, mimetype="application/json", status=200)

@posts.route('/posts',methods=['GET'])
def get_all():

    post = Post.objects().to_json()
    return Response(post, mimetype="application/json", status=200)

@posts.route('/posts/<id>',methods=['PATCH'])
def update_popularity_posts(id):

    ObjId = ObjectId(id)
    posts = Post.objects.get(id=ObjId)

    body = request.get_json()

    print('increase/decrease popularity - depends on hwo you want to pass data in.')
    # Two different ways, simply pass in +1 or -1 from frontend OR pass in the updated value (so prev popularity +- 1)

    # return comment.to_json(), 200 #Correct code?
    return 'not working properly'



