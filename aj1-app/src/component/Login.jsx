import React from "react";
import "../style/Login.css"
import "../style/button.css"


export default function Login({setScreen}){
    return (
        <div className="form">
            <input 
                className="intext"
                id="user-id"
                type="text" 
                placeholder="Login ID"
            />
            <input
                className="intext"
                id="pass"
                type="text"
                placeholder="Password"
            />
            <button
                className="log-btn"
                onClick={() => {
                    setScreen("main");
                }}
            >
                Login
            </button>
        </div>
    )
}