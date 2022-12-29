import React, { useState, useEffect } from "react";
import "../style/List.css";
import Hedder from "./Hedder";
import axios from "axios";
import Table from 'react-bootstrap/Table';

export default function List({ setScreen, screen, user, list }) {
  const baseURL = "http://localhost:8080/";

  const [budge, setBudge] = useState([]);

  let budges = ["a","b","c"];
  useEffect(() => {
    async function func() {
        await axios({
            method: "post",
            url: "/viewBudge",
            data: {
                user_id: user[0],
            },
        })
        .then((res) => {
            setBudge(res.data.map((obj) => {
                return [obj.budge_name,obj.status,obj.url];
            }));
        })
        .catch((err) => console.error(err));
    }
    func();
  }, [user]);


  return (
    <>
      <Hedder setScreen={setScreen} screen={screen} admin={1} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>申請状況</th>
            <th>資格名</th>
            <th>エビデンスURL</th>
          </tr>
        </thead>
        <tbody>
          {budge.map((record) => {
            if(record[1]===0){
              record[1]="未取得"
            }else if(record[1]===1){
              record[1]="申請中"
            }else if(record[1]===2){
              record[1]="取得済"
            }
            return(
            <tr>
              <td>{record[1]}</td>
              <td>{record[0]}</td>
              <td>{record[2]}</td>
            </tr>
          )})}
        </tbody>
      </Table>
      {/* <div>
        {budge.map((sell) => {
          return <div className="cell">{sell[0]}, {sell[1]}, {sell[2]}</div>;
        })}
      </div> */}
    </>
  );
}
