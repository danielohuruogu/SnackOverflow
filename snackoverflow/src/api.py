from flask import Flask
from database import mongo, db

from pages.main.routes import main
from pages.topics.routes import topics
from pages.posts.routes import posts
from pages.comments.routes import comments
from pages.users.routes import users

app = Flask(__name__)

app.register_blueprint(main)
app.register_blueprint(topics)
app.register_blueprint(posts)
app.register_blueprint(comments)
app.register_blueprint(users)

app.config.from_object('config')

mongo.init_app(app) # initialising the mongo database?

# app.config["MONGO_URI"] = testMongoURI

@app.route('/', methods=['POST'])
def test():
    print('Test insert')
    try:
        # db.users.insert_one({'name':'Jim'})
        # print("Daniel added to local database")
        print(db.users.list_collection)
    except:
        print("didn't work")
    
    print('done')
    
    return "<p>tried to access database</p>"
# THIS WORKS - CHECKED WITH LOCAL MONGODB DATABASE
