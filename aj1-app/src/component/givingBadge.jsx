import React from "react";
import Hedder from "./Hedder";
import BadgeHedder from "./BadgeHedder"

export default function GivingBadge({setScreen, screen, admin}){
    return(
        <>
            {/* <Hedder setScreen={setScreen} screen={screen} admin={admin} setDisp={setDisp} state={state}/> */}
            <BadgeHedder setScreen={setScreen} screen={screen} admin={admin} />
            <div>
                hello
            </div>
        </>
    )
}