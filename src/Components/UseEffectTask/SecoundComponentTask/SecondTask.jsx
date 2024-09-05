import React, { useState } from "react";

function UserComponent() {

    const [user, setUser] = useState("");

    const handleInputChange = (event) => {
        setUser(event.target.value);
    };

    return (
        <>
            <h3>Type Your name to Say Hello.. </h3>
            <h2>HELLO, {user}</h2>
            <input type="text" onChange={handleInputChange} />
        </>
    );
}

export default UserComponent;