import React, { useState } from "react";

function BingoBox(props) {
    const [clicks, setNumClicks] = useState(0);

    const getStyle = (order, condition) => {
        return condition ? { backgroundColor: "blue", order, height: "100%", opacity: 0.4 } : { order, height: "100%", opacity: 0.4};
    };
    function handleClick(event){
        
        props.change(clicks % 5, (clicks + 1) % 5);
        setNumClicks(clicks + 1);
    }
    return (
        <div style={{ height: "100%", width: "100%", position: "relative" }}>
            
            <div onClick={handleClick} style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", zIndex: 0, position: "absolute", aspectRatio: 1}}>
                <div style={getStyle(4, clicks % 5 > 0)}></div>
                <div style={getStyle(3, clicks % 5 > 1)}></div>
                <div style={getStyle(2, clicks % 5 > 2)}></div>
                <div style={getStyle(1, clicks % 5 > 3)}></div>
            </div>
            <div  style={{ width: "100%", height: "100%", zIndex: 1, textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", fontsize: "0.5rem", wordWrap: "breakWord", whiteSpace: "normal" }}>
                <h4>{props.question}</h4>
            </div>
        </div>
    );
}

export default BingoBox;
