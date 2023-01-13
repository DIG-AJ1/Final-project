import React ,{useState, useEffect} from "react";
import Header from "./Header";
import "../style/Dropdown.css"
import axios from "axios";
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function RequestBudge({setScreen, screen, user, setUser}){

    const [offerBadge,setBadge] = useState("");
    const [bugdeList,setBadges] = useState([]);
    const [people,setPeople] = useState([]);
    const [allBudge,setAllbudge] = useState([]);
    const [allPeople,setAllpeople] = useState([]);
    const [text, setText] = useState("");
    const [certificationDate, setCertificationDate] = useState(new Date());

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

    return(
        <>
            <Header setScreen={setScreen} screen={screen} user={user} setUser={setUser}/>
            <div className="form">
                <label className="drop-wrap">
                    <select 
                        className="dropdown"
                        onChange={(event) => {
                            for(let element of bugdeList){
                                if(element[1]===event.target.value){
                                    setBadge([element[0],element[1]])
                                }
                            }
                        }}>
                        <option value="" defaultValue="" disabled>Select Badge</option>
                        {
                            bugdeList.map((budge, key) => <option key={key} value={budge[1]}>{budge[1]}</option>)
                        }
                    </select>
                </label>
                <DatePicker popperPlacement="bottom" selected={certificationDate} onChange={(date) => setCertificationDate(date)} />
                <input value={text} id="evidence" onChange={(event) => setText(event.target.value)}/>
                <button
                    className="log-btn"
                    variant="primary"
                    onClick={() => {
                        const applicant=user[0];
                        const url = axios.post("/requestBudge",
                            {
                                user_id : applicant,
                                budge_id : offerBadge[0],
                                url : document.getElementById("evidence").value,
                                certification_date: moment(certificationDate).format("YYYY/MM/DD"),
                            })
                        .then(() => setScreen("MyBudgeList"))
                        .catch(err => console.log("err:", err));
                    }}>
                    申請する
                </button>
            </div>
        </>
    )
}
