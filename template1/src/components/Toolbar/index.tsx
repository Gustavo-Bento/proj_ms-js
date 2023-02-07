function Toolbar() {
    return (
        <header className="w3-top w3-margin-right">
            <div className="w3-bar w3-white w3-wide w3-padding w3-card">
                <a href="#home" className="w3-bar-item w3-button"><b>MS</b> Calhas & Hidraulica
                </a>
                <div className="w3-right w3-hide-small">
                    <div className="w3-bar w3-light-grey">
                        <div className="w3-dropdown-hover 3-button">
                            <button className="w3-button">Soluções</button>
                            <div className="w3-dropdown-content w3-bar-block w3-card-4">
                                <a href="#calhas" className="w3-bar-item w3-button">Calhas</a>
                                <a href="#stillframes" className="w3-bar-item w3-button">Still Frames</a>
                                <a href="#hidraulica" className="w3-bar-item w3-button">Hidraulica</a>
                            </div>
                        </div>
                        <div className="w3-dropdown-hover 3-button">
                            <button className="w3-button">Empresa</button>
                            <div className="w3-dropdown-content w3-bar-block w3-card-4">
                                <a href="#contato" className="w3-bar-item w3-button">Contato</a>
                                <a href="#endereco" className="w3-bar-item w3-button">Endereço</a>
                            </div>
                        </div>
                        <a href="#servicos" className="w3-bar-item w3-button">Serviços</a>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Toolbar