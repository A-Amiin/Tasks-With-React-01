import React, { Component } from 'react';
import axios from 'axios';
import './Post.css';

class PostData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            body: '',
            postedData: null
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, body } = this.state;

        axios.post('https://jsonplaceholder.typicode.com/comments', {
            name,
            email,
            body
        })
            .then(response => {
                console.log('Data posted:', response.data);
                this.setState({ postedData: response.data });
            })
            .catch(error => {
                console.error('Error posting data:', error);
            });
    }

    render() {
        const { name, email, body } = this.state;

        return (
            <div className='PostingForm'>
                <h2>Post Data Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className='wrapper'>
                        <div>
                            <label>Name: </label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Email: </label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Body: </label>
                            <input
                                name="body"
                                value={body}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default PostData;