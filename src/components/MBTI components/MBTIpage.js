import React from 'react';
import Bingo from './mbtibingo';
import OpenEnded from '../openEnded';

function Page(props){
    return (
        <div style={(props.display) ? {width: "100%", display: "flex", flexDirection: "column", justifyContent: "center"} : {width: "100%", display: "none"}}>
            <Bingo cognitiveFunction = {props.cognitiveFunction}/>
            <OpenEnded question = {props.cognitiveFunction.openEnded.question} answerSetter = {props.cognitiveFunction.openEnded.change}/>
        </div>
    );
}

export default Page;