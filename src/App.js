import React from 'react';
import Bingo from "./components/bingo";
import cognitiveFunctions from './cognitiveFunctionsData';

function App() {
  return (
  <div className="App" style={{height: "fit-content"}}>
  {cognitiveFunctions.map((cognitiveFunction) => {
    return (<Bingo cognitiveFunction = {cognitiveFunction} />);
  })}
    <button onClick={()=>{
      cognitiveFunctions.map((cognitiveFunction) => {
        console.log(cognitiveFunction.score);
      })
    }}> hehe </button>
  </div>
  );
}

export default App;
