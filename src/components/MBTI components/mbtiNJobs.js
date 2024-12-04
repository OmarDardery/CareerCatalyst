import React from "react";


function MbtiNjobs(props){
    const sortedCognitiveFunctions = [...props.cognitiveFunctions].sort((a, b) => b.score - a.score);
    let top1 = sortedCognitiveFunctions.filter((current) => (current.score === sortedCognitiveFunctions[0].score));
    let secondScore = 0;
    for(let i = 0; i < sortedCognitiveFunctions.length; i++) {
        if(sortedCognitiveFunctions[i].score < top1[0]){
            secondScore = sortedCognitiveFunctions[i].score;
            break;
        }
    }
    let top2 = sortedCognitiveFunctions.filter((current) => (current.score === secondScore));
    let thirdScore = 0;
    for(let i = 0; i < sortedCognitiveFunctions.length; i++) {
        if(sortedCognitiveFunctions[i].score < secondScore) {
            thirdScore = sortedCognitiveFunctions[i].score;
            break;
        }
    }
    let top3 = sortedCognitiveFunctions.filter((current) => (current.score === thirdScore));
    return (
        <div>
            <ol>
                <li>
                    {top1.map((current) => {

                        
                        return <p key={current.name}>{current.name}: {current.score}</p>;
                    })}
                </li>
            </ol>
        </div>
    );

}

export default MbtiNjobs;