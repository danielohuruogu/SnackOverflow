from flask import Blueprint, request, jsonify

main = Blueprint('main', __name__)

@main.route('/test', methods=['GET'])
def testpage():
    return 'test'

