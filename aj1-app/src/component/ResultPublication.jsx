import React ,{useState, useEffect} from "react";
import axios from "axios";
import Image from "../images/BaraemonClap.GIF"
import useSound from 'use-sound';
import sound from "../sounds/circle-sound1.mp3"
import { useReward } from 'react-rewards';
import Header from "./Header";
import "../style/result.css"

export default function ResultPublication({setScreen, screen, admin, user, setPeople, resultFlag}){
    const { reward, isAnimating } = useReward('rewardid', 'confetti');
    const [play, { stop, pause }] = useSound(sound);
    return(
        <>
            <Header setScreen={setScreen} screen={screen} user={user}/>
            {resultFlag.map(elm => <div className="resultLabel">{elm.budge_name}</div>)}
            <div className="resultLabel">承認されました!</div>
            <span 
                className="cracker" 
                id="rewardid"
                onClick={()=>reward()}
            > 🎉
            <span id="resultDiv">
                <button
                    id="result-btn"
                    disabled={isAnimating}
                    onClick={() => {
                        play();
                        reward();
                        const target = document.getElementById("result-btn");
                        target.animate(
                            [
                                { transform: "rotate(-360deg)" } ,
                            ], 
                            {
                                duration: 250,
                                iterations: 10
                            }
                        );
                    }}
                >
                    <img className="resultImage" src={Image}></img>
                </button>
            </span>
             🎉</span>
            </>
    )
}