import React from "react";
import jobs from "../../jobsData";

function MbtiList(props) {
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

    const updatedJobs = jobs
        .map((current) => ({
            ...current,
            score:
                current.se * props.cognitiveFunctions[2].score +
                current.si * props.cognitiveFunctions[3].score +
                current.fe * props.cognitiveFunctions[6].score +
                current.fi * props.cognitiveFunctions[7].score +
                current.te * props.cognitiveFunctions[0].score +
                current.ti * props.cognitiveFunctions[1].score +
                current.ne * props.cognitiveFunctions[4].score +
                current.ni * props.cognitiveFunctions[5].score,
        }))
        .filter(job => job.score !== 0);

    const sortedJobs = [...updatedJobs].sort((a, b) => b.score - a.score);

    // Filter viable jobs based on percentage difference
    const viableJobs = sortedJobs.filter((job) => {
        const percentageDiff = Math.abs(((job.score - sortedJobs[0].score) / sortedJobs[0].score) * 100);
        return percentageDiff < 10; // Allow jobs within a 10% difference
    });

    console.log("Updated Jobs:", updatedJobs);
    console.log("Sorted Jobs:", sortedJobs);

    return (
        <div>
            <div>
                <h3 style={{color: "#4a4e69", textDecoration: "underline"}} className="list">Your top MBTI personality types are:</h3>
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
            <div>
                <h3 style={{color: "#4a4e69", textDecoration: "underline"}} className="list">Your top viable jobs are:</h3>
                <ol>
                    {viableJobs.map((current, index) => (
                        <li key={index} className="list">
                            {current.name}  ({current.score / 100}%)
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default MbtiList;
