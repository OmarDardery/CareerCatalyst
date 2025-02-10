import React, { useState } from 'react';
import MbtiPages from './components/MBTI components/mbtiPages';
import Header from './components/header';
import Choice from './components/choice';
import Retrieve from './components/retrieveResults';
import JobsDetails from './components/jobsDetails';
import { createClient } from "@supabase/supabase-js";
import Explanation from './components/Explanation';
const supabase = createClient("https://mauecrdwtbwlkshsqtfg.supabase.co", `${process.env.REACT_APP_SUPABASE}`);

function App() {
  let [language, setLanguage] = useState("english");
  let [choice, setChoice] = useState(0);
  function ChangeLanguage(){
    setLanguage(prev => prev === "english"? "arabic" : "english");
  }
  let [reset, setReset] = useState(0);
  return (
    <div>
      <Header ChangeLanguage={ChangeLanguage} language={language} setChoice={setChoice} setReset={setReset} />
      <div style={{height: "10.7vh"}}>

      </div>
      <div style={(choice == 1) ?  {height: "clamp(1px, 5vh, 2vw)"} : {}}>

      </div>
      <Choice choice={choice} setChoice={setChoice} />
      {choice === 1? <MbtiPages language ={language} supabase={supabase} reset={reset} /> : <div></div>}
      {choice === 2? <Retrieve supabase={supabase} /> : <div></div>}
      {choice === 3? <JobsDetails language={language} /> : <div></div>}
      {(choice === 4)? <Explanation language={language}/> : <div></div>}
      <div style={{height: "8vh"}}>

      </div>
    </div>
  );
}

export default App;
