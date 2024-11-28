import React, { useState } from "react";

function BingoBox(props) {
    const [clicks, setNumClicks] = useState(0);

    const getStyle = (order, condition) => {
        return condition ? { backgroundColor: "blue", order, height: "100%", opacity: 0.4 } : { order, height: "100%", opacity: 0.4};
    };

    return (
        <div style={{ height: "100%", width: "100%", position: "relative" }}>
            
            <div onClick={() => setNumClicks(clicks + 1)} style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", zIndex: 0, position: "absolute"}}>
                <div style={getStyle(4, clicks % 5 > 0)}></div>
                <div style={getStyle(3, clicks % 5 > 1)}></div>
                <div style={getStyle(2, clicks % 5 > 2)}></div>
                <div style={getStyle(1, clicks % 5 > 3)}></div>
            </div>
            <div  style={{ width: "100%", height: "100%", zIndex: 1, textAlign: "center", display: "flex", justifyContent: "center"}}>
                <p>{clicks % 5}</p>
            </div>
        </div>
    );
}

export default BingoBox;
