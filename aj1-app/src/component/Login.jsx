import React from "react";
// import Button from "reacr-bootstrap/Button";
import "../style/Login.css"
import "../style/button.css"
import Hedder from "./Hedder"


export default function Login({setScreen, screen}){

    const data = {
        username: "***",
        password: "***",
        token: "***"
    }

    return (
        <>
            <Hedder setScreen={setScreen} screen={screen}/>
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
                    variant="primary"
                    onClick={() => {
                        setScreen("main");
                    }}
                >
                    Login
                </button>
            </div>
        </>
    )
}