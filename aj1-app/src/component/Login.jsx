import React from "react";

export default function Login({setScreen}){
    return (
        <div>
            <input type="text" placeholder="Login ID"/>
            <input type="text" placeholder="Password"/>
            <button
                onClick={() => {
                    setScreen("main");
                }}
            >
                Login
            </button>
        </div>
    )
}