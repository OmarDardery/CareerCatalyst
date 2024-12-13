import React from "react";

function Header(){
    return (
        <div>
            <div style={{width: "100%", position: "fixed", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", zIndex: "2", backgroundColor: "#33253e", top: "0", left: "0", right: "0", height: "10vh"}}>
                <h1 style={{fontSize: "4vh"}}>TypologyDen</h1>
            </div>
        </div>
        
    );
}

export default Header;