import React, { useState, useEffect } from "react";
import "../style/List.css";
import Hedder from "./Hedder";
import axios from "axios";

export default function List({ setScreen, screen, user, list }) {
  const baseURL = "http://localhost:8080/";

  const [budge, setBudge] = useState([]);

  let budges = ["a","b","c"];
  useEffect(() => {
    async function func() {
        await axios({
            method: "post",
            url: `${baseURL}viewBudge`,
            data: {
                user_id: user,
            },
        })
        .then((res) => {
            setBudge(res.data.map((obj) => {
                return obj.budge_name;
            }));
        })
        .catch((err) => console.error(err));
    }
    func();
  }, [user]);


  return (
    <>
      <Hedder setScreen={setScreen} screen={screen} admin={1} />
      <div>
        {budge.map((sell) => {
          return <div className="cell">{sell}</div>;
        })}
      </div>
    </>
  );
}
