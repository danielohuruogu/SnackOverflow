from flask import Blueprint, request, Response
from ...models import User, Post, Comment
from .... import mongo
import datetime
from bson import ObjectId

comments = Blueprint('comments', __name__)

@comments.route('/comments/<id>',methods=['GET'])
def get_one_comment(id):

    ObjId = ObjectId(id)

    comment = Comment.objects.get(id=ObjId).to_json()
    return Response(comment, mimetype="application/json", status=200)

@comments.route('/comments/<id>',methods=['PATCH'])
def update_popularity_comment(id):

    ObjId = ObjectId(id)
    comment = Comment.objects.get(id=ObjId)

    body = request.get_json()

    print('increase/decrease popularity - depends on hwo you want to pass data in.')
    # Two different ways, simply pass in +1 or -1 from frontend OR pass in the updated value (so prev popularity +- 1)

    # return comment.to_json(), 200 #Correct code?
    return 'not working properly'

@comments.route('/comments',methods=['POST'])
def post_comment():

    body = request.get_json()
    comment = Comment(**body).save()
    id = comment.id

    return {'id': str(id)}, 200
