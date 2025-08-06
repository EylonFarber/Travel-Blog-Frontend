import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import axios from "axios";


export default function PostDetails() {
      const [post, setPost] = useState({});
      const {id} = useParams()

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(post);
  
  return (
    <div>Create PostDetailsPage</div>
  )
}



