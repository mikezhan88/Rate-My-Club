#from flask import Flask
from fastapi import FastAPI
import datetime
from dotenv import dotenv_values
from pymongo import MongoClient
from routes import router as review_router

x = datetime.datetime.now()

# Initializing flask app
#app = Flask(__name__)

config = dotenv_values(".env")

# Initializing fastapi app
app = FastAPI()

@app.on_event("startup")
def startup_db_client():
    app.mongodb_client = MongoClient(config["ATLAS_URL"])
    app.database = app.mongodb_client[config["DB"]]
    print("Connected to the MongoDB database!")

@app.on_event("shutdown")
def shutdown_db_client():
    app.mongodb_client.close()

@app.get("/")
async def root():
    return {"message": "Welcome to the PyMongo tutorial!"}

#include routes for /review
app.include_router(review_router, tags=["reviews"], prefix="/review")

'''
# Route for seeing a data
@app.route('/data')

def get_time():

    # Returning an api for showing in  reactjs
    return {
        "Date":x,
        }


# Running app
if __name__ == '__main__':
    app.run(debug=True)
'''