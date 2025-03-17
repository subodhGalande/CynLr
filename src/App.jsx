import "./App.css";
import { Routes, Route } from "react-router";
import Landing from "./components/landing";
import WithImage from "./components/withImage";
import WithGIF from "./components/withGIF";
import WithPDF from "./components/withPdf";
import WithVideo from "./components/withVideo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/withgif" element={<WithGIF />} />{" "}
        <Route path="/withPdf" element={<WithPDF />} />{" "}
        <Route path="/withImage" element={<WithImage />} />{" "}
        <Route path="/withVideo" element={<WithVideo />} />{" "}
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
