import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";
import { useAppContext } from '../context/AppContext'

export default function Home() {
const {setHomePage, setCreatePost} = useAppContext()
  const [allPosts, setAllPosts] = useState([]);

setHomePage(true)
 setCreatePost(false)

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts`)
      .then((res) => setAllPosts(res.data))
      .catch((error) => console.log(error));
  }, []);
   
  return (
    <div>
      {allPosts.map((post) => (
        <PostCard
          id={post.id}
          key={post.id}
          author={post.author}
          title={post.title}
          content={post.content}
          cover={post.cover}
          date={post.date}
        />
      ))}
    </div>
  );
}
