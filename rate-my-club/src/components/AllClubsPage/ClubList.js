import { AllClubsArray, oldArray } from "./AllClubsArray";
//import React, { useEffect, useState } from "react";
import ClubCard from "./ClubCard";


// export default function ClubList() {
//     const [clubs, setClubs] = useState([])
//     const [clubArray, setArray] = useState([])

//     const listClubs = async() => {
//         const response = await fetch('http://localhost:8000/clubs/', {    
//             method: 'GET',           
//         });
//         const clubs = await response.json();
//         setClubs(clubs.data);

//         console.log(clubs);
//         // const myJson = await response.json(); //extract JSON from the http response
//         // var clubs = JSON.parse(myJson);
//         // for(var i in clubs) {
//         //     i = JSON.parse(i);
//         // }
//         // console.log(Object.values(clubs));
//         // console.log(Array.isArray(Object.values(clubs)));
//         // return Object.values(clubs);
//     }

//     useEffect(() => {
//         listClubs();
//         }, []);


//     useEffect(() => { 
//         console.log(clubs.data);
//         const allClubComponents = clubs.map(club => { 
//             console.log(club);
//             console.log(Object.keys(club));
            // return (
            //     <ClubCard 
            //         img={club["profile_picture"]}
            //         clubName={club["name"]}
            //         tags={club["tags"]}
            //     />
            // );
//         });


//         setArray(allClubComponents)
//     }, [clubs])

//     return (
//         <div className='allclubs-page-backdrop'>
//             {clubArray}
//         </div>
//     );
// }


export default function ClubList() {
    return (
        <div className='allclubs-page-backdrop'>
            { allClubComponents }
        </div>
    );
}



const allClubComponents = AllClubsArray.map((club) => { 
    return (
        <ClubCard 
            img={club["profile_picture"]}
            clubName={club["name"]}
            tags={club["tags"]}
        />
    );
});

