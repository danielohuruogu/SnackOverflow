from flask import Blueprint, request, jsonify


main = Blueprint('main', __name__)

@main.route('/', methods=['GET'])
def testpage():
    return 'Hello World!'

    