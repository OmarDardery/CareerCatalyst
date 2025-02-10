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
                height: "10vh",
                padding: "0px",
            }}
            className={"header"}
        >
            <div onClick={() => {menuState(false)}} style={menu ? {height: "20000%", width: "100%", backgroundColor: "black", position: "fixed", zIndex: "3", left: "0px", margin: "0px", opacity: "0.7", cursor: "pointer"} : {display: "none"}}></div>
            <div className="menu" id = {menu? "": "closed"} style={{zIndex: "4", color: "#21252E", padding: "0px"}}>
                <div style={{fontSize: "2.5vw", paddingTop: "0.8vh", marginLeft: "10vh", width: "fit-content"}}>
                    <h1 style={{fontSize: "3.5vh", margin: "5px", color: "#21252E"}}>TypologyDen:</h1>
                    <h2 style={{fontSize: "2.5vh", margin: "5px"}}>Your career compass</h2>
                </div>
                <div style={{width: "100%", height: "2px", backgroundColor: "#21252E"}}>

                </div>
                <div style={{display: "flex", justifyContent: "flex-end", margin: "10px", fontSize: "1.5vh", alignSelf: "flex-end", justifySelf: "flexEnd", marginLeft: "30px"}}>
                    <label className="languageSelector" style={props.language === "english"? {} : {display: "none"}}>
                    <input onChange={props.ChangeLanguage} checked={props.language === "english"? false : true } type='checkbox' />
                    Arabic?
                    </label>
                    <label className='languageSelector' style={props.language === "english"? {display: "none"} : {}}>
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
