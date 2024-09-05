import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
function CommentList() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                setComments(response.data);
            })
            .catch(error => {
                console.error('Error fetching comments: ', error);
            });
    }, []);

    return (
        <div className="comment-list">
            {comments.map((comment) => (
                <div key={comment.id} className="card">
                    <h3>{comment.name}</h3>
                    <p className="email">Email: {comment.email}</p>
                    <p className="body">{comment.body}</p>
                </div>
            ))}
        </div>
    );
}

export default CommentList;