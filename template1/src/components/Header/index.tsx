import '../../App.css'
import Fundo from '../../assets/fundo.jpg'
import Logo from '../../assets/logo.png'

function Toolbar() {
    return(
        <header className="w3-display-container w3-content w3-wide" style={{ maxWidth: '1500px' }} id="home">
            <img className="w3-image" src={Fundo} alt="mscalhas" width={1500} height="auto" />
            <div className="w3-display-middle w3-margin-top w3-center">
                <img src={Logo} alt="Logo" style={{ width: '20%' }} className="w3-round w3-opacity-min" />
                <h1 className="w3-xxlarge w3-text-white">
                    <span className="w3-padding w3-opacity-min">
                    <b>MS</b>
                    </span>
                    <span className="w3-hide-small w3-text-light-grey">Calhas & Hidraulica</span>
                </h1>
            </div>
        </header>
    )
}

export default Toolbar