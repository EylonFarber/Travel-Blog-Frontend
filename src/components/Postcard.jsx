import React from "react";
import { Link } from "react-router";

export default function PostCard({ author, title, content, cover, date, id }) {
  return (
    <Link to={`/posts/${id}`}>
      <div className="card bg-base-100 image-full w-96 shadow-sm">
        <figure>
          <img src={cover} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>By {author}</p>
          <p>{content}</p>
{/* limited amount of characters */}
          <p>{date}</p>
        </div>
      </div>
    </Link>
  );
}
