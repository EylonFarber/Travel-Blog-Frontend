import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/Postcard";
import { useAppContext } from "../context/AppContext";
import Hero from "../components/Hero";

export default function Home() {
  const { setHomePage, setCreatePost } = useAppContext();
  const [allPosts, setAllPosts] = useState([]);

  setHomePage(true);
  setCreatePost(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts`)
      .then((res) => setAllPosts(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Hero/>
      <div
        className="grid-cols-1 gap-6 md:grid md:grid-cols-2 lg:grid-cols-3"
      >
        {allPosts.map((post) => {
          const dateOnly = post.date.split("T")[0];
          return (
            <PostCard
              id={post.id}
              key={post.id}
              author={post.author}
              title={post.title}
              content={post.content}
              cover={post.cover}
              date={dateOnly}
            />
            
          );
        })}
      </div>
    </>
  );
}
