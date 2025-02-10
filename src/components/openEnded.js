import React, {useState} from "react";
import myImage from './sePic.webp';
function OpenEnded(props){
    const [inputValue, setInput] = useState("");
    
    function handleChange(event){
        if(event.target.value.length <= 500){
            setInput(event.target.value);
            props.answerSetter(inputValue);
            props.otherLang(inputValue);
        }
    }

    return (
        <div style={{alignSelf: "flex-end", display: "flex", flexDirection: "column", justifyContent:"flex-end", gap: "0px", width: "30vw", margin: "10px"}}>
            <div>{props.image && <img src={myImage} alt="prop example" style={{width: "30vw"}}/>}</div>
            <h4 dir={props.dir}>{props.question}</h4>
            <input type="text" onChange={handleChange} value={inputValue}/>
            <h5 style={(inputValue.length === 500)? {color: "red", margin: "5px"} : {margin: "5px"}}>{inputValue.length}/500</h5>
        </div>
    );
 
}

export default OpenEnded;