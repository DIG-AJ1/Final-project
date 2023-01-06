import React,{useState} from "react";
// import BudgeHedder from "./BudgeHedder"
import ListGroup from 'react-bootstrap/ListGroup';
import ApproveBudge from "./ApproveBudge";
import Header from "./Header";

export default function Main({setScreen, screen, setUser, user, list}) {
 
    console.log("mainJs5 user: ",user);
    return(
        <> 
            <Header setScreen={setScreen}/>
            {/* <BudgeHedder setScreen={setScreen} screen={screen}/> */}
            {/* <ul>
                <li
                onClick={
                    ()=>{
                        console.log("no11: clicked");
                        setScreen("MyBudgeList");
                        console.log(screen);
                    }
                }
            >自分のスキルを見る</li>
            <li>取得したスキルを申請する</li>
            <li>メンバーのスキルを見る</li>
            {
                (user[1] === 1) ?
                    <div>申請スキルの承認をする</div>:
                    ""
            }
                
            </ul> */}
            <ListGroup variant="flush">
                <ListGroup.Item
                    onClick={
                        ()=>{
                            console.log("no11: clicked");
                            setScreen("MyBudgeList");
                            console.log(screen);
                        }
                    }>自分のスキルを見る
                </ListGroup.Item>
                <ListGroup.Item
                    onClick={
                        ()=>{
                            console.log("no40: clicked");
                            setScreen("RequestBudge");
                            console.log(screen);
                        }
                    }>取得したスキルを申請する
                </ListGroup.Item>
                <ListGroup.Item
                    onClick={
                        ()=>{
                            console.log("no52: clicked");
                            setScreen("MemberList");
                            console.log(screen);
                        }
                    }>メンバーのスキルを見る
                </ListGroup.Item>
                {
                    (user[1] === 1) ?
                        <ListGroup.Item
                            onClick={
                                ()=>{
                                    console.log("no52: clicked");
                                    setScreen("ApproveBudge");
                                    console.log(screen);
                                }
                            }>申請スキルの承認をする
                        </ListGroup.Item> : ""
                }
            </ListGroup>
        </>
    )
}


            // <
            // >自分のスキルを見る</>
            // <div>取得したスキルを申請する</div>
            // <div>メンバーのスキルを見る</div>
            // {
            //     (user[1] === 1) ?
            //         <div>申請スキルの承認をする</div>:
            //         ""
            // }
