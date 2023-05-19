import Fundo from "../../assets/galeria/img1.webp";
import Calhas from "./Calhas/index";
import StillFrames from "./StillFrames/index";
import Hidraulica from "./Hidraulica/index";
import { Routes, Route } from "react-router-dom";
import Contact from "../Contact";
import Map from "../Map";

function Gallery() {
  return (
    <div id="galeria" className="w3-display-container w3-center">
      <Routes>
        <Route path="galeria" element={<Gallery />} />
      </Routes>
      <img
        className="w3-image"
        src={Fundo}
        alt="mscalhas"
        width={2000}
        height="auto"
      />
      <Calhas />
      <StillFrames />
      <Hidraulica />
    </div>
  );
}

export default Gallery;
