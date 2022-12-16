import React from "react";
import List from "./List";

export default function Main({setScreen}) {
    const state = ["aaa","bbb","ccc"];
    const admin = 1;
    return(
        <div>
            <h1>
                Hedder
                {(admin === 1)?
                    <button onClick={() => {
                        console.log("バッジ")
                    }}>
                        バッジ付与
                    </button>:
                    null                
                }
            </h1>
            <div>
                main
                <button
                    onClick={() => {
                        setScreen("Login")
                    }}
                    >
                    Logout
                </button>
                <List state={state}/>
            </div>
        </div>
    )
}