from flask import Blueprint, request, Response, jsonify
from ...models import User, Post, Topic
from .... import mongo
import datetime
from bson import ObjectId
# import ..comments.routes as comments_fns
import json
# import requests

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

# @posts.route('/posts',methods=['POST'])
# def post_post():

#     body = request.get_json()
#     post = Post(**body).save()
#     id = post.id

#     return {'id': str(id)}, 200

@posts.route('/posts/<id>/comments',methods=['GET'])
def return_comments_for_post(id):

    from ..comments.routes import get_one_comment

    ObjId = ObjectId(id)
    post = Post.objects.get(id=ObjId)

    comments = []
    for comment in post.comments_id:
        comment_data = json.loads(get_one_comment(ObjectId(comment.id)).get_data())
        comments.append(comment_data)

    return jsonify(comments), 200

'''
@posts.route('/posts/<id>',methods=['PUT'])
def put_post(id,data=None,comment=none):

    ObjId = ObjectId(id)

    # Checks if it has been passed data - only passed data if being called inside another route
    if data:
        body = data
    else:
        body = request.get_json()

    print(body)

    #Seems to mess up the put request a bit
    # if '_id' in body:
    #     del body['_id']

    # To convert all $oid to int's.
    if 'comments_id' in body:
        int_comments_id = []
        for item in body['comments_id']:
            int_comments_id.append(item['$oid'])
        body['comments_id'] = int_comments_id

    # del body['title']
    del body['user_id']
    # del body['post_body']

    # post  = Post.objects.get(id=ObjId).update(**body)
    print(body)
    post  = Post.objects.get(id=ObjId)
    print(post.to_json())
    # post = post.update(**body)

    post = post.update(comments_id=body['comments_id'])

    return '', 200
    # return post.to_json(), 200
'''

@posts.route('/posts',methods=['POST'])
def post_post():

    ## Unpack Data
    all_data = request.get_json()
    post_title = all_data['title']
    post_body = all_data['post_body']
    user_id = list(all_data['user_id'].values())[0]
    topic_id = list(all_data['topic_id'].values())[0]

    ## Find User to add to comment object
    user = User.objects.get(id=user_id)

    ## Post comment
    post = Post(title=post_title,post_body=post_body,user_id=user).save()
    post_id = post.id
    print(post_id)

    ## Find Post and add comment ref to it
    Topic.objects(id=topic_id).update_one(push__posts_id=post)

    return {'new_post_id': str(post_id)}, 200