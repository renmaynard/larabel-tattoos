'use client'

import { useState } from "react";
import Popup from "../components/popup";
import Image from "next/image";

const Tattoo = ({tattoo,description}) =>{
        const [popUp, setPopUp] = useState(false);
        return(
            <div>
                <main className="m-4">
                    <li>
                        <Image src={tattoo} width={200} height={400} className=" hover:scale-150 cursor-pointer" alt={description} onClick={() => setPopUp(true)}/>
                    </li>
                </main>
                <Popup trigger={popUp} setTrigger={setPopUp}>
                <div className="grid grid-cols-2">
                    <Image src={tattoo} width={500} height={800} />
                    <p className="ml-4 mt-4">{description}</p>
                </div>
                </Popup>
            </div>
        );
    }

export default Tattoo;