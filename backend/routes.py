from fastapi import APIRouter, Body, Request, Response, HTTPException, status, File, UploadFile
from fastapi.encoders import jsonable_encoder
from typing import List
import json
import sys

from models import *

reviews_router = APIRouter()
clubs_router = APIRouter()
users_router = APIRouter()


#POST /review
@reviews_router.post("/", response_description="Create a new review", status_code=status.HTTP_201_CREATED, response_model=Review)
def create_review(request: Request, review: Review = Body(...)):
    review = jsonable_encoder(review)
    new_review = request.app.database["reviews"].insert_one(review)
    created_review = request.app.database["reviews"].find_one(
        {"_id": new_review.inserted_id}
    )

    return created_review


#GET /reviews
@reviews_router.get("/", response_description="List all reviews", response_model=List[Review])
def list_reviews(request: Request):
    reviews = list(request.app.database["reviews"].find(limit=100))
    return reviews


#Get /review{id}
@reviews_router.get("/{id}", response_description="Get a single review by id", response_model=Review)
def find_review(id: str, request: Request):
    if (review := request.app.database["reviews"].find_one({"_id": id})) is not None:
        return review
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Review with ID {id} not found")


#PUT /review{id}
@reviews_router.put("/{id}", response_description="Update a review", response_model=Review)
def update_review(id: str, request: Request, review: ReviewUpdate = Body(...)):
    review = {k: v for k, v in review.dict().items() if v is not None}
    if len(review) >= 1:
        update_result = request.app.database["reviews"].update_one(
            {"_id": id}, {"$set": review}
        )

        if update_result.modified_count == 0:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Review with ID {id} not found")

    if (
        existing_review := request.app.database["reviews"].find_one({"_id": id})
    ) is not None:
        return existing_review

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Review with ID {id} not found")


#DELETE /review{id}
@reviews_router.delete("/{id}", response_description="Delete a review")
def delete_review(id: str, request: Request, response: Response):
    delete_result = request.app.database["reviews"].delete_one({"_id": id})

    if delete_result.deleted_count == 1:
        response.status_code = status.HTTP_202_ACCEPTED
        return response

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Review with ID {id} not found")

#POST /club
@clubs_router.post("/", response_description="Create new club", status_code=status.HTTP_201_CREATED, response_model=Club)
def create_club(request: Request, club: Club = Body(...)):
    club = jsonable_encoder(club)
    new_club = request.app.database["clubs"].insert_one(club)
    created_club = request.app.database["clubs"].find_one(
        {"_id": new_club.inserted_id}
    )

    return created_club

#PUT /club{id}
@clubs_router.put("/{id}", response_description="Edit club page", response_model=Club)
def edit_club(id: str, request: Request, club: ClubUpdate = Body(...)):
    club = {k: v for k, v in club.dict().items() if v is not None}
    if len(club) >= 1:
        update_result = request.app.database["clubs"].update_one(
            {"_id": id}, {"$set": club}
        )

        if update_result.modified_count == 0:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Club with ID {id} not found")

    if (
        existing_club := request.app.database["clubs"].find_one({"_id": id})
    ) is not None:
        return existing_club

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Club with ID {id} not found")

#DELTE /clubs/{id}
@clubs_router.delete("/{id}", response_description="Delete Club")
def delete_club(id: str, request: Request, response: Response):
    delete_result = request.app.database["clubs"].delete_one({"_id": id})

    if delete_result.deleted_count == 1:
        response.status_code = status.HTTP_202_ACCEPTED
        return response

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Club with ID {id} not found")

#GET /clubs/{id}
@clubs_router.get("/{id}", response_description="Find club through ID")
def find_club(id: str, request: Request):
    club = request.app.database["clubs"].find_one({"_id": id})
    if club is not None:
        return club
    
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Club with ID {id} not found")

#GET /clubs
@clubs_router.get("/", response_description="List all clubs")
async def list_clubs(request: Request, response: Response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Credentials"] = "true"
    clubs = list(request.app.database["clubs"].find(limit=100))
    out = json.dumps(clubs, indent=2)
    return out

#Get /clubs/{club_id}/reviews
@clubs_router.get("/{id}/reviews", response_description="Get a list of reviews associated with a club")
def find_reviews_by_club(id: str, request: Request, response: Response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Credentials"] = "true"
    if (reviews := list(request.app.database["reviews"].find({ "club_id" : id }))) is not None:
        return reviews
    return []

@clubs_router.post("/filter", response_description="Get a list of clubs by a filter")
async def filter_clubs(request: Request, response: Response, filter: dict = Body(...)):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Credentials"] = "true"
    if (clubs := list(request.app.database["clubs"].find(filter))) is not None:
        return clubs
    return []


#POST /users
@users_router.post("/", response_description="Create new user", status_code=status.HTTP_201_CREATED, response_model=User)
def create_user(request: Request, response: Response, user: User = Body(...)):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Credentials"] = "true"
    user = jsonable_encoder(user)
    new_user = request.app.database["users"].insert_one(user)
    created_user = request.app.database["users"].find_one(
        {"_id": new_user.inserted_id}
    )

    return created_user

#Get /user{id}
@users_router.get("/{username}", response_description="Get a single user by email", response_model=User)
def find_user(username: str, request: Request, response: Response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Credentials"] = "true"
    if (user := request.app.database["users"].find_one({"username": username})) is not None:
        return user
    
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"User not found")

@users_router.get("/{username}/reviews", response_description="Get a list of reviews associated with a user")
def find_reviews_by_user(username: str, request: Request, response: Response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Credentials"] = "true"
    if (reviews := list(request.app.database["reviews"].find({ "username" : username }))) is not None:
        return reviews
    
    return []