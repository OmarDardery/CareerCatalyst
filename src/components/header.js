import React from "react";

function Header() {
    const myFunction = (event) => {
        const container = event.currentTarget;
        container.classList.toggle("change");
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
                right: "0",
                height: "10vh",
            }}
            className={"header"}
        >
            <div 
                className="menuContainer" 
                onClick={myFunction} 
            >
                <div className="menuBar1"></div>
                <div className="menuBar2"></div>
                <div className="menuBar3"></div>
            </div>
            <a href="/" style={{textDecoration: "none", margin:"10px"}}><h1 style={{ fontSize: "4vw" }}>TypologyDen</h1></a>
            
        </div>
    );
}

export default Header;
