'use client';

import { useState } from "react";
import Popup from "../components/popup";

export default function Art({art,description}){
    const [popUp, setPopUp] = useState(false);
    return(
        <div>
            <main className="m-4">
                <li>
                    <img src={art} className="w-48 h-64 hover:scale-150 cursor-pointer" alt={description} onClick={() => setPopUp(true)}></img>
                </li>
            </main>
            <Popup trigger={popUp} setTrigger={setPopUp}>
            <div className="grid grid-cols-2">
                <img src={art}></img>
                <p className="ml-4 mt-4">{description}</p>
            </div>
            </Popup>
        </div>
    );
}