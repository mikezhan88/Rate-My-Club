import { AllClubsArray } from "./AllClubsArray";
import ClubCard from "./ClubCard";
import { sizeOpt, categoryOpt, commitmentOpt } from "./AllClubsPage";


export default function ClubList() {
    
    console.log(AllClubsArray)
    
    //add filtering here
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

