import React from "react";
import Button from "./Button";

export default function PostInput({ titleInput, conetntInput, authorInput, coverInput, submitHandler }) {
  return (
    <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4" onSubmit={submitHandler}>
        <label className="label">Title</label>
        <input type="text" name="titleInput" className="input" placeholder={titleInput} />

        <label className="label">Content</label>
        <input type="text" name="conetntInput" className="input" placeholder={conetntInput} />

        <label className="label">Author</label>
        <input type="text" name="authorInput" className="input" placeholder={authorInput} />

        <label className="label">Cover</label>
        <input type="text" name="coverInput" className="input" placeholder={coverInput} />

        <Button btnText='Post' color='info' type='submit'/>
    </form>
  );
}
