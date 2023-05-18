
import Fundo from '../../assets/fundo.webp'
import Logo from '../../assets/logo.webp'

function Header() {
    return (
        <header className="w3-content w3-center" style={{ maxWidth: '2000px', marginTop: '46px' }} id="home">
            <div className='w3-display-container'>
                <img className="w3-image" src={Fundo} alt="mscalhas" width={1920} height="auto" />
                <div className="w3-display-middle w3-center">
                    <img src={Logo} alt="Logo" style={{ width: '20%' }} className="w3-round w3-opacity-min w3-center" />
                    <h1 className="w3-xxlarge w3-text-white">
                        <span className="w3-padding w3-opacity-min">
                            <b>MS</b>
                        </span>
                        <span className="w3-hide-small w3-text-light-grey">Calhas & Hidraulica</span>
                    </h1>
                </div>
            </div>


        </header>
    )
}

export default Header