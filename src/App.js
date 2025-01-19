import React, { useState } from 'react';
import MbtiPages from './components/MBTI components/mbtiPages';
import Header from './components/header';

function App() {
  let [language, setLanguage] = useState("english");

  function ChangeLanguage(){
    setLanguage(prev => prev === "english"? "arabic" : "english");
  }
  return (
    <div>
      <Header ChangeLanguage={ChangeLanguage} language={language} />
      <div style={{height: "15vh"}}>

      </div>
      
      <MbtiPages language ={language} />
      <div style={{height: "15vh"}}>

      </div>
    </div>
  );
}

export default App;
