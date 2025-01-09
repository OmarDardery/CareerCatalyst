import React, { useState } from 'react';
import MbtiPages from './components/MBTI components/mbtiPages';
import Header from './components/header';

function App() {
  let [language, setLanguage] = useState("english");

  function ChangeLanguage(){
    setLanguage(language === "english"? "arabic" : "english");
  }
  return (
    <div>
      <Header />
      <div style={{height: "14vh"}}>

      </div>
      <div style={{display: "flex", justifyContent: "flex-end", margin: "10px", fontSize: "1.5vw"}}>
        <label className="languageSelector" style={language === "english"? { margin: "20px"} : {display: "none"}}>
          <input onChange={ChangeLanguage} checked={language === "english"? false : true } type='checkbox' />
          Arabic?
        </label>
        <label className='languageSelector' style={language === "english"? {display: "none"} : { margin: "20px"}}>
          <input onChange={ChangeLanguage} type='checkbox' checked={language === "english"? true : false } />
          الانجليزية؟
        </label>
      </div>
      
      <MbtiPages language ={language} />
    </div>
  );
}

export default App;
