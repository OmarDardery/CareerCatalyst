import React, { useState } from 'react';
import MbtiPages from './components/MBTI components/mbtiPages';
import Header from './components/header';
import Choice from './components/choice';
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
      {choice == 1? <MbtiPages language ={language} /> : <div></div>}
      {choice == 2? <div>no results for u nigga :3</div> : <div></div>}
      {choice == 3? <div>blud thinks he finna find jobs😹</div> : <div></div>}
      <div style={{height: "15vh"}}>

      </div>
    </div>
  );
}

export default App;
