import React, { useEffect, useState } from "react";
import PostInput from "../components/postInput";
import InputHeader from "../components/InputHeader";
import axios from "axios";
import { useParams } from "react-router";

export default function UpdatePost() {
  const [post, setPost] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((error) => console.log(error));
  }, []);

  function submitHandler() {
    preventDefault();
  }
  return (
    <div>
      <InputHeader formTitle={"Update Post"} />
      <PostInput
        submitHandler={submitHandler}
        titleInput={post.title}
        conetntInput={post.content}
        authorInput={post.author}
        coverInput={post.cover}
      />
    </div>
  );
}
