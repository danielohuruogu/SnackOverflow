from flask import Blueprint, request, jsonify

comments = Blueprint('comments', __name__)

@comments.route('/comments', methods=['GET'])
def commentspage():
    return 'comments'
