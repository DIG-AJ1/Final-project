import React, { useEffect } from "react";
import Header from "./Header"
import Container from 'react-bootstrap/Container';
import Table from "react-bootstrap/esm/Table";
import axios from "axios";
import { useState } from "react";
import "../style/MemberList.css"

export default function MemberList({ screen, setScreen, user , setUser, setTargetUser}) {

    const [ userListArray, setUserListArray ] = useState([]);

    useEffect(() => {
        const getUserList = async () => {
            try {
                const response = await axios({
                    method: "post",
                    url: "/memberList",
                    data : {user_id: user[0]}
                });
                setUserListArray(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getUserList();
    },[]);

    return(
        <>
            <Header screen={screen} setScreen={setScreen} user={user} setUser={setUser}/>
            <Table striped bordered hover className="container bg-light">
                <thead>
                    <tr>
                        <th>名前</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        userListArray.map((obj, key) => {
                            return(
                                <tr
                                    onClick={()=>{
                                        setScreen("MyBudgeList")
                                        setTargetUser(obj)
                                    }} 
                                    key={key}>
                                    <td>{obj.user_name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}