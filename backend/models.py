import uuid
from typing import Optional, List
from pydantic import BaseModel, Field

class Review(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    author: str = Field(...)
    club_id: str = Field(default_factory=uuid.uuid4)
    text: str = Field(...)
    rating: float = Field(...)

    class Config:
        allow_population_by_field_name = True
        schema_extra = {
            "example": {
                "_id": "066de609-b04a-4b30-b46c-32537c7f1f6f",
                "author": "Drew Letvin",
                "club_id": "066de609-b04a-4b30-b46c-32537c7f1f6e",
                "text": "...",
                "rating": 4
            }
        }

class ReviewUpdate(BaseModel):
    text: Optional[str]
    rating: Optional[float]

    class Config:
        schema_extra = {
            "example": {
                "author": "Dru Letvin",
                "rating": 2.0
            }
        }

class Club(BaseModel):
    club_id: str = Field(default_factory=uuid.uuid4, alias="_id")
    name: str = Field(...)
    description: str = Field(...)
    email: str = Field(...)
    profile_picture: str = Field(...)
    tags: List[str] = Field(...)
    clubWebsite: str = Field(...)
    clubSize: str = Field(...)
    commitmentLevel: str = Field(...)
    updates: List[dict] = Field(...)

    class Config:
        allow_population_by_field_name = True
        schema_extra = {
            "example": {
                "_id": "066de609-b04a-4b30-b46c-32537c7f1f6e",
                "name": "Rocket Project",
                "description": "Cool Space Club",
                "email": "rocket@gmail.com",
                "profile_picture": "boop",
                "tags": ["aerospace", "engineering"],
                "clubWebsite": 'www.ucladsp.com',
                "clubSize": '50-100 ppl',
                "commitmentLevel": '2-5 hours',
                "updates": [{'content': "Spring Rush begins April 2nd!"}, {'content': "Info session at 7:30 tonight"}]

            }
        }

class ClubUpdate(BaseModel):
    name: Optional[str]
    about: Optional[str]
    email: Optional[str]
    profile_picture: Optional[str]
    tags: Optional[List[str]]

    class Config:
        allow_population_by_field_name = True
        schema_extra = {
            "example": {
                "name": "DSP",
                "about": "XiO",
                "email": "dsp@xio.com"
            }
        }


class User(BaseModel):
    user_id: str = Field(default_factory=uuid.uuid4, alias="_id")
    name: str = Field(...)
    email: str = Field(...)

    class Config:
        allow_population_by_field_name = True
        schema_extra = {
            "example": {
                "_id": "066de609-b04a-4b30-b46c-32537c7f1ffd",
                "name": "Rocket Project",
                "email": "rocket@gmail.com",
            }
        }