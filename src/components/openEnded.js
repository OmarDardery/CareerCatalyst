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
        <div>
            <h4>{props.question}</h4>
            <input type="text" onChange={handleChange} value={inputValue}/>
            <h5 style={(inputValue.length === 500)? {color: "red"} : null}>{inputValue.length}/500</h5>
        </div>
    );
 
}

export default OpenEnded;