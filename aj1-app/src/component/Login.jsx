import React from "react";
// import Button from "reacr-bootstrap/Button";
import "../style/Login.css"
import "../style/button.css"
import Header from "./Header"
import axios from "axios";

export default function Login({setScreen, screen, setUser, setRole}){

    return (
        <>
            <Header setScreen={setScreen} screen={screen}/>
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
                    autoComplete="off"
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
                        const data = {
                            login_number : userName,
                            password : pass
                        }

                        if(userName === "" || pass === ""){
                            warNoText.style.display = "block";
                            warDiff.style.display = "none";
                        } else {
                            axios({
                                method: "post",
                                url:"/login",
                                data: data,
                            })
                                .then(res => {
                                    if(res.data){
                                        setScreen("Main");

                                        setUser(res.data);
                                        console.log(res.data);

                                        setRole(res.data[1]);
                                        
                                    }else{
                                        warNoText.style.display = "none";
                                        warDiff.style.display = "block";
                                    }
                                })
                                .catch((res) => {
                                    warNoText.style.display = "none";
                                    warDiff.style.display = "block";
                                })
                            // getUser(data)
                        }
                    }}
                >
                    Login
                </button>
            </div>
        </>
    )
}