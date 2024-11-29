import React, {useState} from 'react';
import cognitiveFunctions from '../cognitiveFunctionsData';
import Chart from './mbtichart';
import Page from './page';
function MbtiPages() {
  let [testDone, setTestState] = useState(0);
  let [page, setPage] = useState(1);
  return (
  <div className="App" style={{height: "fit-content", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>

    {(testDone === 0 ) ? (
        <div>
            <div>
            {cognitiveFunctions.map((cognitiveFunction, index) => {
            return (page === index + 1) ? <Page cognitiveFunction = {cognitiveFunction} /> : null;
            })}
            <div style={{display: "flex"}}>
                <button onClick={() => {
                if(page > 1){
                    setPage(page - 1);
                }
                }}> Previous </button>
                <button onClick={() => {
                    if(page < 8){
                        setPage(page + 1);
                    }
                }}> Next </button>
            </div>
            
            </div>
            <button onClick={() => {
            setTestState(testDone + 1);
            }}> submit </button>
        </div>
    ) : (<Chart cognitiveFunctions={cognitiveFunctions}/>)}
  </div>
  );
}

export default MbtiPages;