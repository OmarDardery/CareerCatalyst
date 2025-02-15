import React, {useState, useEffect} from 'react';
import cognitiveFunctionsEnglish from '../../cognitiveFunctionsData';
import cognitiveFunctionsArabic from '../../cognitiveFunctionsDataArabic';
import Chart from './mbtichart';
import Page from './MBTIpage';
import MbtiList from "./mbtiNJobs";
import Upload from "./Upload";

function MbtiPages(props) {
    let cognitiveFunctions = (props.language === 'english')? cognitiveFunctionsEnglish : cognitiveFunctionsArabic;
    let otherLang = (props.language === 'english') ? cognitiveFunctionsArabic : cognitiveFunctionsEnglish;
    let dir = (props.language === 'english') ? "ltr" : "rtl";
    let [testDone, setTestState] = useState(0);
    let [page, setPage] = useState(1);
    useEffect(() => {
        cognitiveFunctions.map((current) => {
            current.score = 0;
        });
    }, []);
    return (
    <div className="App" style={{height: "fit-content", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%"}}>
        <div style={{height: "3vh"}}></div>
        {(testDone === 0 ) ? (
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "95%", gap: "10vw", maxWidth: "1200px"}}>
                <div>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        {cognitiveFunctions.map((cognitiveFunction, index) => {
                        return <Page explanation={(index === 0) ? true : false} dir={dir} cognitiveFunction = {cognitiveFunction} display={(page === index + 1)} otherLang= {otherLang[index]} key={index}/>;
                        })}
                    </div>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", width: "100%", marginTop: "5vw"}}>
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
            {(testDone > 0) && (<Upload cognitiveFunctions={cognitiveFunctions} supabase = {props.supabase}/>)}

    </div>
    );
}

export default MbtiPages;