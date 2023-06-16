import Calhas from "./Calhas/index";
import HeaderGallery from "./HeaderGallery/index";
import Hidraulica from "./Hidraulica/index";
import SteelFrames from "./Steelframe/index";

function Gallery(){
    return(
        <div>
            <HeaderGallery />
            <Calhas />
            <Hidraulica />
            <SteelFrames />
        </div>
    )
}

export default Gallery