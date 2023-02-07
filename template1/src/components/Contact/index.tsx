import Figura1 from '../../assets/contato/personagem.svg'

function Contact() {
    return (
        <div className=" w3-content" id="contato">
            <div className="w3-light-grey">
                <h2 className="w3-wide w3-center">Faça seu orçamento agora!</h2>
            </div>
            <div className="row">
                <div className="col-sm-4 w3-center">
                    <img src={Figura1} width="100%" />
                </div>
                <div className="col-sm-7 w3-light-grey">
                    <div className="w3-blue-grey w3-round-xlarge w3-margin w3-padding-16">
                    <h4 className='w3-center'><b>Nosso horários de atendimento:</b></h4>
                    </div>
                    <div className="w3-padding">
                        <p>De segunda-feira a quinta-feira</p>
                        <p><b>Das 07:00 as 17:00</b></p>
                        <p>Sexta-feira</p>
                        <p><b>07:00 as 16:00</b></p>
                    </div>
                    <a className="w3-button w3-round-large w3-margin w3-padding w3-green" style={{ fontSize: 18 }} href="https://api.whatsapp.com/send?phone=5511998678250&text=Ol%C3%A1,%20tudo%20bem?%20Laiane?%20Preciso%20tirar%20uma%20duvida%20sobre%20or%C3%A7amento.">
                        <i className="fa fa-whatsapp" style={{ fontSize: 24 }}></i> Realizar orçamento
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact