import React ,{useEffect}from "react";
import "../style/List.css"
import Hedder from "./Hedder";
import axios from "axios";


export default function List({setScreen, screen, admin, state}) {

    // useEffect(() => {
    //     axios.post("***"+"/viewBudge")
    //         .then(res => {
    //             res;
    //         })
    // },[])

    return (
        <>
            <Hedder setScreen={setScreen} screen={screen} admin={admin} state={state}/>
            <div>
                {state.map((sell) => 
                    <div className="cell">
                        {sell}
                    </div>
                )}
            </div>
        </>
    );
}