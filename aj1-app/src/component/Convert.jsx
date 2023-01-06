import React, {useState} from "react";
import Login from "./Login";
import Main from "./Main";
// import {BrowserRouter,Route,Switch} from "react-router-dom"
import MyBudgeList from "./MyBudgeList";
import RequestBudge from "./RequestBudge";
import ApproveBudge from "./ApproveBudge";
// import axios from "axios";
// import MyBudgeList from "./MyBudgeList";
import MemberList from "./MemberList";


export default function Convert() {
    const [screen,setScreen] = useState("Login");
    const [user,setUser] = useState([]);
    const [role,setRole] = useState(0); // 0:承認権限なし 1:承認権限あり
    const [list, setList] = useState([]);

    return (
        <>
            <div>
                {
                    (screen === "Login") ?
                        <Login setScreen={setScreen} screen={screen} setUser={setUser} setList={setList} setRole={setRole}/> : (screen === "Main") ?
                            <Main setScreen={setScreen} screen={screen} setUser={setUser} user={user} list={list}/> : (screen === "MyBudgeList") ?
                                <MyBudgeList setScreen={setScreen} screen={screen} setUser={setUser} user={user} list={list}/> : (screen === "RequestBudge") ?
                                    <RequestBudge setScreen={setScreen} screen={screen} user={user}/> : (screen === "MemberList") ?
                                        <MemberList setScreen={setScreen} user={user}/> : (screen === "ApproveBudge" && role === 1) ?
                                            <ApproveBudge setScreen={setScreen} screen={screen}/> : <Login />
                }
            </div>
        </>
    );
    

}


// 画面遷移ロジックのイメージ
// それぞれに必要なuseState変数を渡す
// (screen === "Login") ?
//     <Login /> : (screen === "Main") ?
//         <Main /> : (screen === "List") ?
//             <List /> : (screen === "GivingBudge") ?
//                 <GivingBadge /> : (screen === "ListOfMembers") ?
//                     <ListOfMembers /> : (screen === "ApproveBudge" && role === 1) ?
//                         <ApproveBudge /> : <Login />


// return (
//     <>
//         <div>
//             {
//                 (screen === "Login") ?
//                     <Login setScreen={setScreen} screen={screen} setUser={setUser} setList={setList} setRole={setRole}/> :
//                     (screen === "List")?
//                         <List setScreen={setScreen} screen={screen} setUser={setUser} user={user} list={list}/>:
//                         <Main setScreen={setScreen} screen={screen} setUser={setUser} user={user} list={list}/>
//                         // (user[2] === "requestBudge")?
//                         // <GivingBadge setScreen={setScreen} screen={screen} user={user}/>:
//                         // <ApproveBudge setScreen={setScreen} screen={screen}/>
//             }
//         </div>
//     </>
// );