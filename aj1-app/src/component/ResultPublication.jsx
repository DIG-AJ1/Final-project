import React ,{useState, useEffect} from "react";
import axios from "axios";
import Image from "../images/Bara-emon.png"
import useSound from 'use-sound';
import sound from "../sounds/Bara-ome.mp3"
import { useReward } from 'react-rewards';
import Header from "./Header";

export default function ResultPublication({setScreen, screen, admin, user, setPeople}){
    const { reward, isAnimating } = useReward('rewardid', 'confetti');
    const [play, { stop, pause }] = useSound(sound)
    return(
        <div className="resultDiv">
            <Header setScreen={setScreen} screen={screen}/>
            <label className="resultLabel">承認されました！</label>
            <img className="resultImage" src={Image}></img>
            <button
                className="result-btn"
                disabled={isAnimating}
                onClick={() => {
                    play();
                    reward();
                }}
            >
                <span id="rewardid"/>
                ボタン
            </button>
        </div>
    )
}