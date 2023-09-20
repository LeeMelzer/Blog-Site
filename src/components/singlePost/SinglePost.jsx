import "./singlePost.css";
import SNOW from "../../assets/snowy.jpg";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    const PF = "http://localhost:5000/images/";
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(()=>{
        const getPost = async ()=>{
            const url = "http://localhost:5000/api/posts/"
            const res = await axios.get(url + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };
        getPost();
    },[path]);

    const handleDelete = async()=>{
        const url = "http://localhost:5000/api/posts/";
        try{
            await axios.delete(url + path, {data:{username:user.username}});
            window.location.replace("/");
        }catch(err){} 
    };

    const handleUpdate = async () => {
        try{
            await axios.put(`http://localhost:5000/api/posts/${post._id}`, {username: user.username, title, desc,});
            //window.location.reload();
            setUpdateMode(false);
        }catch(err){} 
    }
    
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            {post.photo && (
                <img className="singlePostImg" src={PF + post.photo} alt=""/>
            )}{
                updateMode ? <input type="text" value={title} className="singlePostTitleInput" autoFocus onChange={(e)=>setTitle(e.target.value)}/> : (
            <h1 className="singlePostTitle">
                {title}
                {post.username === user?.username && (
                    <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square" onClick={()=>setUpdateMode(true)}></i>
                    <i className="singlePostIcon fa-regular fa-trash-can" onClick={handleDelete}></i>
                    </div>
                )}
            </h1>
            )}
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>{post.username}</b></span>
                <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            {updateMode ? (
            <textarea className="singlePostDescInput" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
            ) : (
            <p className="singlePostDesc">
                {desc}
            </p>
            )}
            {updateMode && (
            <button className="singlePostButton" onClick={handleUpdate}>Update</button>
        )}
        </div>
    </div>
  )
}
