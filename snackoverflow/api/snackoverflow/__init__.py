import os
import sys

from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
# from flask_bcrypt import Bcrypt # will use werkzeug instead

from flask_jwt_extended import jwt_required

from .projectFiles.extensions import mongo, initialize_db

from .projectFiles.pages.main.routes import main
from .projectFiles.pages.topics.routes import topics
from .projectFiles.pages.posts.routes import posts
from .projectFiles.pages.comments.routes import comments
from .projectFiles.pages.users.routes import users

# print(sys.path)

def create_app(config_object='snackoverflow.projectFiles.settings'):
    app = Flask(__name__)
    CORS(app)

    app.config.from_object(config_object)
    app.config['JWT_SECRET_KEY'] = os.environ.get('SECRET')
    # app.config['JWT_ACCESS_TOKEN_EXPIRES'] = datetime.timedelta(days=1)

    jwt = JWTManager(app)
    # flask_bcrypt(app)
    initialize_db(app)

    app.register_blueprint(main)
    app.register_blueprint(topics)
    app.register_blueprint(posts)
    app.register_blueprint(comments)
    app.register_blueprint(users)

    return app