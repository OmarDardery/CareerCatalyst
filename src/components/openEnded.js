import React, {useState} from "react";

function OpenEnded(props){
    const [inputValue, setInput] = useState("");
    
    function handleChange(event){
        if(event.target.value.length <= 500){
            setInput(event.target.value);
            props.answerSetter(inputValue);
        }
    }

    return (
        <div style={{alignSelf: "flex-end", display: "flex", flexDirection: "column", justifyContent:"flex-end", gap: "0px"}}>
            <h4>{props.question}</h4>
            <input type="text" onChange={handleChange} value={inputValue}/>
            <h5 style={(inputValue.length === 500)? {color: "red", margin: "5px"} : {margin: "5px"}}>{inputValue.length}/500</h5>
        </div>
    );
 
}

export default OpenEnded;