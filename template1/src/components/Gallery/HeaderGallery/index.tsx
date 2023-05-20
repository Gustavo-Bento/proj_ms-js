import Fundo from "../../../assets/galeria/img1.webp";

function HeaderGallery() {
  return (
    <div id="galeria" className="w3-display-container w3-center">
      <img
        className="w3-image"
        src={Fundo}
        alt="mscalhas"
        width={2000}
        height="auto"
      />
    </div>
  );
}

export default HeaderGallery;
