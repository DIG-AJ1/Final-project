import React,{useState} from "react";

export default function Main({setScreen, screen, setUser, user, list}) {
 
    console.log("mainJs5 user: ",user);
    return(
        <> 
            <ul>
                <li
                onClick={
                    ()=>{
                        console.log("no11: clicked");
                        setScreen("List");
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
                
            </ul>
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
