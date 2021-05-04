from flask import Flask

from .projectFiles.extensions import mongo, initialize_db

from .projectFiles.pages.main.routes import main
from .projectFiles.pages.topics.routes import topics
# from pages.posts.routes import posts
# from pages.comments.routes import comments
from .projectFiles.pages.users.routes import users


def create_app(config_object='snackoverflow.projectFiles.settings'):
    app = Flask(__name__)

    app.config.from_object(config_object)

    initialize_db(app)

    # print(mongo.get_connection())
    # print(extensions.mongo.get_connection())
    # print(dir(mongo))

    app.register_blueprint(main)
    app.register_blueprint(topics)
    # app.register_blueprint(posts)
    # app.register_blueprint(comments)
    app.register_blueprint(users)

    return app