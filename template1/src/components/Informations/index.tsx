import Fundo from '../../assets/info/img1.webp'

function Informations(){
    return(
        <div id="informacao" className="w3-content w3-center" style={{ maxWidth: '2000px', marginTop: '46px' }} >
            <header className="w3-display-container w3-content w3-wide" style={{ maxWidth: '1500px' }} id="home">
                <img className="w3-image" src={Fundo} alt="mscalhas" width={1500} height="auto" />
            </header>
        </div>
    )
}

export default Informations