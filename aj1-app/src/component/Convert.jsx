import React, {useState} from "react";
import Login from "./Login";
import Main from "./Main";


export default function Convert() {
    const [screen,setScreen] = useState("Login");
    // const [loginUser,setUser] = useState("");
    
    return (
        <div>
        {
            (screen === "Login") ?
                <Login setScreen={setScreen} screen={screen}/> :
                <Main setScreen={setScreen} screen={screen}/>
        }
        </div>
    );
}