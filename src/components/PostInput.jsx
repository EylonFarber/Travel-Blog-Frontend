import React from "react";
import Button from "./Button";

export default function PostInput({ titleInput, conetntInput, authorInput, coverInput, submitHandler }) {
  return (
    <form className="fieldset w-screen p-4 flex flex-col items-center" onSubmit={submitHandler}>
        <label className="label md:text-xl">Title</label>
        <input type="text" name="titleInput" className="input w-[80%]" placeholder={titleInput} />

        <label className="label md:text-xl">Content</label>
        <input type="text" name="conetntInput" className="input w-[80%]" placeholder={conetntInput} />

        <label className="label md:text-xl">Author</label>
        <input type="text" name="authorInput" className="input w-[80%]" placeholder={authorInput} />

        <label className="label md:text-xl">Cover</label>
        <input type="text" name="coverInput" className="input w-[80%]" placeholder={coverInput} />
<div className="mt-4">
        <Button btnText='Publish' color='info' type='submit'/>
</div>
    </form>
  );
}
