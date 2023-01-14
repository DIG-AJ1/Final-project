import React, { useEffect } from "react";
import "../style/List.css";
import Header from "./Header";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import "../style/myBudgeList.css";

export default function MyBudgeList({ screen, setScreen, user, setUser, targetUser, budge, setBudge, list, resultFlag, setResultFlag }) {

  console.log({user});
  useEffect(() => {
    const getApplyList = async () => {
        try {
            const response = await axios.get("/resultPublication", {
                params:{status: user[0]}
            });
            const showResult = response.data.filter(elm => elm.unchecked === 1)
            setResultFlag(showResult);
            console.log("nami:",response.data);
        } catch (error) {
            console.error(error);
        }
    };
    getApplyList();
},[]);

  useEffect(() => {
    async function func() {
        await axios({
            method: "post",
            url: "/viewBudge",
            data: {
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
      <Header setScreen={setScreen} screen={screen} user={user} setUser={setUser}/>
      {resultFlag.length === 0? "" 
      : <button 
        onClick={() => {
          setScreen("ResultPublication");
          axios.patch("/resultPublication",{ status:user[0]})
        }}
      >結果を確認</button>}

      <h2>🏅🏅🏅  取得済 🏅🏅🏅</h2>
      {
        (budge.filter(record => record[1] === 2).length === 0) ?
          <h4>表示するものがありません</h4>
        :
        (
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
                budge.filter(elm => elm[4] === 0).map((record, key) => {
                  if(record[1] === 2) {
                    return(
                      <tr key={key}>
                        <td>{record[0]}</td>
                        <td>{record[3]}</td>
                        <td ><a href={record[2]} target="blank">{record[2].substr(0,30)}...</a></td>
                      </tr>
                    )
                  }
                })
              }
            </tbody>
          </Table>
        )
      }
      <h2>🙇🙇🙇 申請中 🙇🙇🙇</h2>
      {
        (budge.filter(record => record[1] === 1).length === 0) ?
          <h4>表示するものがありません</h4>
        :
        (
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
                      <tr key={key}>
                        <td>{record[0]}</td>
                        <td>{record[3]}</td>
                        <td ><a href={record[2]} target="_blank">{record[2].substr(0,30)}...</a></td>
                      </tr>
                    )
                  }
                })
              }
            </tbody>
          </Table>
        )
      }
      <h2>🙅🙅🙅 棄却 🙅🙅🙅</h2>
      {
        (budge.filter(record => record[1] === 3).length === 0) ?
          <h4>表示するものがありません</h4>
        :
        (
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
                budge.filter(elm => elm[4] === 0).map((record, key) => {
                  if(record[1] === 3) {
                    return(
                      <tr key={key}>
                        <td>{record[0]}</td>
                        <td>{record[3]}</td>
                        <td ><a href={record[2]} target="_blank">{record[2].substr(0,30)}...</a></td>
                      </tr>
                    )
                  }
                })
              }
            </tbody>
          </Table>
        )
      }
    </>
  )
}