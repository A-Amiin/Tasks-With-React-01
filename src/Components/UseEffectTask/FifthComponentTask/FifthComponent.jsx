import { useState, useEffect } from "react";

function WhatchChange() {
    const [Postion, setPostion] = useState(0, 0);
    const [Click, setClick] = useState(false);

    useEffect(() => {

        window.addEventListener('mousemove', (e) => {
            setPostion({ x: e.clientX, y: e.clientY });
        });

        window.addEventListener('click', () => {
            setClick(true);
        });

        return () => {
            window.removeEventListener('mousemove', null);
            window.removeEventListener('click', null);
        };
    }, []);

    return (
        <div>
            <h1>Mouse Position: {Postion?.x} , {Postion?.y}</h1>
            <button>Mouse Click: {Click ? 'Clicked' : 'Not Clicked'}</button>
        </div>
    );

}
export default WhatchChange;