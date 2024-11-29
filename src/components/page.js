import React from 'react';
import Bingo from './mbtibingo';
import OpenEnded from './openEnded';

function Page(props){
    return (
        <div style={{width: "100%"}}>
            <Bingo cognitiveFunction = {props.cognitiveFunction}/>
            <OpenEnded question = {props.cognitiveFunction.openEnded.question} answerSetter = {props.cognitiveFunction.openEnded.change}/>
        </div>
    );
}

export default Page;