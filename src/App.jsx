import "./App.css";
import { Routes, Route } from "react-router";
import Landing from "./components/landing";
import WithImage from "./components/withImage";
import WithGIF from "./components/withGIF";

function App() {
  return (
    <>
      <Routes>
        <Route path="/withgif" element={<WithGIF />} />{" "}
        <Route path="/" element={<Landing />} />
        <Route path="/withImage" element={<WithImage />} />{" "}
        <Route path="/withVideo" element={<WithImage />} />{" "}
        <Route path="/withPdf" element={<WithImage />} />{" "}
      </Routes>
    </>
  );
}

export default App;
