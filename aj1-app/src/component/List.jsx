import React from "react";
import "../style/List.css"
import Hedder from "./Hedder";

export default function List({setScreen, screen, admin, setDisp, state}) {
    return (
        <>
            <Hedder setScreen={setScreen} screen={screen} admin={admin} setDisp={setDisp} state={state}/>
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