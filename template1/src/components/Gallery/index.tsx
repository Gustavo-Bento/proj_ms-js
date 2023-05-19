import Fundo from '../../assets/galeria/img1.webp'
import Calhas from './Calhas/index'
import StillFrames from './StillFrames/index'
import Hidraulica from './Hidraulica/index'

function Gallery() {
    return (
        <div id="galeria" className='w3-display-container w3-center'>
            <img className="w3-image" src={Fundo} alt="mscalhas" width={2000} height="auto" />
            <Calhas />
            <StillFrames />
            <Hidraulica />
        </div>

    )
}

export default Gallery