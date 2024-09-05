import { useEffect, useState } from "react";

function WindowSize() {

    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        function handleResize() {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [windowSize]);

    return (
        <div>
            <h1 style={{ justifyContent: "center", display: "flex" }} >Window Size: {windowSize.width} x {windowSize.height}</h1>
        </div>

    )
}

export default WindowSize;