import React from "react";

export default function List({state}) {
    return (
        <div>
            {state.map((sell) => 
                <div>
                    {sell}
                </div>
            )}
        </div>
    );
}