import Fundo from '../../assets/galeria/img1.webp'

function Gallery(){
    return(
        <div id="galeria">
            <header className="w3-display-container w3-content w3-wide" style={{ maxWidth: '1500px' }} id="home">
                <img className="w3-image" src={Fundo} alt="mscalhas" width={1500} height="auto" />
            </header>
        </div>
    )
}

export default Gallery