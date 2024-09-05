import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Search() {
    const [postId, setPostId] = useState('');
    const [comments, setComments] = useState([]);

    const handleSearch = (event) => {
        setPostId(event.target.value);
    };

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(response => {
                setComments(response.data);
            })
            .catch(error => {
                console.error('Error fetching comments:', error);
            });
    }, [postId]);

    return (
        <div>
            <input
                style={{ marginTop: "10%" }}
                type="text"
                placeholder="Search by Post ID"
                onChange={handleSearch}
            />
            <ol>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <h3>{comment.name}</h3>
                        <p>Email: {comment.email}</p>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Search;