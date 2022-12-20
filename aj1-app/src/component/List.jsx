import React from "react";
import "../style/List.css"
import Hedder from "./Hedder";

export default function List({setScreen, screen, admin, state}) {
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