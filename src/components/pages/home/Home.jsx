import { useEffect, useState } from "react";
import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import SideBar from "../../sidebar/SideBar";
import "./home.css";
import axios from "axios";

export default function Home() {
  const [posts,setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const url = "http://localhost:5000/api/posts";
      console.log("before");
      const res = await axios.get(url);
      setPosts(res.data)
    }
    fetchPosts();
  },[])
  return (
    <>
        <Header/>
        <div className="home">
            <Posts posts={posts}/>
            <SideBar/>
        </div>
    </>
    
  )
}
