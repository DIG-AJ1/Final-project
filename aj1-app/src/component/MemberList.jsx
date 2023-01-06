import React, { useEffect } from "react";
import Header from "./Header"
import Table from "react-bootstrap/esm/Table";
import axios from "axios";
import { useState } from "react";

export default function MemberList({ setScreen, user }) {

    const [ userListArray, setUserListArray ] = useState([]);

    useEffect(() => {
        const getUserList = async () => {
            try {
                console.log("user:", user);
                const response = await axios({
                    method: "post",
                    url: "/memberList",
                    data : {user_id: user[0]}
                });
                console.log(response.data);
                setUserListArray(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getUserList();
    },[]);

    return(
        <>
            <Header setScreen={setScreen}/>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>名前</th>
                </tr>
                </thead>
                <tbody >
                    {userListArray.map((obj, key) => {
                            return (
                                <tr key={key}>
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