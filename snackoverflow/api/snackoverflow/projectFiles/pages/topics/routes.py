from flask import Blueprint, request, Response
from ...models import Topic, User
from .... import mongo
import datetime
from bson import ObjectId

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
def delete_topic(id):
    # NOT TESTED

    ObjId = ObjectId(id)

    body = request.get_json()
    Topic.objects.get(id=id).update(**body)
    return '', 200