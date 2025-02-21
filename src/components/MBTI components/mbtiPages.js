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
                        return <Page dir={dir} cognitiveFunction = {cognitiveFunction} display={(page === index + 1)} otherLang= {otherLang[index]} key={index}/>;
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
                 {((dir === "ltr") ? (
                    <div dir={dir} style={{padding: "0px 5vw"}}>
                        <h1>How to take the test:</h1>
                        <p>Each set of questions is organized in a bingo structure, clicking on each box fills it up till it is full and then it is reset. How much each box is filled represents how much you relate to the 
                            statement inside said box. <br /><br />
                            If a box is empty, it means it is totally not relatable to you. if it is quarter filled, it means it means it is not relatable. if it is half filled, it means you are neautral. if it is three quarters filled, that means it is relatable to you. if it is fully filled, that means it is totally relatable to you.
                            <br /><br />
                            If you have never been in such situations, consider it a hypethetical or imagine yourself in a said scenario, how would you act?
                            <br />< br />
                            Please be truthful in your answers and dont try to skew the results into something you desire.
                            <br />< br />
                            Goodluck.
                        </p>
                    </div>
                ) : <div dir={dir} style={{padding: "0px 5vw"}}>
                <h1>كيفية إجراء الاختبار:</h1>
                <p>
                    يتم تنظيم كل مجموعة من الأسئلة في شكل شبكة بينجو، حيث يؤدي النقر على كل مربع إلى ملئه تدريجيًا حتى يمتلئ تمامًا، ثم يُعاد ضبطه. مقدار امتلاء كل مربع يعكس مدى ارتباطك بالعبارة الموجودة داخله.
                    <br /><br />
                    إذا كان المربع فارغًا، فهذا يعني أنه غير متعلق بك تمامًا. إذا كان ممتلئًا بنسبة الربع، فهذا يعني أنه غير متعلق بك. إذا كان ممتلئًا بنسبة النصف، فهذا يعني أنك محايد. إذا كان ممتلئًا بنسبة ثلاثة أرباع، فهذا يعني أنه متعلق بك. وإذا كان ممتلئًا بالكامل، فهذا يعني أنه يعبر عنك تمامًا.
                    <br /><br />
                    إذا لم تمر بمثل هذه المواقف من قبل، فاعتبرها افتراضية أو تخيل نفسك في السيناريو المذكور، كيف ستتصرف؟
                    <br /><br />
                    يرجى الإجابة بصدق وعدم محاولة تحريف النتائج للحصول على نتيجة ترغب بها.
                    <br /><br />
                    حظًا موفقًا.
                </p>
            </div>
            )}
            </div>
            ) : (<Chart cognitiveFunctions={cognitiveFunctions}/>)}
           
            {(testDone > 0) && (<MbtiList cognitiveFunctions={cognitiveFunctions}/>)}
            {(testDone > 0) && (<Upload cognitiveFunctions={cognitiveFunctions} supabase = {props.supabase}/>)}

    </div>
    );
}

export default MbtiPages;