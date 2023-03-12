import  {clubID} from '../ClubPage/ClubPage';



//import {clubID} from '../AllClubsPage/ClubCard';

// export const club = {
//     name: 'Delta Sigma Pi',
//     email: 'Premier Co-ed Professional Business Fraternity',
//     clubWebsite: 'www.ucladsp.com',
//     tags: ['Greek Life', 'Business'],
//     clubSize: '50-100 people',
//     commitmentLevel: '3-5 hours',
//     description: 'We believe that no one should forge through their career journey alone — which is why we’ve built a strong culture of mentorship to help members unlock their career potential. Thanks to the guidance and professional network we provide, our members have continually found success in achieving their career goals. From investment banking to entertainment, we have years of collective experience working at top companies under our belt.',
//     updates: [
//         {content: "Spring Rush begins April 2nd!"},
//         {content: "Info session at 7:30 tonight"}
//     ]
// }

// export const reviews = [
//         {
//             rating: 5,
//             clubName: 'Delta Sigma Pi',
//             date: 'December 19, 2022',
//             content: 'Great club with awesome people. Super welcoming!'
//         },
//         {
//             rating: 4,
//             clubName: 'Delta Sigma Pi',
//             date: 'April 12, 2022',
//             content: 'Super strong alumni network.'
//         },
//         {
//             rating: 4,
//             clubName: 'Delta Sigma Pi',
//             date: 'January 25, 2022',
//             content: 'Met my best friends through this club -- would def recommend!'
//         },
// ]



export const getClub = async() => {
    const clubURL = "http://localhost:8000/clubs/066de609-b04a-4b30-b46c-32537c7f1ie9"//+(await id);
    console.log(clubURL)
    const response = await fetch(clubURL, {
        method: 'GET',
    });
    const myJson = await response.json();
    console.log(myJson)
    return (myJson);
}

export const getReviews = async() => {
    const response = await fetch("http://localhost:8000/clubs/066de609-b04a-4b30-b46c-32537c7f1ie9/reviews", {
        method: 'GET',
    });

    const myJson = await response.json(); //extract JSON from the http response

    console.log(myJson)
    var reviews = myJson;
    for(var i in reviews) {
        i = JSON.parse(i);
    }
    
    return Object.values(reviews);
}

export const club = await getClub();
export const reviews = await getReviews();