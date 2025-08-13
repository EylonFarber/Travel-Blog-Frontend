import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/updatePost";

function App() {
  return (
    <div className="relative ">
      <Navbar />
      <div className="absolute top-14 w-screen p-6 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/posts/:id"} element={<PostDetails />} />
          <Route path={"/newpost"} element={<CreatePost />} />
          <Route path={"/update/:id"} element={<UpdatePost />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
