import React, { useState } from 'react';

function FirstComponent() {
    const [Counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(Counter + 1);
    };

    return (
        <div>
            <h3>Counter: {Counter}</h3>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
}

export default FirstComponent;