import React from "react";

function Choice(props){
    return (
        <div style={props.choice !== 0 ?{ display: "none"} : { display: "flex", flexDirection: "column", width: "100%", justifyContent: "space-around", alignItems: "center", gap: "15vh", paddingTop: "10vh"}}>
            <button onClick={() => props.setChoice(1)} style={{width: "70vw", maxWidth: "400px"}}>
                <span className="button_top" style={{fontSize: "clamp(16px, 8vw, 38px)", padding: "clamp(16px, 5vw, 38px)", borderRadius: "clamp(16px, 4vw, 33px)"}}>take the test</span>
            </button>
            <button onClick={() => props.setChoice(2)} style={{width: "70vw", maxWidth: "400px"}}>
                <span className="button_top" style={{fontSize: "clamp(16px, 8vw, 38px)", padding: "clamp(16px, 5vw, 38px)", borderRadius: "clamp(16px, 4vw, 33px)"}}>retrieve results</span>
            </button>
            <button onClick={() => props.setChoice(3)} style={{width: "70vw", maxWidth: "400px"}}>
                <span className="button_top" style={{fontSize: "clamp(16px, 8vw, 38px)", padding: "clamp(16px, 5vw, 38px)", borderRadius: "clamp(16px, 4vw, 33px)"}}>jobs details</span>
            </button>
        </div>
        
    )
}

export default Choice;