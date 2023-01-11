import React from "react"

function Navbar() {
    return (
        <div className="nav-bar">
            <Navitem title="Skills"/>
            <Navitem title="Projects"/>
            <Navitem title="About"/>
            <Navitem title="Contact "/>
        </div>
    );
}

function Navitem({title}) {
    return (
        <div className="nav-item">
            <button>{title}</button>
        </div>
    );
}

export default Navbar