import os

# MONGO_URI = os.environ.get('MONGO_URI')

MONGODB_SETTINGS = { 
    'db':'SnackOverflowDb',
    'host':os.environ.get('MONGO_URI')
}

SECRET_KEY = 'whateverStringUWant'