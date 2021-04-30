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

from flask_pymongo import PyMongo

# database connection    client = pymongo.MongoClient("mongodb+srv://tim:<password>@cluster0.ieiow.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
# db = client.test
app.config["MONGO_URI"] = 'mongodb://tim:TimMongoPw@cluster0.ieiow.mongodb.net/SnackOverflowDb?retryWrites=true&w=majority' # removed +srv
client = PyMongo(app)
print(dir(client))
db = client.db
print(dir(db))
# db = client.SnackOverflowDb
# db = client.db.SnackOverflowDb

# print(dir(db))

# db.init_app(app)
# mongo_client.init_app(app)

@app.route('/going')
def test():
    print('Test insert')
    # print(db.list_collection)
    # print(dir(db))
    # db.insert_one({'name':'test'})
    print('done')
    return 'going'
    # helper function to check if user is logged in
        # do something


