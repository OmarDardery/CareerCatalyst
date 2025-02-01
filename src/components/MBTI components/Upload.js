import React from "react";

function Upload(props){
    async function uploadStuff(userId){
        const { data, error } = await props.supabase
        .from("CareerCatalystData")
        .insert([
            {
                user_id: userId,
                ni: props.cognitiveFunctions[5].score,
                ne: props.cognitiveFunctions[4].score,
                si: props.cognitiveFunctions[3].score,
                fi: props.cognitiveFunctions[7].score,
                ti: props.cognitiveFunctions[1].score,
                fe: props.cognitiveFunctions[6].score,
                se: props.cognitiveFunctions[2].score,
                te: props.cognitiveFunctions[0].score,
                niA: props.cognitiveFunctions[5].openEnded.answer,
                neA: props.cognitiveFunctions[4].openEnded.answer,
                siA: props.cognitiveFunctions[3].openEnded.answer,
                fiA: props.cognitiveFunctions[7].openEnded.answer,
                tiA: props.cognitiveFunctions[1].openEnded.answer,
                feA: props.cognitiveFunctions[6].openEnded.answer,
                seA: props.cognitiveFunctions[2].openEnded.answer,
                teA: props.cognitiveFunctions[0].openEnded.answer,
            }
        ]);

        if (error) {
            console.error("Error inserting data:", error);
        } else {
            console.log("Data inserted successfully");
        }
    }
    return <div style={{
        display:"flex",
        flexDirection:"column",
        border: "1px solid #C5BDCE",
        padding: "2vw",
        paddingTop: "1vw",
        width: "35vw",
        fontSize: "1.5vw",
        alignSelf: "flex-end",
        margin: "2vw",
        backgroundColor: "#222",
        borderRadius: "5px",
    }}>
        <h1> Upload your data to our servers to get your personalized job recommendations based on your open ended answers! </h1>
        <button style={{alignSelf: "flex-end"}} onClick={() => {
            const userId = prompt("Please enter a user id to retrieve your data with in the future");
            uploadStuff(userId);
        }}><span className="button_top">Upload</span></button>

    </div>
}

export default Upload;