import React from "react";
import PostInput from "../components/postInput";
import InputHeader from "../components/InputHeader";
import axios from "axios";
import { useNavigate } from "react-router";
import Button from "../components/Button";

export default function CreatePost() {
  const navigate = useNavigate();

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
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));

    document.getElementById("my_modal_1").showModal();
  }
  function modalHandler() {
    navigate("/");
  }

  return (
    <div>
      <InputHeader formTitle={"New Post"} />
      <PostInput submitHandler={submitHandler} />

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Success</h3>
          <p className="py-4">Your trip is posted!</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Button
                btnText={"Ok"}
                clickHandler={modalHandler}
                color={"info"}
              />
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
