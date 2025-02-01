import React, {useState} from 'react';
import cognitiveFunctionsEnglish from '../../cognitiveFunctionsData';
import cognitiveFunctionsArabic from '../../cognitiveFunctionsDataArabic';
import Chart from './mbtichart';
import Page from './MBTIpage';
import MbtiList from "./mbtiNJobs";
import { createClient } from "@supabase/supabase-js";
import Upload from "./Upload";
const supabase = createClient("https://mauecrdwtbwlkshsqtfg.supabase.co", `${process.env.REACT_APP_SUPABASE}`);

function MbtiPages(props) {
    let cognitiveFunctions = (props.language === 'english')? cognitiveFunctionsEnglish : cognitiveFunctionsArabic;
    let otherLang = (props.language === 'english') ? cognitiveFunctionsArabic : cognitiveFunctionsEnglish;
    let [testDone, setTestState] = useState(0);
    let [page, setPage] = useState(1);
    return (
    <div className="App" style={{height: "fit-content", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%"}}>

        {(testDone === 0 ) ? (
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "95%", gap: "2vw",}}>
                <div>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        {cognitiveFunctions.map((cognitiveFunction, index) => {
                        return <Page cognitiveFunction = {cognitiveFunction} display={(page === index + 1)} otherLang= {otherLang[index]} key={index}/>;
                        })}
                    </div>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", width: "100%"}}>
                        <button onClick={() => {
                        if(page > 1){
                            setPage(page - 1);
                        }
                        }}><span className='button_top'>Previous</span></button>
                        <div>
                            {page}/8
                        </div>
                        <button onClick={() => {
                            if(page < 8){
                                setPage(page + 1);
                            }
                        }}><span className='button_top'>Next</span></button>
                    </div>
                    </div>
                    <button onClick={() => {
                    setTestState(testDone + 1);
                    }} style={{alignSelf: "flex-end"}}><span className='button_top'>submit</span></button>
                    </div>
                    ) : (<Chart cognitiveFunctions={cognitiveFunctions}/>)}
                    
                    {(testDone > 0) && (<MbtiList cognitiveFunctions={cognitiveFunctions}/>)}
                    {(testDone > 0) && (<Upload cognitiveFunctions={cognitiveFunctions} supabase = {supabase}/>)}

    </div>
    );
}

export default MbtiPages;