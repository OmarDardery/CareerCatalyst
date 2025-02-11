import React, { useState, useEffect } from "react";

function Upload(props) {
    const [userId, setUserId] = useState("");
    let [uploaded, setUploaded] = useState(0);
    useEffect(() => {
        console.log("Updated userId:", userId);
    }, [userId]);

    async function uploadStuff() {
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
            setUploaded(2);
        } else {
            setUploaded(1);
        }
    }

    return (uploaded === 0 || uploaded === 2) ? (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid #C5BDCE",
                padding: "2vw",
                paddingTop: "1vw",
                width: "35vw",
                fontSize: "1.5vw",
                alignSelf: "flex-end",
                margin: "5vw",
                backgroundColor: "#222",
                borderRadius: "5px",
            }}
        >
            <h1>Upload your data to our database to get your personalized job recommendations based on your open-ended answers!</h1>
            <h2>Enter a unique ID to use to retrieve your results with in the future:</h2>
            <input
                value={userId}
                type="text"
                onChange={(event) => setUserId(event.target.value)}
            />
            <button style={{ alignSelf: "flex-end", margin: "3vh" }} onClick={uploadStuff}>
                <span className="button_top">Upload</span>
            </button>
            {uploaded === 2 && (<div className="badges">
        <div className="red">Failed to upload data. Error likely happened because your ID was already used before by yourself or another person. choose another ID and try again later.</div>
    </div>)}
        </div>
    ) : (<div style={{alignSelf: "flex-end", margin: "5vw"}} className="badges">
        <div className="green">Uploaded successfully!</div>
    </div>) 
    ;
}

export default Upload;
