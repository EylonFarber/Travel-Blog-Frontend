import React from "react";
import PostInput from "../components/postInput";
import InputHeader from "../components/InputHeader";

export default function CreatePost() {
  return (
    <div>
      <InputHeader formTitle={"New Post"} />
      <PostInput />
    </div>
  );
}
