import Button from 'react-bootstrap/Button';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Header from "./Header";
import useSound from 'use-sound';
import sound from "../sounds/eriko-approved.mp3"

export default function ApproveBudge({ screen, setScreen, user, setUser }) {

    const [ applyList, setApplyList ] = useState([]); // ステータスが申請中のリスト
    const [play, { stop, pause }] = useSound(sound)

    useEffect(() => {
        const getApplyList = async () => {
            try {
                const response = await axios.get("/approveBudge", {
                    params:{status: 1}
                });
                setApplyList(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        getApplyList();
    },[]);

    return (
        <>
            <Header screen={screen} setScreen={setScreen} user={user} setUser={setUser}/>
            <Table striped bordered hover className='container'>
                <thead>
                    <tr>
                        <th>依頼者名</th>
                        <th>資格名</th>
                        <th>取得日</th>
                        <th>エビデンスURL</th>
                        <th>承認</th>
                        <th>棄却</th>
                    </tr>
                </thead>
                {applyList.map((record,key) => {
                    return(
                        <tbody className="application" key={key}>
                            <tr>
                                <th>{record.user_name}</th>
                                <th>{record.budge_name}</th>
                                <th>{record.certification_date}</th>

                                <th><a href={record.url} target="_blank">{record.url.substr(0,30)}...</a></th>
                                <th>
                                    <Button
                                        variant='success'
                                        onClick={
                                            () => {
                                                play();
                                                axios.patch("/approveBudge", 
                                                    {user_id_budge_id:record.user_id_budge_id,  status: 2});
                                                applyList.splice(key,1);
                                                setApplyList([...applyList]);
                                            }
                                        }>
                                        承認
                                    </Button>
                                </th>
                                <th>
                                    <Button variant='danger' 
                                        onClick={
                                            () => {
                                                axios.patch("/approveBudge", 
                                                    {user_id_budge_id:record.user_id_budge_id,  status: 3});
                                                applyList.splice(key,1);
                                                setApplyList([...applyList]);
                                            }
                                        }>
                                        棄却
                                    </Button>
                                </th>
                            </tr>
                        </tbody>
                    )
                })}
            </Table>
        </>
    );
}


