from routes import * 
import requests

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
