import React, { useEffect, useState } from "react";
import PostInput from "../components/postInput";
import InputHeader from "../components/InputHeader";
import axios from "axios";
import { useParams } from "react-router";
import ActionModal from "../components/ActionModal";
import { useAppContext } from "../context/AppContext";

export default function UpdatePost() {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const { setHomePage, setCreatePost } = useAppContext();

  setHomePage(false);
  setCreatePost(false);
  //   const [titleInput, setTitleInput] = useState("");
  //   const [conetntInput, setConetntInput] = useState("");
  //   const [authorInput, setAuthorInput] = useState("");
  //   const [coverInput, setCoverInput] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((error) => console.log(error));

  
  }, []);

  function submitHandler(event) {
    event.preventDefault();

    let titleInput = event.target.titleInput.value;
    let conetntInput = event.target.conetntInput.value;
    let authorInput = event.target.authorInput.value;
    let coverInput = event.target.coverInput.value;

    event.target.titleInput.value == "" && (titleInput = post.title);
    event.target.conetntInput.value == "" && (conetntInput = post.content);
    event.target.authorInput.value == "" && (authorInput = post.author);
    event.target.coverInput.value == "" && (coverInput = post.cover);

    // console.log(titleInput);
    // console.log(conetntInput);
    // console.log(authorInput);
    // console.log(coverInput);

    axios
      .put(`http://localhost:3000/posts/${id}`, {
        author: authorInput,
        title: titleInput,
        content: conetntInput,
        cover: coverInput,
      })
      .then((res) => (res))
      .catch((error) => console.log(error));

    document.getElementById("my_modal_1").showModal();
  }
  return (
    <div className="flex-col items-center">
      <InputHeader formTitle={"Update Post"} />
      <PostInput
        submitHandler={submitHandler}
        titleInput={post.title}
        conetntInput={post.content}
        authorInput={post.author}
        coverInput={post.cover}
      />
      <ActionModal modalText={"your trip is updated!"} />
    </div>
  );
}
