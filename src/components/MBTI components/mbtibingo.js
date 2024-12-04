import React from "react";
import BingoBox from "../bingoBox";

function Bingo(props) {

    function scoreChange(prev, value){
        props.cognitiveFunction.score += value;
        props.cognitiveFunction.score -= prev;
    }
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 0.5fr)",
                gridTemplateRows: "repeat(4, 0.5fr)",
                borderRadius: "5px",
                gap: "5px",
                width: "100%",
            }}
        >
            {props.cognitiveFunction.questions.map((question, index) => {
                return <BingoBox change={scoreChange} question={question} key={index} />;
            })}
        </div>
        
    );
}

export default Bingo;
