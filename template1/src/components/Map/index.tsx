import Faixada from '../../assets/local/faixada.png'
import Local from '../../assets/local/local.png'

function Map() {
    return (
        <div className="w3-container">
            <div className="w3-light-grey w3-margin-1">
                <h2 className="w3-wide w3-center">Nos faça uma visita!</h2>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="w3-container row">
                        <div className="col-sm-6">
                            <a className="w3-button w3-btn" href="https://www.google.com/maps/dir//MS+Calhas+Hidraulica,+PQ+-+R.+Regina+Maria+de+Oliveira,+898+-+Parque+Nossa+Sra.+da+Candelaria,+Itu+-+SP,+13310-150/@-22.2037669,-54.1456241,6.04z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94cf45502f583873:0x3b43cfa3c1183410!2m2!1d-47.3086023!2d-23.2723179!3e0">
                                <img src={Local} className="w3-image" style={{ width: '120%' }} />
                            </a>
                        </div>
                        <div className="col-sm-6">
                            <div className="w3-margin">
                                <h4 className="w3-wide"><b><i className="fa fa-map-marker" style={{ fontSize: 24 }}></i> Nosso Endereço</b></h4>
                                <a className="w3-button w3-btn" href="https://www.google.com/maps/dir//MS+Calhas+Hidraulica,+PQ+-+R.+Regina+Maria+de+Oliveira,+898+-+Parque+Nossa+Sra.+da+Candelaria,+Itu+-+SP,+13310-150/@-22.2037669,-54.1456241,6.04z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94cf45502f583873:0x3b43cfa3c1183410!2m2!1d-47.3086023!2d-23.2723179!3e0">
                                    <p className="w3-justify">
                                        Regina Maria de Oliveira, 896
                                    </p>
                                    <p className="w3-justify">
                                        Nossa Senhora da Candelaria, Itu - SP
                                    </p>
                                </a>
                                <br />

                                <div className="row">
                                    <div className="col-sm-6 w3-center">
                                        <h4 className="w3-wide"><b><i className="fa fa-mobile" style={{ fontSize: 24 }}></i> Celular</b></h4>
                                        <p className='w3-justify'>
                                            <a className='w3-button w3-btn' href="tel:+5511999601512">(11)99960-1512</a>
                                        </p>
                                    </div>
                                    <div className="col-sm-6 w3-center">
                                    <h4 className="w3-wide"><b><i className="fa fa-phone" style={{ fontSize: 24 }}></i> Celular</b></h4>
                                        <p className='w3-justify'>
                                            <a className='w3-button w3-btn' href="tel:+551140223638">(11) 4022-3638</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w3-margin w3-light">
                        <h3 className='w3-center'>Siga também nossas redes sociais</h3>
                        <div className='w3-center'>
                            <span className='w3-margin'>
                                <a className="w3-button w3-btn" href="https://www.instagram.com/mscalhasitu/?igshid=MWI4MTIyMDE%3D">
                                    <i className="fa fa-instagram" style={{ fontSize: 36 }}></i>
                                </a>
                            </span>
                            <span className='w3-margin'>
                                <a className="w3-button w3-btn" href="https://www.facebook.com/profile.php?id=100017202785166">
                                    <i className="fa fa-facebook-f" style={{ fontSize: 36 }}></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <img src={Faixada} className="w3-image" style={{ width: '100%' }} />
                </div>
            </div>
        </div>
    )
}
export default Map