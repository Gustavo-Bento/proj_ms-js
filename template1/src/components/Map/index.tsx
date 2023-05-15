import Faixada from '../../assets/local/faixada.webp'
import Local from '../../assets/local/local.webp'

function Map() {
    return (
        <div className="w3-container" id="endereco" >
            <div className="w3-light-grey w3-margin w3-wide-small">
                <h2 className="w3-center">Nos faça uma visita!</h2>
            </div>
            <div className="w3-row w3-light-grey w3-margin w3-wide-small">
                <div className="w3-col m3 l4">
                    <a target="_blank" href="https://www.google.com/maps/dir//MS+Calhas+Hidraulica,+PQ+-+R.+Regina+Maria+de+Oliveira,+898+-+Parque+Nossa+Sra.+da+Candelaria,+Itu+-+SP,+13310-150/@-22.2037669,-54.1456241,6.04z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94cf45502f583873:0x3b43cfa3c1183410!2m2!1d-47.3086023!2d-23.2723179!3e0">
                        <img src={Local} className="w3-image w3-display-container" style={{ width: '100%' }} />
                    </a>
                </div>
                <div className="w3-col m6 l4">
                    <div className="w3-margin">
                        <h4 className="w3-wide w3-center"><b><i className="fa fa-map-marker" style={{ fontSize: 24 }}></i> Nosso Endereço</b></h4>
                        <a className="w3-justify w3-button w3-block w3-inline-grey w3-center" target="_blank" href="https://www.google.com/maps/dir//MS+Calhas+Hidraulica,+PQ+-+R.+Regina+Maria+de+Oliveira,+898+-+Parque+Nossa+Sra.+da+Candelaria,+Itu+-+SP,+13310-150/@-22.2037669,-54.1456241,6.04z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94cf45502f583873:0x3b43cfa3c1183410!2m2!1d-47.3086023!2d-23.2723179!3e0">
                            <p className="w3-content">
                            Regina Maria de Oliveira, 896
                            </p>
                            <p className="w3-content">
                            Nossa Senhora da Candelaria,
                            </p>
                            <p className="w3-content">Itu - SP</p>
                        </a>

                        <div className="w3-row">
                            <div className="w3-col l6 w3-center">
                                <h4 className="w3-wide"><b><i className="fa fa-mobile" style={{ fontSize: 24 }}></i> Celular</b></h4>
                                <a className='w3-block w3-justify w3-button w3-light-grey w3-center' href="tel:+5511999601512">(11)99960-1512</a>
                            </div>
                            <div className="w3-col l6 w3-center">
                                <h4 className="w3-wide"><b><i className="fa fa-phone" style={{ fontSize: 24 }}></i> Celular</b></h4>
                                <a className='w3-block w3-justify w3-button w3-light-grey w3-center' href="tel:+551140223638">(11) 4022-3638</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w3-col m3 l4">
                    <a target="_blank" href="https://www.google.com/maps/@-23.2721996,-47.3084264,3a,75y,228.05h,78.23t/data=!3m6!1e1!3m4!1sS6al5qX0aNdmfWTcGussIA!2e0!7i16384!8i8192">
                    <img src={Faixada} className="w3-image  w3-display-container" style={{ width: '100%' }} />
                    </a>
                    
                </div>
            </div>
        </div>
    )
}
export default Map