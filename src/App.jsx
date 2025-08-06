import { Route, Routes, useParams } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";

function App() {
  const { id } = useParams();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/posts/:id`} element={<PostDetails />} />
      </Routes>
    </>
  );
}

export default App;
