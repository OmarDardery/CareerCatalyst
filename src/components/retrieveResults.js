import React, {useState} from "react";
import MbtiList from "./MBTI components/mbtiNJobs";
import cognitiveFunctions from "../cognitiveFunctionsData";
import Chart from "./MBTI components/mbtichart";
function Retrieve(props){
    let [retrieved, setRetrieved] = useState(false);
    let [data, setData] = useState([]);
    let [id, setId] = useState('');
    async function retrieveData(id){
        const { data, error } = await props.supabase
        .from('CareerCatalystData')
        .select()
        .eq('user_id', id);
        if (error) {
            console.error("Error retrieving data:", error);
        } else {
            console.log("Data retrieved successfully");
            setRetrieved(true);
            setData(data);
        }
        cognitiveFunctions[0].score = data[0].te;
        cognitiveFunctions[1].score = data[0].ti;
        cognitiveFunctions[2].score = data[0].se;
        cognitiveFunctions[3].score = data[0].si;
        cognitiveFunctions[4].score = data[0].ne;
        cognitiveFunctions[5].score = data[0].ni;
        cognitiveFunctions[6].score = data[0].fe;
        cognitiveFunctions[7].score = data[0].fi;
    }

    return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width:"100%"}}>
        <div style={ retrieved? {display: "none"} : {height: "fit-content", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", paddingLeft: "10vw", paddingRight: "10vw"}}>
            <h1 style={{fontSize: "5vw", textAlign: "left"}}>Retrieve your data from our servers!</h1>
            <input type="text" placeholder="Enter your user id" value={id} onChange={(event) => setId(event.target.value)} />
            <button onClick={() => retrieveData(id)} style={{margin: "2vw", alignSelf: "flex-end"}}><span className="button_top">Retrieve</span></button>
        </div>
        <div style={ retrieved? {height: "fit-content", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%"} : {display: "none"}}>
        <div style={{height: "clamp(1px, 5vh, 1vw)"}}></div>
            <Chart cognitiveFunctions={cognitiveFunctions}/>
            <MbtiList cognitiveFunctions={cognitiveFunctions}/>
        </div>
    </div>);
}

export default Retrieve;