import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";

function Post() {
    let { id } = useParams();
    const [postObject, setPostObject] = useState({}); 

    useEffect(() => {
        axios.get(`http://localhost:3000/posts/byId/${id}`).then((response) => {
            setPostObject(response.data);
        });
    });
    return (
        <div className = "postPage">
            <div className = "postPortion">
                <div className = "username">user {postObject.user_id} rated album {postObject.album_id}</div>
                <div className="postRating"> user gave a rating of {postObject.rating}</div>
                <div className="footer">{postObject.caption}</div>
            </div>
            <div className = "commentSection">Comments: </div>
        </div>
    )
}

export default Post
