function Toolbar() {
    return(
        <header className="w3-top">
            <div className="w3-bar w3-white w3-wide w3-padding w3-card">
                <a href="#home" className="w3-bar-item w3-button"><b>MS</b> Calhas & Hidraulica
                </a>
                <div className="w3-right w3-hide-small">
                    <a href="#projects" className="w3-bar-item w3-button">Projetos</a>
                    <a href="#about" className="w3-bar-item w3-button">Sobre</a>
                    <a href="#contact" className="w3-bar-item w3-button">Contato</a>
                </div>
            </div>
        </header>
    )
}

export default Toolbar