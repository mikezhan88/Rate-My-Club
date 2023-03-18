from routes import * 
import requests

# To run tests in this file simply run `pytest` 
# while in the terminal while in backend directory

def test_post_review():
    data = {
        "_id": "066de609-1111-0000-1111-32537c7f1f6e",
        "author": "pytest",
        "club_id": "066de609-1111-0000-1111-32537c7f1f6e",
        "text": "...",
        "rating": 5,
        "username": "pytest"
    }

    url = "http://localhost:8000/review/"
    response = requests.post(url, json=data)

    post_response = 201

    assert response.status_code == post_response



def test_delete_review():
    data = {"_id": "066de609-1111-0000-1111-32537c7f1f6e"}

    url = "http://localhost:8000/review/066de609-1111-0000-1111-32537c7f1f6e"
    response = requests.delete(url, json=data)

    post_response = 200

    assert response.status_code == post_response


def test_post_club():
    data = {
        "_id": "066de609-1111-0000-1111-32537c7f1pop",
        "name": "Pytest club",
        "description": "Cool Space Club",
        "email": "rocket@gmail.com",
        "profile_picture": "boop",
        "tags": [],
        "clubWebsite": "www.ucladsp.com",
        "clubSize": "50-100 ppl",
        "commitmentLevel": "2-5 hours",
        "updates": []
    }

    url = "http://localhost:8000/clubs/"
    response = requests.post(url, json=data)

    post_response = 201

    assert response.status_code == post_response



def test_delete_club():
    data = {"_id": "066de609-1111-0000-1111-32537c7f1pop"}

    url = "http://localhost:8000/clubs/066de609-1111-0000-1111-32537c7f1pop"
    response = requests.delete(url, json=data)

    post_response = 200

    assert response.status_code == post_response
