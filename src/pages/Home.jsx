import React, { useEffect, useState } from "react";
import axios from "axios";
import Postcard from "../components/Postcard";
//  This page will use axios to get all posts from your backend and display them using your PostCard component.

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
        <Postcard
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
