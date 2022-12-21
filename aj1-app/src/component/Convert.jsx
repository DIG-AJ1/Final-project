import React, {useState} from "react";
import Login from "./Login";
import Main from "./Main";
import {BrowserRouter,Route,Switch} from "react-router-dom"
import List from "./List";
import GivingBadge from "./GivingBudge";


export default function Convert() {
    const [screen,setScreen] = useState("Login");
    const [user,setUser] = useState("");
    const admin = 1;
    const state = ["aaa","bbb","ccc"];
    
    return (
        <div>
        {
            (screen === "Login") ?
                <Login setScreen={setScreen} screen={screen} setUser={setUser}/> :
                (screen === "List")?
                    <List setScreen={setScreen} screen={screen} admin={admin} state={state}/>:
                    <GivingBadge setScreen={setScreen} screen={screen} admin={admin} state={state}/>
        }
        </div>
    );
}