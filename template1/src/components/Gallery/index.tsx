import Calhas from "./Calhas/index";
import HeaderGallery from "./HeaderGallery/index";
import Hidraulica from "./Hidraulica";
import StillFrames from "./StillFrames";

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