import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import axios from "axios";
import Button from "../components/Button";
import { useAppContext } from "../context/AppContext";

export default function PostDetails() {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const { setHomePage, setCreatePost } = useAppContext();

  setHomePage(false);
  setCreatePost(false);

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
      .then((res) => (res))
      .catch((error) => console.log(error));
    navigate("/");
  }

  return (
    <div className="hero">
      <div className="flex-col items-center w-full lg:flex lg:flex-row justify-center lg:pt-12">
        <img
          src={post.cover}
          alt={post.title}
          className="w-full px-6 rounded-lg shadow-2xl lg:w-[30%]"
        />
        <div className="md:px-12 pt-6 lg:w-[50%]">
          <h1 className="text-2xl md:text-5xl font-bold">{post.title}</h1>
          <p className="py-6 md:text-2xl">{post.content}</p>
          <Link to={`/update/${id}`}>
            <Button
              btnText="Edit"
              clickHandler={updateHandler}
              color={"info"}
            />
          </Link>
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
