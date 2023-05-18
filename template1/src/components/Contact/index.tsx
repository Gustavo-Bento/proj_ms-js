import Figura1 from '../../assets/contato/personagem.svg'
import './style.css'

function Contact() {
    return (
        <div className=" w3-container" id="contato">
            <div className="w3-light-grey w3-margin w3-wide-small">
                <h2 className="w3-center">Faça seu orçamento agora!</h2>
            </div>
            <div className="w3-row w3-container">
                <div className="w3-col m6 l6 w3-center">
                    <img className='ilustracao w3-right w3-margin' src={Figura1} width="100%" />
                </div>
                <div className="w3-col m6 l6 w3-light-grey">
                    <div className="w3-blue-grey w3-margin w3-padding">
                        <h4 className='w3-center'><b>Nosso horário de atendimento:</b></h4>
                    </div>
                    <div className="w3-row w3-margin">
                        <div className="w3-col l6 w3-padding">
                            <p>Náo perca seu tempo, mande uma mensagem agora para gente e agende um orçamento</p>
                        </div>
                        <div className="w3-col l6 w3-padding">
                            <p>De segunda-feira a sexta-feira</p>
                            <p><b>Das 07:00 as 17:00</b></p>
                        </div>
                    </div>
                    <div className="w3-center w3-padding w3-margin">
                        <a className="w3-button w3-round-large w3-green" target="_blank" style={{ fontSize: 20, textDecoration: 'none' }} href="https://api.whatsapp.com/send?phone=5511998678250&text=Ol%C3%A1,%20tudo%20bem?%20Laiane?%20Preciso%20tirar%20uma%20duvida%20sobre%20or%C3%A7amento.">
                            <i className="fa fa-whatsapp"></i> Realizar orçamento
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact