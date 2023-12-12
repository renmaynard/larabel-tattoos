'use client';

import { useState } from "react";
import Popup from "../components/popup";
import Image from "next/image";

export default function Art({art,description}){
    const [popUp, setPopUp] = useState(false);

    return(
        <div>
            <main className="m-4">
                <li>
                    <Image src={art} width={200} height={400} className="hover:scale-150 cursor-pointer" alt={description} onClick={() => setPopUp(true)}/>
                </li>
            </main>
            <Popup trigger={popUp} setTrigger={setPopUp}>
            <div className="grid grid-cols-2">
                <Image src={art} width={500} height={800}/>
                <p className="ml-4 mt-4">{description}</p>
            </div>
            </Popup>
        </div>
    );
}