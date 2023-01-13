import React from "react";
import Button from "react-bootstrap/Button";
import "../style/Login.css";
import "../style/button.css";
import Header from "./Header";
import axios from "axios";

export default function Login({screen, setScreen, user, setUser, setRole}){

    return (
        <>
            <Header screen={screen} setScreen={setScreen} user={user} setUser={setUser}/>
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

                <Button
                    className="mb-2"
                    variant="secondary"
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
                        }
                    }}>
                    Login
                </Button>
            </div>
        </>
    )
}