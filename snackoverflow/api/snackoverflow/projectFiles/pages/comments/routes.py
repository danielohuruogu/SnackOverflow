from flask import Blueprint, request, Response
from ...models import User, Post, Comment
from .... import mongo
import datetime
from bson import ObjectId
import json

comments = Blueprint('comments', __name__)

@comments.route('/comments',methods=['GET'])
def get_comments():

    comments = Comment.objects().to_json()
    return Response(comments, mimetype="application/json", status=200)

@comments.route('/comments/<id>',methods=['GET'])
def get_one_comment(id):

    ObjId = ObjectId(id)

    comment = Comment.objects.get(id=ObjId).to_json()
    return Response(comment, mimetype="application/json", status=200)

# @comments.route('/comments/<id>',methods=['PATCH'])
# def update_popularity_comment(id):

#     ObjId = ObjectId(id)
#     comment = Comment.objects.get(id=ObjId)

#     body = request.get_json()

#     print('increase/decrease popularity - depends on hwo you want to pass data in.')
#     # Two different ways, simply pass in +1 or -1 from frontend OR pass in the updated value (so prev popularity +- 1)

#     # return comment.to_json(), 200 #Correct code?
#     return 'not working properly'


@comments.route('/comments',methods=['POST'])
def post_comment():

    ## Unpack Data
    all_data = request.get_json()
    comment_text = all_data['text']
    user_id = list(all_data['user_id'].values())[0]
    post_id = list(all_data['post_id'].values())[0]

    ## Find User to add to comment object
    user = User.objects.get(id=user_id)

    ## Post comment
    comment = Comment(text=comment_text,user_id=user).save()
    comment_id = comment.id
    print(comment_id)

    ## Find Post and add comment ref to it
    Post.objects(id=post_id).update_one(push__comments_id=comment)

    return {'new_comment_id': str(comment_id)}, 200
