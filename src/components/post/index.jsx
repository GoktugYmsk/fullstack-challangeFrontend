import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.scss'

function Post() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/posts')
            .then((response) => {
                setPostList(response.data);
                setIsLoaded(true);
            })
            .catch((error) => {
                setError(error);
                console.log('error', error)
                setIsLoaded(true);
            });
    }, []);

    if (error) {
        return <div>Hata: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Yükleniyor...</div>;
    } else {
        return (
            <div>
                {postList.map((post) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.id}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Post;
