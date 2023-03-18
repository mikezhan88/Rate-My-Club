#from flask import Flask
from fastapi import FastAPI
import datetime
from dotenv import dotenv_values
from pymongo import MongoClient
from routes import reviews_router, clubs_router, users_router
import certifi
from fastapi.middleware.cors import CORSMiddleware

x = datetime.datetime.now()

# Initializing flask app
#app = Flask(__name__)

config = dotenv_values(".env")

# Initializing fastapi app
app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:3000",
    "http://localhost:9515"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def startup_db_client():
    app.mongodb_client = MongoClient(config["ATLAS_URL"], tlsCAFile=certifi.where())
    app.database = app.mongodb_client[config["DB"]]
    print("Connected to the MongoDB database!")

@app.on_event("shutdown")
def shutdown_db_client():
    app.mongodb_client.close()

@app.get("/")
async def root():
    return {"message": "Welcome to the PyMongo tutorial!"}

#include routes for /review
app.include_router(reviews_router, tags=["reviews"], prefix="/review")
app.include_router(clubs_router, tags=["clubs"], prefix="/clubs")
app.include_router(users_router, tags=["users"], prefix="/users")

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