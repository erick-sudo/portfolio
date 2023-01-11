import React from "react"

function Profile({avatar}) {
    return (
        <div className="profile">
            <img className=".avatar" alt="profile" src={avatar} />
        </div>
    );
}

export default Profile