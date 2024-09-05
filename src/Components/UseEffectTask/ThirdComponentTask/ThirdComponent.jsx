import React, { useState, useEffect } from 'react';

function ThirdComponent() {
    const [count, setCount] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const [interval, setIntervalId] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((count) => count + 1);
        }, 1000);

        setIntervalId(interval);
        // console.log("setInterval"); Just To Check
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1> Counter: {count} </h1>
        </div>
    );
}

export default ThirdComponent;