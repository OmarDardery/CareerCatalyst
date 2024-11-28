import React from 'react';
import Bingo from "./components/bingo";

let cognitiveFunctions = [
  {
    name: "te",
    questions: [
      "Rule follower",
      "Loves To-Do lists",
      "Appreciates structure and routine",
      "Sees the world in black and white",
      "Excels at planning",
      "Keeps the enviroment/workplace tidy and neat",
      "Judgemental of illogical decisions",
      "Quickly jumps to conclusions",
      "Finds satisfaction in organization",
      "Natural delegator",
      "Objective with defined goals",
      "Always prepared/has a plan b",
      "Often bossy",
      "Prone to being a workaholic",
      "Minimal procrastination",
      "Trusts authoratative sources",
      "Justice > Mercy",
      "Impatient with incompetent people",
      "Pride in honed skills",
      "Blunt",
      "Excels at leadership",
      "Likes systems dealing with variable interaction (math, physics, etc.)",
      "Overachiever",
      "Decisive",
      "Empircist"
     ],
    score: 0
  },
  {
    name: "ti",
    questions: [],
    score: 0
  },
  {
    name: "se",
    questions: [],
    score: 0
  },
  {
    name: "si",
    questions: [],
    score: 0
  },
  {
    name: "ne",
    questions: [],
    score: 0
  },
  {
    name: "ni",
    questions: [],
    score: 0
  },
  {
    name: "fe",
    questions: [],
    score: 0
  },
  {
    name: "fi",
    questions: [],
    score: 0
  }
];
function App() {
  return (
  <div className="App">
    <Bingo cognitiveFunction = {cognitiveFunctions[0]} />
  </div>
  );
}

export default App;
