import React, {useState} from 'react';
import cognitiveFunctions from '../../cognitiveFunctionsData';
import Chart from './mbtichart';
import Page from './MBTIpage';
import MbtiNjobs from "./mbtiNJobs";
function MbtiPages() {
  let [testDone, setTestState] = useState(0);
  let [page, setPage] = useState(1);
  return (
  <div className="App" style={{height: "fit-content", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%"}}>

    {(testDone === 0 ) ? (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "80%", gap: "10px"}}>
            <div>
            {cognitiveFunctions.map((cognitiveFunction, index) => {
            return <Page cognitiveFunction = {cognitiveFunction} display={(page === index + 1)} />;
            })}
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", width: "100%"}}>
                <button onClick={() => {
                if(page > 1){
                    setPage(page - 1);
                }
                }}> Previous </button>
                <div>
                    {page}/8
                </div>
                <button onClick={() => {
                    if(page < 8){
                        setPage(page + 1);
                    }
                }}> Next </button>
            </div>
            
            </div>
            <button onClick={() => {
            setTestState(testDone + 1);
            }} style={{alignSelf: "flex-end"}}> submit </button>
        </div>
    ) : (<Chart cognitiveFunctions={cognitiveFunctions}/>)}
    
    {(testDone > 0) && (<MbtiNjobs cognitiveFunctions={cognitiveFunctions}/>)}
    
  </div>
  
  );
}

export default MbtiPages;