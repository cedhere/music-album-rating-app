import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";

function Post() {
    let { id } = useParams();
    const [postObject, setPostObject] = useState({}); 
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:3000/posts/byId/${id}`).then((response) => {
            setPostObject(response.data);
        });

        axios.get(`http://localhost:3000/comments/${id}`).then((response) => {
            setComments(response.data);
        });
    }, [id]);

    const addComment = () => {
        axios.post("http://localhost:3000/comments", {commentBody: newComment, PostId: id})
        .then((response) => {
            const commentToAdd = {commentBody: newComment};
            setComments([...comments, commentToAdd]);
            setNewComment("");
        });
    }
    return (
        <div className = "postPage">
            <div className = "postPortion">
                <div className = "username">user {postObject.user_id} rated album {postObject.album_id}</div>
                <div className="postRating"> user gave a rating of {postObject.rating}</div>
                <div className="footer">{postObject.caption}</div>
            </div>
            <div className = "commentSection">
                <div className="addComment"> 
                    <input type="text" placeholder="Comment..." autoComplete="off" value={newComment} 
                    onChange= {
                        (event) => {setNewComment(event.target.value)}
                    }/>
                    <button onClick={addComment}>Add Comment</button>
                </div>
                <div className="commentList">
                    {comments.map((comment, key) => {
                        return <div className="comment"> {comment.commentBody} </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Post;
