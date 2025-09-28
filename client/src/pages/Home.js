import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [postsList, setPostList] = useState([]);
    let navigate = useNavigate();
   
    useEffect(() => {
        axios.get("http://localhost:3000/posts").then((response) => {
            setPostList(response.data);
        });
    }, []);
    return (
        <div>
            {postsList.map((value, key) => {
                return <div className="post" onClick={() => {navigate(`/post/${value.id}`)}} key={value.id}>
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
