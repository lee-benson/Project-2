
# APP TITLE: Throw Buddy

## APP DESCRIPTION:
Itching to yank someone by their lapel and gently introduce them to the ground? You've come to the right place to scratch that itch. Welcome to Throw Buddy, this app indexes a variety of judo techniques to keep you sharp even while you sit on the toilet; for beginners, this is great for introducing new concepts and maneuvers. Like most martial arts, judo is disciplined violence so it's fantastic for your health! Assuming you avoid injuries.

## API:
I did not use an API for this app but I populated a JSON file using https://github.com/alexyak1/Techniques. 

## API SNIPPET: 
``` json
[
  {
    "_id": "63f543590eac17cb08d1ca29",
    "name": "O-soto-otoshi",
    "belt": "yellow",
    "type": "Nage-Waza",
    "__v": 0
  },
  {
    "_id": "63f543590eac17cb08d1ca2a",
    "name": "O-uchi-gari",
    "belt": "yellow",
    "type": "Nage-Waza",
    "__v": 0
  },
  {
    "_id": "63f543590eac17cb08d1ca2b",
    "name": "O-goshi",
    "belt": "yellow",
    "type": "Nage-Waza",
    "__v": 0
  }
]
```

## API CODE: 
``` js
@baseUrl = {{host}}/api/

GET {{baseUrl}}
###
```

## MVP: 
The MVP for this project is:
- [] Working Get request
- [] Working Patch request
- [] Working Post request
- [] Working Delete request
- [] api.rest file that tests requests

## POST-MVP: 
- [] Building a framework for the full CRUD backend

## GOALS:
- [] Build and finalize JSON database
- [] Develop CRUD functionality
- [] Use api.rest to test if it works

## DATA MODEL:
<img width="394" alt="dataModelProj2" src="https://user-images.githubusercontent.com/114048369/220614380-57f9c49c-ca38-45e4-a4c3-5ce5b80ad67a.png">

