from fastapi import APIRouter, Body, Request, Response, HTTPException, status, File, UploadFile
from fastapi.encoders import jsonable_encoder
from typing import List

from models import Review, ReviewUpdate, Club

router = APIRouter()

#POST /review
@router.post("/", response_description="Create a new review", status_code=status.HTTP_201_CREATED, response_model=Review)
def create_review(request: Request, review: Review = Body(...)):
    review = jsonable_encoder(review)
    new_review = request.app.database["reviews"].insert_one(review)
    created_review = request.app.database["reviews"].find_one(
        {"_id": new_review.inserted_id}
    )

    return created_review


#GET /reviews
@router.get("/", response_description="List all reviews", response_model=List[Review])
def list_reviews(request: Request):
    reviews = list(request.app.database["reviews"].find(limit=100))
    return reviews


#Get /review{id}
@router.get("/{id}", response_description="Get a single review by id", response_model=Review)
def find_review(id: str, request: Request):
    if (review := request.app.database["reviews"].find_one({"_id": id})) is not None:
        return review
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Review with ID {id} not found")


#PUT /review{id}
@router.put("/{id}", response_description="Update a review", response_model=Review)
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
@router.delete("/{id}", response_description="Delete a review")
def delete_review(id: str, request: Request, response: Response):
    delete_result = request.app.database["reviews"].delete_one({"_id": id})

    if delete_result.deleted_count == 1:
        response.status_code = status.HTTP_202_ACCEPTED
        return response

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Review with ID {id} not found")


@router.post("/club/", response_description="Create new club", status_code=status.HTTP_201_CREATED, response_model=Club)
def create_club(request: Request, club: Club = Body(...)):
    club = jsonable_encoder(club)
    new_club = request.app.database["clubs"].insert_one(club)
    created_club = request.app.database["clubs"].find_one(
        {"_id": new_club.inserted_id}
    )

    return created_club


@router.put("/{_club_id}/edit", response_description="Edit club page")
def edit_club(request: Request, club: Club = Body(...)):
    update_data = club.dict(exclude_unset=True, exclude_none=True)
    update_data = jsonable_encoder(update_data)

    if not update_data:
        raise HTTPException(detail=f"Empty club data in request", status_code=status.HTTP_400_BAD_REQUEST)
    
    updated_club = request.app.database["clubs"].update_one(
        {"_club_id": club.id, "$set": update_data}
    )

    if updated_club.modified_count == 0:
        raise HTTPException(detail=f"Club with id: {club.id} not found", status_code=status.HTTP_404_NOT_FOUND)
    
    existing_club = request.app.database["clubs"].find_one({"_club_id": club.id})
    
    if existing_club:
        return existing_club
    else:
        raise HTTPException(detail=f"Club with id: {club.id} not found", status_code=status.HTTP_404_NOT_FOUND)
      