import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Header from "./Header";

export default function Main({setScreen, screen, setUser, user, setTargetUser}) {

    return(
        <> 
            <Header setScreen={setScreen} screen={screen} user={user} setUser={setUser}/>
            <ListGroup variant="flush">
                <ListGroup.Item
                    onClick={
                        ()=>{
                            setScreen("MyBudgeList");
                            setTargetUser(NaN);
                        }
                    }>自分のスキルを見る
                </ListGroup.Item>
                <ListGroup.Item
                    onClick={
                        ()=>{
                            setScreen("RequestBudge");
                        }
                    }>取得したスキルを申請する
                </ListGroup.Item>
                <ListGroup.Item
                    onClick={
                        ()=>{
                            setScreen("MemberList");
                        }
                    }>メンバーのスキルを見る
                </ListGroup.Item>
                    {
                        (user[1] === 1) ?
                            <ListGroup.Item
                                onClick={
                                    ()=>{
                                        setScreen("ApproveBudge");
                                    }
                                }>申請スキルの承認をする
                            </ListGroup.Item> : ""
                    }
                <ListGroup.Item
                    onClick={
                        () => {
                            setScreen("ResultPublication")
                        }
                    }
                >
                    nami-test
                </ListGroup.Item>
            </ListGroup>
        </>
    )
}
