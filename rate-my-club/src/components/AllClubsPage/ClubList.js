import ClubCard from "./ClubCard";
import { useState, useEffect } from "react";
import { sizeOpt, commitOpt, searchOpt } from "./AllClubsPage";

export default function ClubList() {

    const [AllClubsArray, setAllClubsArray] = useState(Array());
    
    console.log(AllClubsArray)

    useEffect(() => {
        const filterClubs = async () => {
            console.log("SearchOpt: " + searchOpt)
            console.log("body: " + JSON.stringify(Object.assign({}, JSON.parse(sizeOpt), JSON.parse(commitOpt), JSON.parse(searchOpt))))
            const response = await fetch('http://localhost:8000/clubs/filter', {    
                method: 'POST',
                body: JSON.stringify(Object.assign({}, JSON.parse(sizeOpt), JSON.parse(commitOpt), JSON.parse(searchOpt))),
                headers: {"Content-type" : "application/json"}     
              });
            const myJson = await response.json(); //extract JSON from the http response

            var clubs = myJson;
            for(var i in clubs) {
                i = JSON.parse(i);
            }
          
        
            setAllClubsArray(Object.values(clubs))
        }
        
        filterClubs();

    }, [sizeOpt, commitOpt, searchOpt]);
    

    const allClubComponents = AllClubsArray.map((club) => { 
        return (
            <ClubCard 
                id={club["_id"]}
                profile_picture={club["profile_picture"]}
                name={club["name"]}
                tags={club["tags"]}
            />
        );
    });
    
    return (
        <div className='allclubs-page-backdrop'>
            { allClubComponents }
        </div>
    );
}



