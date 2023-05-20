import Calhas from "./Calhas/index";
import HeaderGallery from "./HeaderGallery/index";
import Hidraulica from "./Hidraulica/index";
import StillFrames from "./StillFrames/index";

function Gallery(){
    return(
        <div>
            <HeaderGallery />
            <Calhas />
            <Hidraulica />
            <StillFrames />
        </div>
    )
}

export default Gallery