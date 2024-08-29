import React, { Component } from 'react';
import axios from 'axios';
import './Get.css';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            isLoading: true,
            error: null,
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((response) => {
                this.setState({
                    comments: response.data,
                    isLoading: false,
                });
            })
            .catch((error) => {
                this.setState({
                    error: error.message,
                    isLoading: false,
                });
            });
    }

    render() {
        const { comments, isLoading, error } = this.state;

        if (isLoading) {
            return <p>Loading comments...</p>;
        }

        if (error) {
            return <p>Error fetching comments: {error}</p>;
        }

        return (
            <div className="comments-container">
                {comments.map((comment) => (
                    <div key={comment.id} className="comment-card">
                        <h3>{comment.name}</h3>
                        <p className='para-email'><strong>Email: </strong>{comment.email}</p>
                        <p className='para-body'>"{comment.body}"</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Comments;