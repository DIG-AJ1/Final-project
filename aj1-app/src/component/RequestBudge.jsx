import React ,{useState, useEffect} from "react";
import Header from "./Header";
// import BudgeHedder from "./BudgeHedder"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
// import "../style/Dropdown.css"
import "../style/ReaquestBudge.css"
import axios from "axios";
import moment from 'moment';
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Badge } from "react-bootstrap";

export default function RequestBudge({setScreen, screen, admin, user, setUser}){

    const [offerBadge,setBadge] = useState("");
    const [bugdeList,setBadges] = useState([]);
    const [people,setPeople] = useState([]);
    const [allBudge,setAllbudge] = useState([]);
    const [allPeople,setAllpeople] = useState([]);
    const [text, setText] = useState("");
    const [certificationDate, setCertificationDate] = useState(new Date());

    useEffect(() => {
        axios.get("/assignBudge/budge")
        .then(res => {
            setAllbudge(res.data);
            setBadges(res.data.map((elem) => [elem.id,elem.budge_name]))
        })

        axios.get("/assignBudge/user")
        .then(res => {
            setAllpeople(res.data)
            setPeople(res.data.map((elem) => elem.user_name))
        })

    },[])

    return(
        <>
            <Header setScreen={setScreen} screen={screen} user={user} setUser={setUser}/>

            <h1>取得バッジ申請</h1>
            
            <Form className="mb-3 ms-5 me-5">
                <Row className="justify-content-md-center">
                    <Col xs lg="3" align="right">
                        <Form.Label htmlFor="inlineFormInput" >申請バッジ</Form.Label>
                    </Col>
                    <Col xs lg="4">
                        <Form.Select onChange={(event) => {
                            for(let element of bugdeList){
                                if(element[1]===event.target.value){
                                    setBadge([element[0],element[1]])}
                                }
                        }}>
                            <option key={999} value="資格を選択">資格を選択</option>
                            {bugdeList.map((budge, key) => <option key={key} value={budge[1]}>{budge[1]}</option>)}
                        </Form.Select>
                    </Col>
                </Row>
                <br />
                <Row className="justify-content-md-center">
                <Col xs lg="3" align="right">
                        <Form.Label htmlFor="inlineFormInput" >エビデンスURL</Form.Label>
                    </Col>
                <Col xs lg="4">
                        <Form.Control type="url" placeholder="https://drive.google.com/..." onChange={(event) => setText(event.target.value)}/>
                    </Col>
              </Row>
              <br />
              <Row className="justify-content-md-center">
                <Col xs lg="3" align="right">
                        <Form.Label htmlFor="inlineFormInput" >取得日</Form.Label>
                    </Col>
                <Col xs lg="4">
                    <Form.Control type="date" onChange={(date) => 
                        {setCertificationDate(date.target.value)}
                        }/>
                </Col>
            </Row>
            <br/>      
            <Row>
                <Col xs lg="2">
                    <Button 
                        variant="primary"
                        onClick={()=>{
                            const url = axios.post("/requestBudge",
                            {
                                user_id : user[0],
                                budge_id : offerBadge[0],
                                url : text,
                                certification_date: moment(certificationDate).format("YYYY/MM/DD"),
                            })                        
                            .then(() => setScreen("MyBudgeList"))                        
                            .catch(err => console.log("err:", err));
                        }
                        }>申請する</Button>{' '}
                </Col>
            </Row>
        </Form>
    </>
    )
}

