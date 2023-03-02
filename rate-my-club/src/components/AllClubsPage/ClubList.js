import { AllClubsArray } from "./AllClubsArray";
import ClubCard from "./ClubCard";

export default function ClubList() {
    return (
        <div className='allclubs-page-backdrop'>
            { allClubComponents }
        </div>
    );
}

const allClubComponents = AllClubsArray.map((e) => { 
    return (
        <ClubCard 
            img={e.img}
            clubName={e.clubName}
            tags={e.tags}
        />
    );
});