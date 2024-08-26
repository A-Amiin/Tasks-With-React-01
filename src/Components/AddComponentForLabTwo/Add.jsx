import React, { Component } from "react";
import "./Style.css"
class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 0, // Initial quantity
        };
    }

    // Function to handle increment
    incrementQuantity = () => {
        this.setState((prevState) => ({
            quantity: prevState.quantity + 1,
        }));
    };

    // Function to handle decrement
    decrementQuantity = () => {
        this.setState((prevState) => ({
            quantity: Math.max(prevState.quantity - 1, 0), // Prevent negative quantity
        }));
    };

    render() {
        const { quantity } = this.state;

        return (
            <div className="Component">
                <button onClick={this.decrementQuantity} >
                    -
                </button>
                <span >{quantity}</span>
                <button onClick={this.incrementQuantity} >
                    +
                </button>
            </div>
        );
    }
}

export default Add;
