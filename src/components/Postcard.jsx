import React from "react";
import { Link } from "react-router";

export default function PostCard({ author, title, content, cover, date, id }) {
  return (
    <Link to={`/posts/${id}`}>
      <div className="card image-full w-full py-3">
        <figure>
          <img src={cover} alt={title} className="w-full" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title md:text-2xl">{title}</h2>
          <p className="md:text-xl">By {author}</p>
          <p className=" md:text-xl"><span className="container">{content}</span></p>
          <p>{date}</p>
        </div>
      </div>
    </Link>
  );
}
