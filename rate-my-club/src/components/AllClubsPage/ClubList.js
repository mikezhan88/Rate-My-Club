import { AllClubsArray } from "./AllClubsArray";
import ClubCard from "./ClubCard";


export default function ClubList() {
    
    console.log(AllClubsArray)
    return (
        <div className='allclubs-page-backdrop'>
            { allClubComponents }
        </div>
    );
}


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

