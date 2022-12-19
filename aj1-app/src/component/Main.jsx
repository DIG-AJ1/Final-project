import React,{useState} from "react";
import List from "./List";
import Hedder from "./Hedder"
import givingBadge from "./givingBadge";

export default function Main({setScreen, screen}) {
    const state = ["aaa","bbb","ccc"];
    const [display,setDisp] = useState("list");
    const admin = 1;
    return(
        <>
            {/* <Hedder setScreen={setScreen} screen={screen} admin={admin} setDisp={setDisp}/> */}
            <div>
                {
                  (display === "list")?
                    <List setScreen={setScreen} screen={screen} admin={admin} setDisp={setDisp} state={state}/>:
                    <givingBadge setScreen={setScreen} screen={screen} admin={admin} setDisp={setDisp} state={state}/>
                }
            </div>
        </>
    )
}