import React, { useState, useEffect } from "react";
import "../style/List.css";
import Header from "./Header";
import axios from "axios";
import Table from 'react-bootstrap/Table';

export default function MyBudgeList({ setScreen, screen, user, list, targetUser }) {

  const [budge, setBudge] = useState([]);

  useEffect(() => {
    async function func() {
        await axios({
            method: "post",
            url: "/viewBudge",
            data: {
                // user_id: user[0],
                user_id: targetUser.user_id? targetUser.user_id : user[0]
              },
        })
        .then((res) => {
            setBudge(res.data.map((obj) => {
                return [obj.budge_name,obj.status,obj.url, obj.certification_date];
            }));
        })
        .catch((err) => console.error(err));
    }
    func();
  }, [user]);


  return (
    <>
      <Header setScreen={setScreen} screen={screen}/>
      <div>🌻🌻🌻  取得済 🌻🌻🌻</div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>申請状況</th>
            <th>資格名</th>
            <th>取得日</th>
            <th>エビデンスURL</th>
          </tr>
        </thead>
        <tbody>
          {budge.map((record,key) => {
            if(record[1]===0){
              record[1]="未取得"
            }else if(record[1]===1){
              record[1]="申請中"
            }else if(record[1]===2){
              record[1]="取得済"
            }else if(record[1]===3){
              record[1]="棄却"
            }
            console.log("record",record);
            return(
            <tr key={key}>
              <td>{record[1]}</td>
              <td>{record[0]}</td>
              <td>{record[3]}</td>
              <td>{record[2]}</td>
            </tr>
          )})}
        </tbody>
      </Table>
      <div>🙇🙇🙇 申請中 🙇🙇🙇</div>
      <Table></Table>
      <div>未取得</div>
    </>
  );
}
