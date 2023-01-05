import React from "react";
import BudgeHedder from "./BudgeHedder"

export default function ListOfMembers({setScreen, screen}) {
 
    return(
        <> 
            <BudgeHedder setScreen={setScreen} screen={screen}/>
            <div>メンバーの一覧表を作るページ</div>
        </>
    )
}