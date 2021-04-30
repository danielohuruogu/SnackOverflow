import time
from flask import Flask

from pages.main.routes import main
from pages.topics.routes import topics
from pages.posts.routes import posts
from pages.comments.routes import comments

app = Flask(__name__)

app.register_blueprint(main)
app.register_blueprint(topics)
app.register_blueprint(posts)
app.register_blueprint(comments)



