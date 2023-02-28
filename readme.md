
# APP TITLE: Throw Buddy

## APP DESCRIPTION:
Itching to yank someone by their lapel and gently introduce them to the ground? You've come to the right place to scratch that itch. Welcome to Throw Buddy, this app indexes a variety of judo techniques to keep you sharp even while you sit on the toilet; for beginners, this is great for introducing new concepts and maneuvers. Like most martial arts, judo is disciplined violence so it's fantastic for your health! Assuming you avoid injuries.

## API:
I did not use an API for this app but I populated a JSON file using https://github.com/alexyak1/Techniques. 

## API SNIPPET: 
``` json
[
  {
    "name": "O-soto-otoshi",
    "belt": "yellow",
    "type": "Nage-Waza",
    "img": "https://i.imgur.com/UWYHo4N.gif"
  },
  {
    "name": "O-uchi-gari",
    "belt": "yellow",
    "type": "Nage-Waza",
    "img": "https://i.imgur.com/IuGV2Bs.gif"
  },
  {
    "name": "O-goshi",
    "belt": "yellow",
    "type": "Nage-Waza",
    "img": "https://i.imgur.com/spCb2Wl.gif"
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
- [x] Working Get request
- [x] Working Patch request
- [x] Working Post request
- [x] Working Delete request
- [x] api.rest file that tests requests

## POST-MVP: 
- [] Building a framework for the full CRUD backend

## GOALS:
- [x] Build and finalize JSON database
- [x] Develop CRUD functionality
- [x] Use api.rest to test if it works

## DATA MODEL:
<img width="394" alt="dataModelProj2" src="https://user-images.githubusercontent.com/114048369/220614380-57f9c49c-ca38-45e4-a4c3-5ce5b80ad67a.png">

