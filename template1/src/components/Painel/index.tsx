import Calhas from "./MenuCalhas/index"
import Hidraulica from "./MenuHidraulica/index"
import StillFrame from "./MenuStillFrames/index"
import Header from '../../assets/painel/img1.webp'

function Painel() {
    return (
        <div className="w3-content w3-center" style={{ maxWidth: '2000px', marginTop: '46px' }} id="servicos" >
            <div id="galeria" className="w3-display-container w3-center">
                <img
                    className="w3-image"
                    src={Header}
                    alt="mscalhas"
                    width={2000}
                    height="auto"
                />
            </div>
            <div className="w3-row-padding w3-content">
                <div className="w3-light-grey w3-wide-small">
                    <h2 className="w3-center w3-container">Veja nossos principais serviços!</h2>
                </div>
                <Calhas />
                <Hidraulica />
                <StillFrame />
            </div>
        </div>
    )
}
export default Painel