import React from "react";
import "../style/List.css"


export default function List({state}) {
    return (
        <div>
            {state.map((sell) => 
                <div className="cell">
                    {sell}
                </div>
            )}
        </div>
    );
}