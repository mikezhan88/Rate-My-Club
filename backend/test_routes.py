from routes import * 
import requests

# To run tests in this file simply run `pytest` 
# while in the terminal while in backend directory

def test_create_user():
    data = {
        "_id": "066de609-1111-0000-1111-32537c7f1f6e",
        "name": "pytestuser",
        "username": "pytest"
    }

    url = "http://localhost:8000/users/"
    response = requests.post(url, json=data)

    post_response = 201

    assert response.status_code == post_response

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


def test_find_reviews_by_user():
    data = {
        "username" : "pytest"
    }

    url = "http://localhost:8000/users/pytest/reviews"
    response = requests.get(url, json=data)

    get_response = 200

    assert response.status_code == get_response


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


def test_list_clubs():
    url = "http://localhost:8000/clubs/"
    response = requests.get(url)

    post_response = 200

    assert response.status_code == post_response


def test_get_club():
    url = "http://localhost:8000/clubs/066de609-1111-0000-1111-32537c7f1pop"
    response = requests.get(url)

    post_response = 200

    assert response.status_code == post_response


def test_delete_club():
    data = {"_id": "066de609-1111-0000-1111-32537c7f1pop"}

    url = "http://localhost:8000/clubs/066de609-1111-0000-1111-32537c7f1pop"
    response = requests.delete(url, json=data)

    post_response = 200

    assert response.status_code == post_response

def test_filter_clubs():
    url = "http://localhost:8000/clubs/filter"
    data = { "name" : { "$regex" : ".*(' + rock + ').*", "$options" : "i" } }
    response = requests.post(url, json=data)

    post_response = 200

    assert response.status_code == post_response

def test_delete_user():
    data = {
        "_id" : "066de609-1111-0000-1111-32537c7f1f6e" 
    }

    url = "http://localhost:8000/users/066de609-1111-0000-1111-32537c7f1f6e"
    response = requests.delete(url, json=data)

    delete_response = 200

    assert response.status_code == delete_response

