import React from "react";

export default function Main({setScreen}) {
    return(
        <div>
            main
            <button
                onClick={() => {
                    setScreen("Login")
                }}
            >
                Logout
            </button>
        </div>
    )
}