import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {
    const [postsList, setPostList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/posts").then((response) => {
            setPostList(response.data);
        });
    }, []);
    return (
        <div>
            {postsList.map((value, key) => {
                return <div className="post" key={value.id}>
                    <div className="user">
                        user {value.user_id} rated album {value.album_id}
                    </div>
                    <div className="rating"> user gave a rating of {value.rating}</div>
                    <div className="caption">{value.caption}</div>
                </div>
            })}
        </div>
    );
}

export default Home;
