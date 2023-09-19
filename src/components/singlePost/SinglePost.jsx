import "./singlePost.css";
import SNOW from "../../assets/snowy.jpg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})

    useEffect(()=>{
        const getPost = async ()=>{
            const url = "http://localhost:5000/api/posts/"
            const res = await axios.get(url + path);
            setPost(res.data)
        };
        getPost();
    },[path])
    
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            {post.photo && (
                <img className="singlePostImg" src={post.photo}/>
            )}
            <h1 className="singlePostTitle">
                {post.title}
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>{post.username}</b></span>
                <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="singlePostDesc">
                {post.desc}
            </p>
        </div>
    </div>
  )
}
