import React from "react";

function Chart(props){
    return (
        <div>
            {props.cognitiveFunctions.map((cognitiveFunction) => {
                return <p>{cognitiveFunction.name}: {cognitiveFunction.score}</p>;
            })}
        </div>
    );
}

export default Chart;