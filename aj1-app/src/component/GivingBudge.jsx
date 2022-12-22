import React ,{useState, useEffect} from "react";
import Hedder from "./Hedder";
import BudgeHedder from "./BudgeHedder"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "../style/Dropdown.css"
import axios from "axios";

export default function GivingBudge({setScreen, screen, admin}){
    // const bagdeList = ["dig-1","dig-2","dig-3"];
    // const people = ["asai","asano","yamakuzu","hiraoka","miura"];

    const [offerBadge,setBadge] = useState("");
    const [offerPerson,setPerson] = useState("");
    const [bugdeList,setBadges] = useState([]);
    const [people,setPeople] = useState([]);
    const [allBudge,setAllbudge] = useState([]);
    const [allPeople,setAllpeople] = useState([]);

    const baseURL = "http://localhost:8080/";

    useEffect(() => {
        axios.get(`${baseURL}assignBudge/budge`)
            .then(res => {
                setAllbudge(res.data);
                setBadges(res.data.map((elem) => elem.budge_name))
            })

            axios.get(`${baseURL}assignBudge/user`)
            .then(res => {
                setAllpeople(res.data)
                setPeople(res.data.map((elem) => elem.user_name))
            })

    },[])

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
                            bugdeList.map((badge) => <option value={badge}>{badge}</option>)
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
                        let a = 0;
                        let b = 0;
                        for(const elem of allBudge){
                            if(elem.budge_name === offerBadge){
                                a = elem.id;
                            }
                        }
                        for(const elem of allPeople){
                            if(elem.user_name === offerPerson){
                                b = elem.id; 
                            }
                        }
                        // console.log(a,b);
                        axios({
                            method : "post",
                            url : `${baseURL}assignBudge`,
                            data : {
                                user_id : 1,
                                budge_id : 1
                            }
                        })
                    }}
                >
                    offer
                </button>
            </div>
        </>
    )
}
