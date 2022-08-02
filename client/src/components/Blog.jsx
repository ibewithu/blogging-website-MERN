import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Post from './Post';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`/post/${search}`);
        setPosts(res.data)
      } catch (err) {
        console.log(err);
      }
    }
    fetchPosts();
  }, [search]);

  return (
    <div className="min-h-screen w-screen max-w-[1200px]">
      <span className="my-2 flex flex-wrap w-full items-start">
        {posts.length>0 && posts.map((x, i)=><Post post={x} key={x._id} />)}
      </span>
    </div>
  )
}

export default Blog