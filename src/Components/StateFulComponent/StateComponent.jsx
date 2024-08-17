import React, { Component } from 'react';

class SubscriptionComponent extends Component {
    constructor(props) {
    super();
    this.state = {
        isLoggedIn: false,
        subscription: 'Guest',
    };
    }

    Check = () => {
    this.setState({
        isLoggedIn: true,
        subscription: 'Now, You have a subscription',
    });
    };

    render() {
    return (
        <div>
        <p>{`Logged In: ${this.state.isLoggedIn}`}</p>
        <p>{`Subscription: ${this.state.subscription}`}</p>
        <button onClick={this.Check}>Subscribe</button>
        </div>
    );
    }
}

export default SubscriptionComponent;