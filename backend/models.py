import uuid
from typing import Optional
from pydantic import BaseModel, Field

class Review(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    title: str = Field(...)
    author: str = Field(...)
    club: str = Field(...)
    text: str = Field(...)
    rating: float = Field(...)

    class Config:
        allow_population_by_field_name = True
        schema_extra = {
            "example": {
                "_id": "066de609-b04a-4b30-b46c-32537c7f1f6e",
                "title": "Good Club!",
                "author": "Drew Letvin",
                "club": "Rocket Project",
                "text": "...",
                "rating": 4.5
            }
        }

class ReviewUpdate(BaseModel):
    title: Optional[str]
    text: Optional[str]
    rating: Optional[float]

    class Config:
        schema_extra = {
            "example": {
                "title": "Bad Club",
                "author": "Dru Letvin",
                "rating": 2.0
            }
        }

class Club(BaseModel):
    club_id: str = Field(default_factory=uuid.uuid4, alias="_club_id")
    name: str = Field(...)
    about: Optional[str] = Field(...)
    email: Optional[str] = Field(...)
    profile_picture: Optional[str] = None

    class Config:
            schema_extra = {
                "example": {
                    "_club_id": "066de609-b04a-4b30-b46c-32537c7f1f6e",
                    "name": "Rocket Project",
                    "email": "rocket@gmail.com"
                }
            }

