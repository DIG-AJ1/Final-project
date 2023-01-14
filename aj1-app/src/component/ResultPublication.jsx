import React ,{useState, useEffect} from "react";
import axios from "axios";
import Image from "../images/Bara-emon.png"
import useSound from 'use-sound';
import sound from "../sounds/Bara-ome.mp3"
import { useReward } from 'react-rewards';
import Header from "./Header";

export default function ResultPublication({setScreen, screen, admin, user, setPeople, resultFlag}){
    const { reward, isAnimating } = useReward('rewardid', 'confetti');
    const [play, { stop, pause }] = useSound(sound)
    console.log(resultFlag);
    return(
        <div className="resultDiv">
            <Header setScreen={setScreen} screen={screen}/>
            {resultFlag.map(elm => <div>{elm.budge_name}</div>)}
            <div className="resultLabel">承認されました!</div>
            <button
                id="result-btn"
                disabled={isAnimating}
                onClick={() => {
                    play();
                    reward();
                    const target = document.getElementById("result-btn");
                    console.log(target);
                    target.animate(
                        [
                            { transform: "rotate(-360deg)" } ,
                        ], 
                        {
                            duration: 1000,
                            iterations: Infinity
                        }
                    );
                }}
            >
                <span id="rewardid"/>
                <img className="resultImage" src={Image}></img>
            </button>
        </div>
    )
}