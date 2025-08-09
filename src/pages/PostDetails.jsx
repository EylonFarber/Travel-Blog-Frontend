import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import Button from "../components/Button";

export default function PostDetails({ author, title, content, cover, date }) {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((error) => console.log(error));
  }, []);
  // console.log(post);

  function updateHandler() {
    console.log("updated pressed");
  }

  function deleteHandler() {
    axios
      .delete(`http://localhost:3000/posts/${id}`)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
      navigate("/");
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={post.cover}
          alt={post.title}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{post.title}</h1>
          <p className="py-6">{post.content}</p>
          <Button btnText="Edit" clickHandler={updateHandler} color={"info"} />
          <Button
            btnText="Delete Post"
            clickHandler={() =>
              document.getElementById("my_modal_1").showModal()
            }
            color={"error"}
          />
        </div>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Warning</h3>
          <p className="py-4">Are you sure you want to delete this post? </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Button
                btnText={"Delete Post"}
                clickHandler={deleteHandler}
                color={"error"}
              />
              <Button btnText={"Cancel"} color={"info"} />
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
