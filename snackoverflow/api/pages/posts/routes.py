from flask import Blueprint, request, jsonify

posts = Blueprint('posts', __name__)

@posts.route('/posts', methods=['GET'])
def postspage():
    return 'posts'

