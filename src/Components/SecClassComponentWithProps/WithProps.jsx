import React, { Component } from 'react';

class ClassProps extends Component {
    render() {
    const { course1, course2, children } = this.props;

        return (
        <div>
            <h2>Courses I've Studied</h2>
            <p>Course 1: {course1}</p>
            <p>Course 2: {course2}</p>
            <div>
            <h3>Additional Information: {children} </h3>
            </div>
        </div>
        );
    }
}

export default ClassProps;