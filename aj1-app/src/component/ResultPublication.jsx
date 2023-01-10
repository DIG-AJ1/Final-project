import React ,{useState, useEffect} from "react";
import axios from "axios";


export default function ResultPublication(){
    return(
        <>
            <label>合格しました</label>
            <img src="./Bara-emon.png"></img>
            <button
                onClick={console.log("resultTest")}
            ></button>
        </>
    )
}