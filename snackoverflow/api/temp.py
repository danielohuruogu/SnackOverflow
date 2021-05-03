from flask import Flask
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://tim:TimMongoPw@cluster0.ieiow.mongodb.net/SnackOverflowDb?retryWrites=true&w=majority"
mongo=PyMongo(app)

# mongo = Pymongo.MongoClient('mongodb+srv://tim:TimMongoPw@cluster0.ieiow.mongodb.net/SnackOverflowDb?retryWrites=true&w=majority')

# db = Pymongo.database.Database(mongo, 'SnackOverflowDb')
# col = Pymongo.collection.Collection(db, 'users')
col = mongo.db.users
print(col.find_one())