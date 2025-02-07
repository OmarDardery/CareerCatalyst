import React from "react";

function Choice(props){
    return (
        <div style={props.choice !== 0 ?{ display: "none"} : { display: "flex", flexDirection: "column", width: "100%", justifyContent: "space-around", alignItems: "center", gap: "15vw", paddingTop: "10vw"}}>
            <button onClick={() => props.setChoice(1)} style={{width: "70vw"}}>
                <span className="button_top" style={{fontSize: "8vw", padding: "5vw", borderRadius: "4vw"}}>take the test</span>
            </button>
            <button onClick={() => props.setChoice(2)} style={{width: "70vw"}}>
                <span className="button_top" style={{fontSize: "8vw", padding: "5vw", borderRadius: "4vw"}}>retrieve results</span>
            </button>
            <button onClick={() => props.setChoice(3)} style={{width: "70vw"}}>
                <span className="button_top" style={{fontSize: "8vw", padding: "5vw", borderRadius: "4vw"}}>jobs details</span>
            </button>
        </div>
        
    )
}

export default Choice;