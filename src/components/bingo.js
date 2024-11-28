import React from "react";
import BingoBox from "./bingoBox";

function Bingo(props) {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",    // 25 rows
                gridTemplateRows: "repeat(5, 1fr)", 
                gap: "1px",
                height: "100%"                          // Optional gap between boxes for better visibility
            }}
        >
            {Array.from({ length: 25 }).map((_, index) => {
                return <BingoBox key={index} />;
            })}
        </div>
    );
}

export default Bingo;
