import React, {useState} from "react";
import Login from "./Login";
import Main from "./Main";
import MyBudgeList from "./MyBudgeList";
import RequestBudge from "./RequestBudge";
import ApproveBudge from "./ApproveBudge";
import MemberList from "./MemberList";
import ResultPublication from "./ResultPublication"


export default function Convert() {
    const [screen,setScreen] = useState("Login");
    const [user,setUser] = useState([]);
    const [role,setRole] = useState(0); // 0:承認権限なし 1:承認権限あり
    const [list, setList] = useState([]);
    const [targetUser, setTargetUser] = useState({});
    const [budge, setBudge] = useState([]);

    return (
        <>
            <div>
                {
                    (screen === "Login") ?
                        <Login setScreen={setScreen} screen={screen} user={user} setUser={setUser} setList={setList} setRole={setRole}/> : (screen === "Main") ?
                            <Main setScreen={setScreen} screen={screen} setUser={setUser} user={user} list={list} targetUser={targetUser} setTargetUser={setTargetUser} budge={budge} setBudge={setBudge}/> : (screen === "MyBudgeList") ?
                                <MyBudgeList setScreen={setScreen} screen={screen} setUser={setUser} user={user} list={list} targetUser={targetUser} budge={budge} setBudge={setBudge} /> : (screen === "RequestBudge") ?
                                    <RequestBudge setScreen={setScreen} screen={screen} user={user}/> : (screen === "MemberList") ?
                                        <MemberList setScreen={setScreen} user={user} targetUser={targetUser} setTargetUser={setTargetUser}/> : (screen === "ApproveBudge" && role === 1) ?
                                            <ApproveBudge setScreen={setScreen} screen={screen} user={user} setUser={setUser}/> : (screen === "ResultPublication") ? <ResultPublication /> : <Login />
                }
            </div>
        </>
    );
}