import {Link} from "react-router-dom"
import Button from '../Button/index'

import Img1 from '../../../assets/hidraulica/img1.webp'
import Img2 from '../../../assets/hidraulica/img2.webp'
import Img3 from '../../../assets/hidraulica/img3.webp'

function Template2() {
  return (
    <div className="w3-col l4 m6 w3-margin-bottom w3-container">
      <Link to={'/hidraulica'}>
        <div className="w3-content w3-margin">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="item active">
                <img src={Img1} alt="Ajuda" style={{ height: '25%' }} />
                <div className="w3-display-topleft w3-black w3-padding">Hidráulica</div>
              </div>
              <div className="item">
                <img src={Img2} alt="Solução" style={{ height: '25%' }} />
                <div className="w3-display-topleft w3-black w3-padding">Hidráulica</div>
              </div>
              <div className="item">
                <img src={Img3} alt="Contato" style={{ height: '25%' }} />
                <div className="w3-display-topleft w3-black w3-padding">Hidráulica</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="w3-content w3-margin">
        <p className="w3-opacity">Encanamento com qualidade</p>
        <p>
          Não quer problemas ou vazamentos na sua obra? entre em contato.
        </p>
        <Button />
      </div>
    </div>
  )
}
export default Template2