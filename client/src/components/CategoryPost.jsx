import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from './Post';
import { useParams } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const {_id} = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`/post/?categoryId=${_id}`);
        setPosts(res.data)
      } catch (err) {
        console.log(err);
      }
    }
    fetchPosts();
  }, [_id]);

  return (
    <div className="min-h-screen w-screen max-w-[1200px]">
      <span className="my-2 flex flex-wrap w-full items-start">
        {posts.length>0 && posts.map((x, i)=><Post post={x} key={x._id} />)}
      </span>
    </div>
  )
}

export default Blog