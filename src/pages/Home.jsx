import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";

export default function Home() {

  const [allPosts, setAllPosts] = useState([]);
  
  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts`)
      .then((res) => setAllPosts(res.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(allPosts);

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
