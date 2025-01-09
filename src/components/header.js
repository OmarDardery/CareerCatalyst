import React, {useState} from "react";

function Header(props) {
    let [menu, menuState] = useState(false);
    const menuChange = (event) => {
        const container = event.currentTarget;
        container.classList.toggle("change");
        menuState(prev => prev? false: true);
    };
    
    /*function closeMenu(){
        menuState(false);
    }
    function openMenu(){
        menuState(true);
    }*/
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
                right: "0",
                height: "10vh",
            }}
            className={"header"}
        >
            <div className="menu" id = {menu? "": "closed"}>
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
                className="menuContainer" 
                onClick={menuChange} 
            >
                <div className="menuBar1"></div>
                <div className="menuBar2"></div>
                <div className="menuBar3"></div>
            </div>
            <a href="/" style={{textDecoration: "none", margin:"10px"}}><h1 style={{ fontSize: "4vh" }}>TypologyDen</h1></a>
            
        </div>
    );
}

export default Header;
