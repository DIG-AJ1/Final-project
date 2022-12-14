import React, {useState} from "react";
import Login from "./Login";
import Main from "./Main";
import {BrowserRouter,Route,Switch} from "react-router-dom"
import List from "./List";
import GivingBadge from "./GivingBudge";


export default function Convert() {
    const [screen,setScreen] = useState("Login");
    const [user,setUser] = useState("");
    const [list, setList] = useState([]);

    
    return (
        <div>
        {
            (screen === "Login") ?
                <Login setScreen={setScreen} screen={screen} setUser={setUser} setList={setList}/> :
                (screen === "List")?
                    <List setScreen={setScreen} screen={screen} user={user} list={list}/>:
                    <GivingBadge setScreen={setScreen} screen={screen}/>
        }
        </div>
    );
}