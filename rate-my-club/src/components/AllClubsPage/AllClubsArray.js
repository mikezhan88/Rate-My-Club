import img1 from "../images/dsp.jpg"
import img2 from "../images/aiche.png"
import img3 from "../images/pp.png"

//export var AllClubsArray = new Array()

// export const oldArray = [
//     {
//         img: img1,
//         clubName: 'Delta Sigma Pi', 
//         tags: ['Greek Life', 'Business']
//     },
//     {
//         img: img2,
//         clubName: 'AIChE',
//         tags: ['Engineering']
//     },
//     {
//         img: img3,
//         clubName: 'Perspectives Project',
//         tags: ['Cultural', 'Service']
//     },
//     {
//         img: img2,
//         clubName: 'Cabbage Club',
//         tags: ['Recreation', 'Service']
//     },
//     {
//         img: img1,
//         clubName: 'Product Space',
//         tags: ['Enginering']
//     },
// ]


export const oldArray =[
    {
      "_id": "066de609-b04a-4b30-b46c-32537c7f1f6e",
      "name": "DSP",
      "about": "example",
      "email": "dsp@gmail.com",
      "profile_picture": "img1",
      "tags": [
        "Greek Life"
      ]
    },
    {
      "_id": "066de609-b04a-4b30-b46c-32537c7fopte",
      "name": "AIChe",
      "about": "example",
      "email": "chem@gmail.com",
      "profile_picture": "img2",
      "tags": [
        "Science"
      ]
    },
    {
      "_id": "066de609-b04a-4b30-b46c-32537c7foth8",
      "name": "Rock Club",
      "about": "example",
      "email": "rock@gmail.com",
      "profile_picture": "img3",
      "tags": [
        "Science"
      ]
    }
  ]


export const listClubs = async () => {
    const response = await fetch('http://localhost:8000/clubs/', {    
        method: 'GET',           
      });
    const myJson = await response.json(); //extract JSON from the http response

    var clubs = JSON.parse(myJson);
    for(var i in clubs) {
        i = JSON.parse(i);
    }
    console.log(oldArray)
    console.log(Object.values(clubs))
    
    return Object.values(clubs);
}

//Top Level Await
export const AllClubsArray = await listClubs();
console.log(AllClubsArray)
