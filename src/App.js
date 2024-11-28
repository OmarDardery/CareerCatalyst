import React, {useState} from 'react';
import Bingo from "./components/bingo";
import cognitiveFunctions from './cognitiveFunctionsData';
import Chart from './components/chart';
function App() {
  let [testDone, setTestState] = useState(0);
  return (
  <div className="App" style={{height: "fit-content", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
  {cognitiveFunctions.map((cognitiveFunction) => {
    return (<Bingo cognitiveFunction = {cognitiveFunction} />);
  })}
    <button onClick={() => {
      setTestState(testDone + 1);
    }}> submit </button>
    {(testDone > 0) ? (<Chart cognitiveFunctions={cognitiveFunctions}/>) : null}
  </div>
  );
}

export default App;
