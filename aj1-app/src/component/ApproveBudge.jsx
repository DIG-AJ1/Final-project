import Button from 'react-bootstrap/Button';
import axios from "axios";
import React, { useState, useEffect } from 'react';

export default function ApproveBudge() {

    const baseURL = "http://localhost:8080/";

    const [ applyList, setApplyList ] = useState([]); // ステータスが申請中のリスト

    // [applyList]の値が変更された時に実行する
    // user_budgeテーブルのstatusが1(申請中)のレコードを取得して、applyListの配列を更新する
    useEffect(() => {
        // statusが1(申請中)のレコードを全て取得する
        // statusが1の時のレコードの取得方法はどうやって書くの？
        // ここまではきている
        console.log("no17");
        axios.get("http://localhost:8080/approveBudge", {
            // req.queryで取り出せます
            params:{status: 1}
        })
        // axios({
        //     method: "get",
        //     url: `${baseURL}approveBudge`,
        //     data: {
        //         status: 1,
        //     },
        // })
        // どんな状態でデータが返ってくるの？
        // こんなデータが返ってくると嬉しい [{ "user":"jiro", "budge_name":"ITパスポート"}, {･･･}, {･･･}]
        // .then(res => res)
        // .then((res) => JSON.parse(res))
        .then((res) => setApplyList(res.data))
        .catch((err) => console.error(err));
        // }
    // }, [applyList]);
    },[]);
    console.log("applyList, typeof",applyList,", ",typeof(applyList));

    return (
        <>
            <div>
                名前 | ITパスポート
                <Button>承認</Button>
                <Button>棄却</Button>
                {applyList.map((record,key)=>{
                    return <div className="application" key={key}>user名: {record.user_name}, 資格名: {record.budge_name}, url: {record.url}</div>;
                })}
            </div>
        </>
    );
}




// import React ,{useState, useEffect} from "react";
// import Hedder from "./Hedder";
// import BudgeHedder from "./BudgeHedder"
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import "../style/Dropdown.css"
// import axios from "axios";

// export default function ApproveBudge({setScreen, screen, admin}){
//     // const bagdeList = ["dig-1","dig-2","dig-3"];
//     // const people = ["asai","asano","yamakuzu","hiraoka","miura"];

//     const [offerBadge,setBadge] = useState("");
//     const [offerPerson,setPerson] = useState("");
//     const [bugdeList,setBadges] = useState([]);
//     const [people,setPeople] = useState([]);
//     const [allBudge,setAllbudge] = useState([]);
//     const [allPeople,setAllpeople] = useState([]);

//     const baseURL = "http://localhost:8080/";

//     useEffect(() => {
//         axios.get(`${baseURL}approveBudge/budge`)
//             .then(res => {
//                 setAllbudge(res.data);
//                 setBadges(res.data.map((elem) => elem.budge_name))
//             })

//             axios.get(`${baseURL}approveBudge/user`)
//             .then(res => {
//                 setAllpeople(res.data)
//                 setPeople(res.data.map((elem) => elem.user_name))
//             })

//     },[])

//     console.log(allBudge);
//     console.log(allPeople);

//     return(
//         <>
//             {/* <Hedder setScreen={setScreen} screen={screen} admin={admin} setDisp={setDisp} state={state}/> */}
//             <BudgeHedder setScreen={setScreen} screen={screen} admin={admin} />
//             <div className="form">
//                 <label className="drop-wrap">
//                     <select 
//                         className="dropdown"
//                         onChange={(event) => {
//                             setBadge(event.target.value);
//                         }}  
//                     >
//                         <option value="" selected disabled>Select Badge</option>
//                         {
//                             bugdeList.map((badge) => <option value={badge}>{badge}</option>)
//                         }
//                     </select>
//                 </label>

//                 <label className="drop-wrap">
//                     <select 
//                         className="dropdown"
//                         onChange={(event) => {
//                             setPerson(event.target.value);
//                         }}
//                     >
//                         <option value="" selected disabled>Choose a Person</option>
//                         {
//                             people.map((person) => <option value={person}>{person}</option>)
//                         }
//                     </select>
//                 </label>

//                 <button
//                     className="log-btn"
//                     variant="primary"
//                     onClick={() => {
//                         console.log(offerBadge, offerPerson);

//                         // axios({
//                         //     method : "post",
//                         //     url : `${baseURL}assignBudge`,
//                         //     data : {
//                         //         user_id : "***",
//                         //         budge_id : "***"
//                         //     }
//                         // })
//                     }}
//                 >
//                     offer
//                 </button>
//             </div>
//         </>
//     )
// }


