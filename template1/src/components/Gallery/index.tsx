import Fundo from '../../assets/galeria/img1.webp'
import Calhas from './Calhas/index'
import StillFrames from './StillFrames/index'
import Hidraulica from './Hidraulica/index'

function Gallery() {
    return (
        <div id="galeria" className="w3-container">
            <div className="w3-light-grey w3-margin w3-wide-small">
                <h2 className="w3-center">Geleria de Projetos</h2>
            </div>
            <img className="w3-image" src={Fundo} alt="mscalhas" width={2000} height="auto" />
            
            <Calhas />
            <StillFrames />
            <Hidraulica />
        </div>

    )
}

export default Gallery