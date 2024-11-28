import React from "react";
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
                gridTemplateColumns: "repeat(4, 1fr)",
                gridTemplateRows: "repeat(4, 1fr)",
                aspectRatio: "1 / 1", // Ensures the grid remains square
                margin: "20px",
                border: "1px solid #ccc",
                gap: "5px",
                width: "80%",
            }}
        >
            {props.cognitiveFunction.questions.map((question, index) => {
                return <BingoBox change={scoreChange} question={question} key={index} />;
            })}
        </div>
    );
}

export default Bingo;
