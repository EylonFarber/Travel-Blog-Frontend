import React from 'react'
import { Link } from 'react-router'
import { useAppContext } from '../context/AppContext'

export default function Navbar() {
  const {homePage, createPost} = useAppContext()

  return (
<div className="navbar bg-base-100 shadow-sm fixed top-0 right-0 left-0 z-10">
  <div className="flex gap-6">

    {!homePage && <Link to={'/'}> <button>home</button></Link>}
   {!createPost && <Link to ={'/newpost'}><button>new post</button></Link>
}
  </div>
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Travel Blog</a>
  </div>
  <div className="flex-none">

  </div>
</div>  )
}
