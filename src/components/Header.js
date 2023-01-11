import React from "react";

function Header({classname}) {
    return (
        <div className={"header "+classname}>
            <h1><b>&lt;/</b>kcire<b>&gt;</b></h1>
        </div>
    );
}

export default Header