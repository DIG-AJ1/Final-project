import React ,{useState, useEffect} from "react";
import Hedder from "./Hedder";
import BudgeHedder from "./BudgeHedder"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "../style/Dropdown.css"
import axios from "axios";
import moment from 'moment';

export default function GivingBudge({setScreen, screen, admin, user}){
    // const bagdeList = ["dig-1","dig-2","dig-3"];
    // const people = ["asai","asano","yamakuzu","hiraoka","miura"];

    const [offerBadge,setBadge] = useState("");
    const [offerPerson,setPerson] = useState("");
    const [bugdeList,setBadges] = useState([]);
    const [people,setPeople] = useState([]);
    const [allBudge,setAllbudge] = useState([]);
    const [allPeople,setAllpeople] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        axios.get("/assignBudge/budge")
            .then(res => {
                setAllbudge(res.data);
                setBadges(res.data.map((elem) => [elem.id,elem.budge_name]))
            })

            axios.get("/assignBudge/user")
            .then(res => {
                setAllpeople(res.data)
                setPeople(res.data.map((elem) => elem.user_name))
            })

    },[])

    const testBudge = ["JavaScript", "React", "Express", "swift", "AWS"]

    return(
        <>
            {/* <Hedder setScreen={setScreen} screen={screen} admin={admin} setDisp={setDisp} state={state}/> */}
            <BudgeHedder setScreen={setScreen} screen={screen} admin={admin} />
            <div className="form">
                <label className="drop-wrap">
                    <select 
                        className="dropdown"
                        onChange={(event) => {
                            console.log("event: ",event);
                            console.log("budgeList: ",bugdeList);
                            for(let element of bugdeList){
                                if(element[1]===event.target.value){
                                    console.log(element[0],element[1]);
                                    setBadge([element[0],element[1]])
                                }
                            }
                            // setBadge(event.target.value);
                        }}  
                    >
                        <option value="" defaultValue="" disabled>Select Badge</option>
                        {
                            bugdeList.map((badge, key) => <option key={key} value={badge[1]}>{badge[1]}</option>)
                        }
                    </select>
                </label>
                <input value={text} id="evidence" onChange={(event) => setText(event.target.value)}/>
                <button
                    className="log-btn"
                    variant="primary"
                    onClick={() => {
                        const applicant=user[0];

                        const url = axios.post("/requestBudge",
                        {
                            user_id : applicant,
                            // user_name : "nami",
                            budge_id : offerBadge[0],
                            // status : 1,
                            url : document.getElementById("evidence").value,
                            certification_date: moment().format('YYYY/MM/DD'),
                            // user_id_budge_id: "40",
                            // budge_name: "nami-budge",
                            // budge_type: "budge_type",
                        })                        
                        .then(() => setScreen("List"))                        
                        .catch(err => console.log("err:", err));
                    }}
                >
                    REQUEST
                </button>
            </div>
        </>
    )
}

//test test test
