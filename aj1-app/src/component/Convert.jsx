import React, {useState} from "react";
import Login from "./Login";
import Main from "./Main";

export default function Convert() {
    const [screen,setScreen] = useState("Login");
    const [loginUser,setUser] = useState("");
    const a = 1;
    
    return (
        <div>
        {
            (screen === "Login") ?
                <Login setScreen={setScreen}/> :
                <Main setScreen={setScreen}/>
        }
        </div>
    );
}