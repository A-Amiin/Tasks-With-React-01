import React from 'react';

function MyInfo(props) { 
    
    const {Name, age, skill, hobbies:[x,y,z]} = props;

    return (
        <div> 
            {/* Second Way to do this */}
            
            <h1>Hello There</h1>
            <h1>My Name is {Name}</h1>
            <p>I am {age} years old.</p>
            <p>My Currunt Skill is: {skill}.</p>
            <p>My Hobbies are: {x}, {y}, {z}</p>

            {/* Second Way to do this */}

            {/* 
            <h1>Hello There</h1>
            <h1>My Name is {props.name}</h1>
            <p>I am {props.age} years old.</p>
            <p>My Currunt Skill is: {props.skill}.</p>
            <p>My Hobbies are: {props.hobbies.join(', ')}</p> 
            */}
        </div>
    );
}

export default MyInfo;