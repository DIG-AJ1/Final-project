import React, { useState, useEffect } from "react";
import "../style/List.css";
import Header from "./Header";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import "../style/myBudgeList.css";

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
      <h2>🏅🏅🏅  取得済 🏅🏅🏅</h2>
      <Table striped bordered >
        <thead>
          <tr>
            <th className="table some-other-class-1">資格名</th>
            <th className="table some-other-class-2">取得日</th>
            <th className="table some-other-class-3">エビデンスURL</th>
          </tr>
        </thead>
        <tbody>
          {
            budge.map((record, key) => {
              if(record[1] === 2) {
                return(
                  <tr>
                    <td>{record[0]}</td>
                    <td>{record[3]}</td>
                    <td>{record[2]}</td>
                  </tr>
                )
              }
            })
          }
        </tbody>
      </Table>
      <h2>🙇🙇🙇 申請中 🙇🙇🙇</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="table some-other-class-1">資格名</th>
            <th className="table some-other-class-2">取得日</th>
            <th className="table some-other-class-3">エビデンスURL</th>
          </tr>
        </thead>
        <tbody>
          {
            budge.map((record, key) => {
              if(record[1] === 1) {
                return(
                  <tr>
                    <td>{record[0]}</td>
                    <td>{record[3]}</td>
                    <td>{record[2]}</td>
                  </tr>
                )
              }
            })
          }
        </tbody>
      </Table>
      <h2>🙅🙅🙅 棄却 🙅🙅🙅</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="table some-other-class-1">資格名</th>
            <th className="table some-other-class-2">取得日</th>
            <th className="table some-other-class-3">エビデンスURL</th>
          </tr>
        </thead>
        <tbody>
          {
            budge.map((record, key) => {
              if(record[1] === 3) {
                return(
                  <tr>
                    <td>{record[0]}</td>
                    <td>{record[3]}</td>
                    <td>{record[2]}</td>
                  </tr>
                )
              }
            })
          }
        </tbody>
      </Table>
    </>
  )
}