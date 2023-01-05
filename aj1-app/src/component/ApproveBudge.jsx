import Button from 'react-bootstrap/Button';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import BudgeHedder from "./BudgeHedder";

export default function ApproveBudge({setScreen, screen, admin}) {

    const [ applyList, setApplyList ] = useState([]); // ステータスが申請中のリスト

    useEffect(() => {
        const getApplyList = async () => {
            try {
                const response = await axios.get("/approveBudge", {
                    params:{status: 1}
                });
                setApplyList(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        getApplyList();
    },[]);

    return (
        <>
            <BudgeHedder setScreen={setScreen} screen={screen} admin={admin}/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>依頼者名</th>
                        <th>資格名</th>
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
                                <th>{record.url}</th>
                                <th>
                                    <Button
                                        variant='success'
                                        onClick={
                                            () => {
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


