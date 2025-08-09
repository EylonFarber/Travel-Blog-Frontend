import React from "react";
import PostInput from "../components/postInput";
import InputHeader from "../components/InputHeader";

export default function UpdatePost() {
  return (
    <div>
      <InputHeader formTitle={"Update Post"} />
      <PostInput />
    </div>
  );
}
