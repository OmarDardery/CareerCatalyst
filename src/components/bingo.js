import React, {useState} from "react";
import BingoBox from "./bingoBox";

function Bingo(props) {

    function scoreChange(prev, value){
        props.cognitiveFunction.score += value;
        props.cognitiveFunction.score -= prev;
    }
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gridTemplateRows: "repeat(5, 1fr)", 
                gap: "1px",
                height: "100%",
                aspectRatio: 1
            }}
        >
            {props.cognitiveFunction.questions.map((question, index) => {
                return <BingoBox change={scoreChange} question={question} key={index} />;
            })}
        </div>
    );
}

export default Bingo;
