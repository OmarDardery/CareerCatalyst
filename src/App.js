import React, { useState } from 'react';
import MbtiPages from './components/MBTI components/mbtiPages';
import Header from './components/header';
import Choice from './components/choice';
import Retrieve from './components/retrieveResults';
import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://mauecrdwtbwlkshsqtfg.supabase.co", `${process.env.REACT_APP_SUPABASE}`);
function App() {
  let [language, setLanguage] = useState("english");
  let [choice, setChoice] = useState(0);
  function ChangeLanguage(){
    setLanguage(prev => prev === "english"? "arabic" : "english");
  }
  return (
    <div>
      <Header ChangeLanguage={ChangeLanguage} language={language} />
      <div style={{height: "15vh"}}>

      </div>
      <Choice choice={choice} setChoice={setChoice} />
      {choice == 1? <MbtiPages language ={language} supabase={supabase} /> : <div></div>}
      {choice == 2? <Retrieve supabase={supabase} /> : <div></div>}
      {choice == 3? <div>blud thinks he finna find jobs😹</div> : <div></div>}
      <div style={{height: "15vh"}}>

      </div>
    </div>
  );
}

export default App;
