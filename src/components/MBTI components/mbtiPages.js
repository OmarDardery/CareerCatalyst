import React, {useState, useEffect} from 'react';
import cognitiveFunctionsEnglish from '../../cognitiveFunctionsData';
import cognitiveFunctionsArabic from '../../cognitiveFunctionsDataArabic';
import Chart from './mbtichart';
import Page from './MBTIpage';
import MbtiList from "./mbtiNJobs";
import Upload from "./Upload";
import gif from "../../silly.gif";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINIAPI);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });




function MbtiPages(props) {
    let [correct, setCorrect] = useState(true);
    let cognitiveFunctions = (props.language === 'english')? cognitiveFunctionsEnglish : cognitiveFunctionsArabic;
    let otherLang = (props.language === 'english') ? cognitiveFunctionsArabic : cognitiveFunctionsEnglish;
    let dir = (props.language === 'english') ? "ltr" : "rtl";
    let [testDone, setTestState] = useState(0);
    let [page, setPage] = useState(1);
    let [LIAR, setLIAR] = useState(false);
    let [loading, setLoading] = useState(false);
    useEffect(() => {
        cognitiveFunctions.forEach((current) => {
            current.score = 0;
        });
    }, []);
    async function confirmAnswers() {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 0));
        try {
            const prompt = `
Congratulations! You are now a certified psychologist specializing in MBTI and cognitive functions (Ti, Te, Ne, Ni, Fe, Fi, Se, Si). Your expertise lies in evaluating whether a test taker has skewed their multiple-choice answers based on their open-ended responses. Your role is to analyze the provided cognitive function scores and written responses to determine authenticity and recalibrate scores accordingly.

### Core Instructions:
- **ONLY** adjust scores if they contradict the open-ended responses.
- **DO NOT** suggest retaking the test if responses are internally consistent.
- **DO NOT** fabricate or hallucinate information.
- Scores range from **0 to 64**.
- If open-ended responses are empty and scores are **already zero, do not alter them**.
- Maintain strict **objectivity**—do not favor any personality type.
- If deception is evident, recalibrate the scores accordingly, but do not be overly sensitive.
- For **Se open-ended answers**, assess whether the user describes direct sensory details (colors, shapes, movements). If they mention abstract concepts or emotions instead, their Se score should be low.

### Cognitive Function Explanations:

- **Introverted Sensing (Si):** Si users rely on structured memory recall, past experiences, and sensory consistency. High Si users remember past events vividly and value routine, while low Si users struggle with structured memory recall.

- **Extraverted Sensing (Se):** Se users engage with their immediate environment, reacting to real-time sensory details. High Se users are observant and quick to respond, while low Se users may overlook sensory input or struggle with real-world awareness.

- **Introverted Intuition (Ni):** Ni users form deep, abstract insights and predict future outcomes through pattern recognition. High Ni users are visionary, while low Ni users struggle with abstract thinking or long-term foresight.

- **Extraverted Intuition (Ne):** Ne users rapidly connect ideas, brainstorm possibilities, and generate multiple interpretations. High Ne users thrive on creativity, while low Ne users may struggle with flexible thinking.

- **Introverted Thinking (Ti):** Ti users analyze systems logically, seeking internal consistency and precision. High Ti users are independent thinkers, while low Ti users struggle with internal logical consistency.

- **Extraverted Thinking (Te):** Te users rely on external logic, efficiency, and structure to make decisions. High Te users are systematic problem-solvers, while low Te users struggle with organization and decision-making.

- **Introverted Feeling (Fi):** Fi users have deep personal values and make decisions based on authenticity. High Fi users are introspective and value-driven, while low Fi users may struggle with self-awareness.

- **Extraverted Feeling (Fe):** Fe users focus on social harmony, emotional intelligence, and group dynamics. High Fe users are socially attuned and empathetic, while low Fe users may struggle with emotional expression.

### Data Provided:
Each cognitive function has a numerical score (0-64) and an open-ended response:

${cognitiveFunctions.map((func) => 
    `${func.name.toUpperCase()}:\nScore: ${func.score}/64\nOpen-ended Question: ${func.openEnded.question}\nAnswer: ${func.openEnded.answer}`
).join("\n\n")}

### Task Overview:
1. **Detect Manipulation:** Identify inconsistencies between multiple-choice answers and open-ended responses.
2. **Recalibrate Scores:** Adjust function scores to reflect the subject’s true cognitive profile.
3. **Return Structured JSON Output:** Provide only a JSON object with the final assessment and recalibrated scores.

### Guidelines for Analysis:

#### 1. Cognitive Function Evaluation:
- Analyze cognitive function strengths based on the provided responses.
- Assign a recalibrated score (0-64) to each function (Ni, Ne, Si, Se, Ti, Te, Fi, Fe).

#### 2. Manipulation & Consistency Check:
- If responses contain contradictions (e.g., an inflated Ni score with Se-like behavior in open-ended answers) or if the answers are much off from the score, flag \`"assessment": false\`.
- If responses are internally consistent, mark \`"assessment": true\`.

#### 3. Strict JSON Output:
- Return **ONLY** a JSON object. No explanations or additional text.
- JSON format must follow this structure:

\`\`\`json
{
  "assessment": true/false,
  "ni": (integer score),
  "ne": (integer score),
  "si": (integer score),
  "se": (integer score),
  "ti": (integer score),
  "te": (integer score),
  "fi": (integer score),
  "fe": (integer score)
}
\`\`\`

### Important Rules:
- **No extra text:** Response must be **pure JSON**.
- **Objective Analysis:** Do not favor any personality type. Adjust scores only when clear inconsistencies exist.
- **Avoid Extreme Scores:** Scores should be balanced unless strong evidence supports an extreme preference.

Now, analyze the responses and return the JSON object.
`;
;


    
            const result = await model.generateContent(prompt);
            const responseText = await result.response.text(); // Get raw text response
            const jsonStart = responseText.indexOf("{"); // Find start of JSON
            const jsonEnd = responseText.lastIndexOf("}"); // Find end of JSON
            const jsonString = responseText.substring(jsonStart, jsonEnd + 1); // Extract JSON part

            const parsedResponse = JSON.parse(jsonString); // Convert string to JSON
            
            setLIAR(!parsedResponse.assessment); // Set LIAR state based on AI assessment
    
            // Update cognitive functions with AI-calibrated scores
            cognitiveFunctions.forEach((func, index) => {
                const key = func.name.toLowerCase(); // Ensure keys match JSON (e.g., "ni")
                if (parsedResponse[key] !== undefined) {
                    func.score = parsedResponse[key]; // Update function score
                }
            });
    
            setTestState(1); // Move to results display
            setLoading(false);
    
        } catch (error) {
            console.error("Error generating content:", error);
        }finally {
        setLoading(false);
        console.log(loading);

        }
    }
    useEffect(() => {
        if (loading) {
            confirmAnswers();
        }
    }, [loading]);
    
    
    return (
    <div className="App" style={{height: "fit-content", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%"}}>
        <div style={{height: "3vh"}}></div>
        {loading ? <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw", backgroundColor: "black", opacity: "0.6", position: "fixed", top: "0", left: "0", zIndex: "10"}}>
            <img 
    src={gif}  
    alt="Loading..."
    style={{ heught: "20vh", width: "auto" }}
/>

            <h1>Loading :3</h1>
            </div> : <div></div>}
        {LIAR && (
            <div style={{ color: "red", fontWeight: "bold", padding: "10px", border: "2px solid red", textAlign: "center", margin: "5px" }}>
                Your answers appear inconsistent. Please retake the test.
            </div>
        )}

        {(testDone === 0 ) ? (
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "95%", gap: "10vw", maxWidth: "1200px"}}>
                <div>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        {cognitiveFunctions.map((cognitiveFunction, index) => {
                        return <Page dir={dir} cognitiveFunction = {cognitiveFunction} display={(page === index + 1)} otherLang= {otherLang[index]} key={index}/>;
                        })}
                    </div>
                    {page === 8 ? <div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "10px", backgroundColor: "#333", padding: "10px", borderRadius: "10px", width: "fit-content"}}>
                        <label for = "correct">
                            Correct open ended questions?
                        </label>
                        <select style={{color: "black"}} name='correct' onChange={(e) => {
                            setCorrect(e.target.value === "yes");
                        }}>
                            <option style={{color: "black"}} value="yes">yes</option>
                            <option style={{color: "black"}} value="no">no</option>
                        </select>
                        </div>
                    </div> : <div></div>}
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", width: "100%", marginTop: "5vw"}}>
                        <button onClick={() => {
                        if(page > 1){
                            setPage(page - 1);
                        }
                        }}><span className='button_top'>Previous</span></button>
                        <div>
                            {page}/8
                        </div>
                        <button onClick={() => {
                            if(page < 8){
                                setPage(page + 1);
                            }
                        }}><span className='button_top'>Next</span></button>
                    </div>
                </div>
                <button onClick={() => {
                    if(correct){
                         setLoading(true);
                    }else{
                        setTestState(1);
                    }
                }} style={{alignSelf: "flex-end"}}><span className='button_top'>submit</span></button>
                 {((dir === "ltr") ? (
                    <div dir={dir} style={{padding: "0px 5vw"}}>
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
                ) : <div dir={dir} style={{padding: "0px 5vw"}}>
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
            )}
            </div>
            ) : (<Chart cognitiveFunctions={cognitiveFunctions}/>)}
           
            {(testDone > 0) && (<MbtiList cognitiveFunctions={cognitiveFunctions}/>)}
            {(testDone > 0) && (<Upload cognitiveFunctions={cognitiveFunctions} supabase = {props.supabase}/>)}

    </div>
    );
}

export default MbtiPages;