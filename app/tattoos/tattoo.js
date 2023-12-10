'use client'

import { useState } from "react";
import Popup from "../components/popup";

const Tattoo = ({tattoo,description}) =>{
        const [popUp, setPopUp] = useState(false);
        return(
            <div>
                <main className="m-4">
                    <li>
                        <img src={tattoo} className="w-48 h-64 hover:scale-150 cursor-pointer" alt={description} onClick={() => setPopUp(true)}></img>
                    </li>
                </main>
                <Popup trigger={popUp} setTrigger={setPopUp}>
                <div className="grid grid-cols-2">
                    <img src={tattoo} className="w-full h-full"></img>
                    <p className="ml-4 mt-4">{description}</p>
                </div>
                </Popup>
            </div>
        );
    }

export default Tattoo;