import React from "react";
// import Button from "reacr-bootstrap/Button";
import "../style/Login.css"
import "../style/button.css"
import Hedder from "./Hedder"
import axios from "axios";



export default function Login({setScreen, screen, setUser}){

    const data = {
        username: "***",
        password: "***",
        token: "***"
    }

    return (
        <>
            <Hedder setScreen={setScreen} screen={screen}/>
            <div className="form">
                <input 
                    className="intext"
                    id="user-id"
                    type="text" 
                    placeholder="Login ID"
                />
                <input
                    className="intext"
                    id="pass"
                    type="text"
                    placeholder="Password"
                />

                <div className="warning">
                    ユーザーおよびパスワードを入力してください
                </div>

                <div className="warning">
                    ユーザーが存在しないまたはパスワードが違います
                </div>

                <button
                    className="log-btn"
                    variant="primary"
                    onClick={() => {
                        const warNoText = document.getElementsByClassName("warning")[0];
                        const warDiff = document.getElementsByClassName("warning")[1];
                        const userName = document.getElementById("user-id").value;
                        const pass = document.getElementById("pass").value;

                        if(userName === "" || pass === ""){
                            warNoText.style.display = "block";
                            warDiff.style.display = "none";
                        } else {
                            setScreen("List");
                            // axios.post("***"+/login)
                            //     .then(res => {
                            //         if(res.userName){
                            //             setScreen("List");
                            //         }else{
                            //             warNoText.style.display = "none";
                            //             warDiff.style.display = "block";
                            //         }
                            //     })
                        }
                    }}
                >
                    Login
                </button>
            </div>
        </>
    )
}