import React from "react";
import Header from "./Header";
import "../style/main.css"

export default function Main({setScreen, screen, setUser, user, setTargetUser}) {

    return(
        <> 
            <Header setScreen={setScreen} screen={screen} user={user} setUser={setUser}/>
            <div>
                <button
                className="main-btn"
                onClick={
                    ()=>{
                        setScreen("MyBudgeList");
                        setTargetUser(NaN);
                    }
                }>自分のスキルを見る</button>
            </div>
            <div>
                <button
                className="main-btn"
                onClick={
                    ()=>{
                        setScreen("RequestBudge");
                    }
                }>取得したスキルを申請する</button>
            </div>
            <div>
                <button
                className="main-btn"
                onClick={
                    ()=>{
                        setScreen("MemberList");
                    }
                }>メンバーのスキルを見る</button>
            </div>
                {
                    (user[1] === 1) ?
                        <div>
                            <button
                            className="main-btn"
                            onClick={
                                ()=>{
                                    setScreen("ApproveBudge");
                                }
                            }>申請スキルの承認をする</button>
                        </div> : ""
                }
            <div>
                <button
                id="main-bara"
                className="main-btn"
                onClick={
                    () => {
                        setScreen("ResultPublication")
                    }
                }
            >バラ右衛門を見る</button>
            </div>
        </>
        // <> 
        //     <Header setScreen={setScreen} screen={screen} user={user} setUser={setUser}/>
        //     <ListGroup variant="flush">
        //         <ListGroup.Item
        //             onClick={
        //                 ()=>{
        //                     setScreen("MyBudgeList");
        //                     setTargetUser(NaN);
        //                 }
        //             }>自分のスキルを見る
        //         </ListGroup.Item>
        //         <ListGroup.Item
        //             onClick={
        //                 ()=>{
        //                     setScreen("RequestBudge");
        //                 }
        //             }>取得したスキルを申請する
        //         </ListGroup.Item>
        //         <ListGroup.Item
        //             onClick={
        //                 ()=>{
        //                     setScreen("MemberList");
        //                 }
        //             }>メンバーのスキルを見る
        //         </ListGroup.Item>
        //             {
        //                 (user[1] === 1) ?
        //                     <ListGroup.Item
        //                         onClick={
        //                             ()=>{
        //                                 setScreen("ApproveBudge");
        //                             }
        //                         }>申請スキルの承認をする
        //                     </ListGroup.Item> : ""
        //             }
        //         <ListGroup.Item
        //             onClick={
        //                 () => {
        //                     setScreen("ResultPublication")
        //                 }
        //             }
        //         >
        //             nami-test
        //         </ListGroup.Item>
        //     </ListGroup>
        // </>
    )
}
