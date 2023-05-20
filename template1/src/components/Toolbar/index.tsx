import {Link} from "react-router-dom"

function Toolbar() {
    return (
        <header className="w3-top">
            <div className="w3-bar w3-white w3-wide w3-padding w3-card">
                <Link to={'/'} className="w3-bar-item w3-button"><b>MS</b> Calhas & Hidraulica
                </Link>
                <div className="w3-right w3-hide-small">
                    <div className="w3-bar w3-light-grey">
                        <div className="w3-dropdown-hover 3-button">
                                <Link to={'galeria'}  className="w3-button">Galeria</Link>
                            <div className="w3-dropdown-content w3-bar-block w3-card-4">
                                <Link to={'calhas'} className="w3-bar-item w3-button">Calhas e Rufos</Link>
                                <Link to={'stillframes'} className="w3-bar-item w3-button">Still Frames</Link>
                                <Link to={'hidraulica'} className="w3-bar-item w3-button">Hidraulica</Link>
                            </div>
                        </div>
                        <div className="w3-dropdown-hover 3-button">
                            <Link to={'informacoes'} className="w3-button">Empresa</Link>
                            <div className="w3-dropdown-content w3-bar-block w3-card-4">
                                <Link to={'contato'}  className="w3-bar-item w3-button">Contato</Link>
                                <Link to={'endereco'} className="w3-bar-item w3-button">Endereço</Link>
                            </div>
                        </div>
                        <Link to={'servicos'} className="w3-bar-item w3-button">Serviços</Link>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Toolbar