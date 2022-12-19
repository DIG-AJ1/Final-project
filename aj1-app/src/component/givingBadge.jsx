import React from "react";
import Hedder from "./Hedder";

export default function givingBadge({setScreen, screen, admin, setDisp, state}){
    return(
        <>
            <Hedder setScreen={setScreen} screen={screen} admin={admin} setDisp={setDisp} state={state}/>
            <div>
                hello
            </div>
        </>
    )
}