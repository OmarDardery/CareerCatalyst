import React from 'react';
import Bingo from './mbtibingo';
import OpenEnded from '../openEnded';

function Page(props){
    return (
        <div>
            <div style={(props.display) ? {width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", gap: "3vh"} : {display: "none"}}>
                {props.explanation ? ((props.dir === "ltr") ? (
                    <div dir={props.dir} style={{padding: "0px 5vw"}}>
                        <h1>How to take the test:</h1>
                        <p>Each set of questions is organized in a bingo structure, clicking on each box fills it up till it is full and then it is reset. How much each box is filled represents how much you relate to the 
                            statement inside said box. <br /><br />
                            If a box is empty, it means it is totally not relatable to you. if it is quarter filled, it means it means it is not relatable. if it is half filled, it means you are neautral. if it is three quarters filled, that means it is relatable to you. if it is fully filled, that means it is totally relatable to you.
                            <br /><br />
                            If you have never been in such situations, consider it a hypethetical or imagine yourself in a said scenario, how would you act?
                            <br />< br />
                            Please be truthful in your answers and dont try to skew the results into something you desire.
                            <br />< br />
                            Goodluck.
                        </p>
                    </div>
                ) : <div dir={props.dir} style={{padding: "0px 5vw"}}>
                <h1>كيفية إجراء الاختبار:</h1>
                <p>
                    يتم تنظيم كل مجموعة من الأسئلة في شكل شبكة بينجو، حيث يؤدي النقر على كل مربع إلى ملئه تدريجيًا حتى يمتلئ تمامًا، ثم يُعاد ضبطه. مقدار امتلاء كل مربع يعكس مدى ارتباطك بالعبارة الموجودة داخله.
                    <br /><br />
                    إذا كان المربع فارغًا، فهذا يعني أنه غير متعلق بك تمامًا. إذا كان ممتلئًا بنسبة الربع، فهذا يعني أنه غير متعلق بك. إذا كان ممتلئًا بنسبة النصف، فهذا يعني أنك محايد. إذا كان ممتلئًا بنسبة ثلاثة أرباع، فهذا يعني أنه متعلق بك. وإذا كان ممتلئًا بالكامل، فهذا يعني أنه يعبر عنك تمامًا.
                    <br /><br />
                    إذا لم تمر بمثل هذه المواقف من قبل، فاعتبرها افتراضية أو تخيل نفسك في السيناريو المذكور، كيف ستتصرف؟
                    <br /><br />
                    يرجى الإجابة بصدق وعدم محاولة تحريف النتائج للحصول على نتيجة ترغب بها.
                    <br /><br />
                    حظًا موفقًا.
                </p>
            </div>
            ) : <div></div>
                }
                <Bingo dir={props.dir} cognitiveFunction = {props.cognitiveFunction} otherLang = {props.otherLang}/>
                {("image" in props.cognitiveFunction.openEnded) ? <OpenEnded dir={props.dir} image = {true} question = {props.cognitiveFunction.openEnded.question} answerSetter = {props.cognitiveFunction.openEnded.change} otherLang={props.otherLang.openEnded.change}/> : <OpenEnded dir={props.dir}  question = {props.cognitiveFunction.openEnded.question} answerSetter = {props.cognitiveFunction.openEnded.change} otherLang={props.otherLang.openEnded.change}/>}
                
            </div>
        </div>
        
    );
}

export default Page;