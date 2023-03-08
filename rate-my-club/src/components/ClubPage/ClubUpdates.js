import React from 'react'
import { BsStarFill, BsStar } from "react-icons/bs";

export default function ClubUpdates(props) {
    return (
        props.club.updates.map((update) => {
            return (
                <li>
                    {update.content}
                    </li>
                
          );
        })
    );
}
