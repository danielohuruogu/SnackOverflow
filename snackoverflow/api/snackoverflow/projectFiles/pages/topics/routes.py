from flask import Blueprint, request, Response, jsonify
from ...models import Topic
from .... import mongo
import datetime
from bson import ObjectId
from ..posts.routes import get_one_post
# import requests
import json

topics = Blueprint('topics', __name__)

@topics.route('/topics',methods=['GET'])
def get_all():

    topics = Topic.objects().to_json()
    return Response(topics, mimetype="application/json", status=200)
    
@topics.route('/topics/<id>',methods=['GET'])
def get_one(id):

    ObjId = ObjectId(id)

    topic = Topic.objects.get(id=ObjId).to_json()
    return Response(topic, mimetype="application/json", status=200)

@topics.route('/topics',methods=['POST'])
def post_topic():

    body = request.get_json()
    topic = Topic(**body).save()
    id = topic.id

    return {'id': str(id)}, 200

@topics.route('/topics/<id>',methods=['DELETE'])
def delete_topic(id):

    ObjId = ObjectId(id)

    Topic.objects.get(id=ObjId).delete()
    return '',200

@topics.route('/topics/<id>',methods=['PUT'])
def update_topic(id):
    # NOT TESTED

    ObjId = ObjectId(id)

    body = request.get_json()
    Topic.objects.get(id=id).update(**body)
    return '', 200

@topics.route('/topics/<id>/posts',methods=['GET'])
def return_posts_for_topic(id):

    ObjId = ObjectId(id)
    print('topic:',id)
    # topic_id = list(all_data['post_id'].values())[0]
    topic = Topic.objects.get(id=ObjId)

    posts = []
    for post in topic.posts_id:
        print('post:',post.id)
        post_data = json.loads(get_one_post(post.id).get_data())
        posts.append(post_data)

    return jsonify(posts), 200