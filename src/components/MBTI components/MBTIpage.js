import React from 'react';
import Bingo from './mbtibingo';
import OpenEnded from '../openEnded';

function Page(props){
    return (
        <div>
            <div style={(props.display) ? {width: "100%", display: "flex", flexDirection: "column", justifyContent: "center"} : {display: "none"}}>
                <Bingo cognitiveFunction = {props.cognitiveFunction}/>
                {("image" in props.cognitiveFunction.openEnded) ? <OpenEnded image = {true} question = {props.cognitiveFunction.openEnded.question} answerSetter = {props.cognitiveFunction.openEnded.change}/> : <OpenEnded  question = {props.cognitiveFunction.openEnded.question} answerSetter = {props.cognitiveFunction.openEnded.change}/>}
                
            </div>
        </div>
        
    );
}

export default Page;