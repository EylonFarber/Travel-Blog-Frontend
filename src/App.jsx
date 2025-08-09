import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/updatePost";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={'/posts/:id'} element={<PostDetails />} />
        <Route path={'/newpost'} element={<CreatePost />} />
        <Route path={'/updade/:id'} element={<UpdatePost />} />
      </Routes>
    </>
  );
}

export default App;
