import React, {useState} from "react";

function Header(props) {
    let [menu, menuState] = useState(false);
    const menuChange = (event) => {
        const container = event.currentTarget;
        container.classList.toggle("change");
        menuState(prev => prev? false: true);
    };
    return (
        <div
            style={{
                width: "100%",
                position: "fixed",
                display: "flex",
                zIndex: "2",
                backgroundColor: "#33253e",
                top: "0",
                left: "0",
                height: "12vh",
                padding: "0px",
            }}
            className={"header"}
        >
            <div onClick={() => {menuState(false)}} style={menu ? {height: "20000%", width: "100%", backgroundColor: "black", position: "fixed", zIndex: "3", left: "0px", margin: "0px", opacity: "0.7", cursor: "pointer"} : {display: "none"}}></div>
            <div className="menu" id = {menu? "": "closed"} style={{zIndex: "4", color: "#21252E", padding: "0px"}}>
                <div style={{fontSize: "2.5vw", paddingTop: "0.8vh", marginLeft: "8.8vh", width: "fit-content"}}>
                    <h1 style={{fontSize: "3.5vh", margin: "5px", color: "#21252E"}}>TypologyDen:</h1>
                    <h2 style={{fontSize: "2.5vh", margin: "5px"}}>Your career compass</h2>
                </div>
                <div style={{width: "100%", height: "2px", backgroundColor: "#21252E", marginTop: "1vh"}}>

                </div>
                
                <div style={{display: "flex", flexDirection: "column", padding: "0px 10px", margin: "0px"}}>
                    <h1 style={{textDecoration: "underline", fontSize: "3vh", marginBottom: "4px", color: "#21252E"}}>
                        <span style={{fontSize: "3vh", color: "violet"}}>M</span><span style={{fontSize: "3vh", color: "cyan"}}>B</span><span style={{fontSize: "3vh", color: "lime"}}>T</span><span style={{fontSize: "3vh", color: "yellow"}}>I</span>:
                    </h1>
                    <ul style={{margin: "0px", fontSize: "2vh"}}>
                        <li style={{margin: "5px", fontSize: "2.5vh"}}><a style={{fontSize: "2.5vh"}} href="https://www.tpdcoach.com/post/mbti-and-cognitive-stacks-what-does-this-all-mean" target="blank">Learn more 🔗</a></li>
                        <li style={{margin: "5px", fontSize: "2.5vh", textDecoration: "underline", cursor: "pointer"}} onClick={() => {
                            menuState(false);
                            props.setChoice(1);
                        }
                        }>Take the test ➦</li>
                    </ul>
                    <h1 style={{textDecoration: "underline", fontSize: "3vh", marginTop: "5vh", marginBottom: "4px", color: "#21252E"}}>
                        Already took the test?
                    </h1>
                    <ul style={{margin: "0px", fontSize: "2vh"}}>
                    <li style={{margin: "5px", fontSize: "2.5vh", textDecoration: "underline", cursor: "pointer"}} onClick={() => {
                            menuState(false);
                            props.setChoice(1);
                        }
                        }>Retake the test ➦</li>
                        <li style={{margin: "5px", fontSize: "2.5vh", textDecoration: "underline", cursor: "pointer"}} onClick={() => {
                            menuState(false);
                            props.setChoice(2);
                        }
                        }>Retrieve my results ➦</li>
                    </ul>
                    <h1 style={{textDecoration: "underline", fontSize: "3vh", marginTop: "5vh", marginBottom: "4px", color: "#21252E"}}>
                        Jobs:
                    </h1>
                    <ul style={{margin: "0px", fontSize: "2vh"}}>
                    <li style={{margin: "5px", fontSize: "2.5vh", textDecoration: "underline", cursor: "pointer"}} onClick={() => {
                            menuState(false);
                            props.setChoice(3);
                        }
                        }>Look at the list of jobs ➦</li>
                        <li style={{margin: "5px", fontSize: "2.5vh", textDecoration: "underline", cursor: "pointer"}} onClick={() => {
                            menuState(false);
                            props.setChoice(4);
                        }
                        }>Learn how we figure out the best jobs for you ➦</li>
                    </ul>
                </div>
                <div style={{width: "100%", height: "2px", backgroundColor: "#21252E", marginTop: "24vh"}}></div>
                <div style={{display: "flex", justifyContent: "flex-end", margin: "10px", fontSize: "1.5vh", alignSelf: "flex-end", justifySelf: "flexEnd", marginLeft: "30px"}}>
                    <h1 style={{margin: "0px", fontSize: "2vh"}}>Choose your language:</h1>
                    <label className="languageSelector" style={props.language === "english"? {fontSize: "1.8vh"} : {display: "none"}}>
                    <input onChange={props.ChangeLanguage} checked={props.language === "english"? false : true } type='checkbox' />
                    Arabic?
                    </label>
                    <label className='languageSelector' style={props.language === "english"? {display: "none"} : { fontSize: "1.8vh"}}>
                    <input onChange={props.ChangeLanguage} type='checkbox' checked={props.language === "english"? true : false } />
                    الانجليزية؟
                    </label>
                </div>
            </div>
            <div 
                className={!menu ? "menuContainer" : "menuContainer change"} 
                onClick={menuChange} 
                style={{zIndex: "4"}}
            >
                <div className="menuBar1"></div>
                <div className="menuBar2"></div>
                <div className="menuBar3"></div>
            </div>
            <h1 style={{ fontSize: "4vh", cursor: "pointer" }} onClick={() => {
                props.setChoice(0);
                props.setReset(2)
                }}>TypologyDen</h1>
            
        </div>
    );
}

export default Header;
