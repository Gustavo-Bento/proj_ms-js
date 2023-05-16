import Button from '../Button/index'
import Img1 from '../../../assets/calhas/img1.webp'
import Img2 from '../../../assets/calhas/img2.webp'
import Img3 from '../../../assets/calhas/img3.webp'

function Template1() {
  return (
    <div className="w3-col l4 m6 w3-margin-bottom">
      <a href="#calhas">
        <div className="w3-content w3-margin">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="item active">
                <img src={Img1} alt="Ajuda" style={{ height: '25%' }} />
              </div>
              <div className="item">
                <img src={Img2} alt="Solução" style={{ height: '25%' }} />
              </div>
              <div className="item">
                <img src={Img3} alt="Contato" style={{ height: '25%' }} />
              </div>
            </div>
          </div>
        </div>
      </a>
      <h3>Calhas e Rufos</h3>
      <p className="w3-opacity">Solução para sua obra a longo prazo</p>
      <p>
        Se pretende ter um telhado sem preoucpações, contrate nossos serviços!
      </p>

      <Button />
    </div>
  )
}
export default Template1