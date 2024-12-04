import React from "react";

function MbtiNjobs(props) {
    const sortedCognitiveFunctions = [...props.cognitiveFunctions].sort((a, b) => b.score - a.score);

    // Get top1, top2, and top3 as before
    let top1 = sortedCognitiveFunctions.filter((current) => current.score === sortedCognitiveFunctions[0].score);
    let secondScore = sortedCognitiveFunctions.find((current) => current.score < sortedCognitiveFunctions[0].score)?.score || 0;
    let top2 = sortedCognitiveFunctions.filter((current) => current.score === secondScore);
    let thirdScore = sortedCognitiveFunctions.find((current) => current.score < secondScore)?.score || 0;
    let top3 = sortedCognitiveFunctions.filter((current) => current.score === thirdScore);

    function getMbti(functionName) {
        if (functionName === "Ni") {
            for (let i = 0; i < 8; i++) {
                if (sortedCognitiveFunctions[i].name === "Te") {
                    return "intj";
                } else if (sortedCognitiveFunctions[i].name === "Fe") {
                    return "infj";
                }
            }
        }
        if (functionName === "Fi") {
            for (let i = 0; i < 8; i++) {
                if (sortedCognitiveFunctions[i].name === "Ne") {
                    return "infp";
                } else if (sortedCognitiveFunctions[i].name === "Se") {
                    return "isfp";
                }
            }
        }
        if (functionName === "Ti") {
            for (let i = 0; i < 8; i++) {
                if (sortedCognitiveFunctions[i].name === "Ne") {
                    return "intp";
                } else if (sortedCognitiveFunctions[i].name === "Se") {
                    return "istp";
                }
            }
        }
        if (functionName === "Si") {
            for (let i = 0; i < 8; i++) {
                if (sortedCognitiveFunctions[i].name === "Te") {
                    return "istj";
                } else if (sortedCognitiveFunctions[i].name === "Fe") {
                    return "isfj";
                }
            }
        }
        if (functionName === "Ne") {
            for (let i = 0; i < 8; i++) {
                if (sortedCognitiveFunctions[i].name === "Ti") {
                    return "entp";
                } else if (sortedCognitiveFunctions[i].name === "Fi") {
                    return "enfp";
                }
            }
        }
        if (functionName === "Fe") {
            for (let i = 0; i < 8; i++) {
                if (sortedCognitiveFunctions[i].name === "Ni") {
                    return "enfj";
                } else if (sortedCognitiveFunctions[i].name === "Si") {
                    return "esfj";
                }
            }
        }
        if (functionName === "Te") {
            for (let i = 0; i < 8; i++) {
                if (sortedCognitiveFunctions[i].name === "Ni") {
                    return "entj";
                } else if (sortedCognitiveFunctions[i].name === "Si") {
                    return "estj";
                }
            }
        }
        if (functionName === "Se") {
            for (let i = 0; i < 8; i++) {
                if (sortedCognitiveFunctions[i].name === "Ti") {
                    return "estp";
                } else if (sortedCognitiveFunctions[i].name === "Fi") {
                    return "esfp";
                }
            }
        }
    }

    return (
        <div style={{fontSize: "0.5em"}}>
            <ol>
                <li className="list">
                    {top1.map((current) => getMbti(current.name)).join(" / ")}
                </li>
                <li className="list">
                    {top2.map((current) => getMbti(current.name)).join(" / ")}
                </li>
                <li className="list">
                    {top3.map((current) => getMbti(current.name)).join(" / ")}
                </li>
            </ol>
        </div>
    );
}

export default MbtiNjobs;
