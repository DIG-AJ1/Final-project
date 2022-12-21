import React ,{useState} from "react";
import Hedder from "./Hedder";
import BudgeHedder from "./BudgeHedder"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "../style/Dropdown.css"

export default function GivingBudge({setScreen, screen, admin}){
    const bagdes = ["dig-1","dig-2","dig-3"];
    const people = ["asai","asano","yamakuzu","hiraoka","miura"];

    const [offerBadge,setBadge] = useState("");
    const [offerPerson,setPerson] = useState("");

    return(
        <>
            {/* <Hedder setScreen={setScreen} screen={screen} admin={admin} setDisp={setDisp} state={state}/> */}
            <BudgeHedder setScreen={setScreen} screen={screen} admin={admin} />
            <div className="form">
                <label className="drop-wrap">
                    <select 
                        className="dropdown"
                        onChange={(event) => {
                            setBadge(event.target.value);
                        }}  
                    >
                        <option value="" selected disabled>Select Badge</option>
                        {
                            bagdes.map((badge) => <option value={badge}>{badge}</option>)
                        }
                    </select>
                </label>

                <label className="drop-wrap">
                    <select 
                        className="dropdown"
                        onChange={(event) => {
                            setPerson(event.target.value);
                        }}
                    >
                        <option value="" selected disabled>Choose a Person</option>
                        {
                            people.map((person) => <option value={person}>{person}</option>)
                        }
                    </select>
                </label>

                <button
                    className="log-btn"
                    variant="primary"
                    onClick={() => {
                        console.log(offerBadge, offerPerson);
                    }}
                >
                    offer
                </button>
            </div>
        </>
    )
}
