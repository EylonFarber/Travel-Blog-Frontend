import React from "react";
import PostInput from "../components/postInput";
import InputHeader from "../components/InputHeader";
import axios from "axios";
import ActionModal from "../components/ActionModal";
import { useAppContext } from '../context/AppContext'

export default function CreatePost() {
      const {setHomePage, setCreatePost} = useAppContext()
   setHomePage(false)
   setCreatePost(true)

  function submitHandler(event) {
    event.preventDefault();

    const titleInput = event.target.titleInput.value;
    const conetntInput = event.target.conetntInput.value;
    const authorInput = event.target.authorInput.value;
    const coverInput = event.target.coverInput.value;

    axios
      .post(`http://localhost:3000/posts`, {
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
    <div>
      <InputHeader formTitle={"New Post"} />
      <PostInput submitHandler={submitHandler} />
      <ActionModal modalText={"Your trip is posted!"} />
    </div>
  );
}
