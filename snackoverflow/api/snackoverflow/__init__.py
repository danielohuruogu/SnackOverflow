import os
import sys

from flask import Flask
from flask_cors import CORS, cross_origin
# from flask-cors import CORS, cross_origin

from flask_login import LoginManager

from .projectFiles.extensions import mongo, initialize_db

from .projectFiles.pages.main.routes import main
from .projectFiles.pages.topics.routes import topics
from .projectFiles.pages.posts.routes import posts
from .projectFiles.pages.comments.routes import comments
from .projectFiles.pages.users.routes import users


from .projectFiles.models import User

def create_app(config_object='snackoverflow.projectFiles.settings'):
    app = Flask(__name__)
    CORS(app, support_credentials=True)

    app.config.from_object(config_object)
    app.config['SECRET_KEY'] = 'snackoverflow4lyf+4eva' # could import it from env, but ¯\_(ツ)_/¯

    login = LoginManager(app)
    login.login_view = projectFiles.pages.users.routes.login
    initialize_db(app)

    app.register_blueprint(main)
    app.register_blueprint(topics)
    app.register_blueprint(posts)
    app.register_blueprint(comments)
    app.register_blueprint(users)

    @login.user_loader
    def load_user(user_id):
        return User.objects.get(id=user_id)

    return app