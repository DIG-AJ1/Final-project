import React ,{useState, useEffect} from "react";
import axios from "axios";
import Image from "../images/Bara-emon.png"
import useSound from 'use-sound';
import sound from "../sounds/Bara-ome.mp3"
import { useReward } from 'react-rewards';

export default function ResultPublication(){
    const { reward, isAnimating } = useReward('rewardid', 'confetti');
    const [play, { stop, pause }] = useSound(sound)
    return(
        <div>
            <label className="namilabel">承認されました！</label>
            <img className="namiImage" src={Image}></img>
            <button
                className="nami-btn"
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