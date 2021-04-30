from flask import Blueprint, request, jsonify

topics = Blueprint('topics', __name__)

@topics.route('/topics', methods=['GET'])
def topicpage():
    return 'testtopic'
