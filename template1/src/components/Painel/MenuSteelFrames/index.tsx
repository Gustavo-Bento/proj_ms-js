import {Link} from "react-router-dom"
import Img1 from '../../../assets/steelframe/img1.webp'
import Img2 from '../../../assets/steelframe/img2.webp'
import Img3 from '../../../assets/steelframe/img3.webp'

import Button from '../Button/index'

function Template3() {
  return (
    <div className="w3-col l4 m6 w3-margin-bottom">
      <Link to={'/steelframes'}>
        <div className="w3-content w3-margin">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="item active">
                <img src={Img1} alt=" " style={{ height: '25%' }} />
                <div className="w3-display-topleft w3-black w3-padding">Steel Frame</div>
              </div>
              <div className="item">
                <img src={Img2} alt="Solução" style={{ height: '25%' }} />
                <div className="w3-display-topleft w3-black w3-padding">Steel Frame</div>
              </div>
              <div className="item">
                <img src={Img3} alt="Contato" style={{ height: '25%' }} />
                <div className="w3-display-topleft w3-black w3-padding">Steel Frame</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="w3-content w3-margin">
        <p className="w3-opacity">Estrutura duradoura para seu lar</p>
        <p>
          Se quer um telhado de confiança, utilize a estrutura mais duradora.
        </p>
        <Button />
      </div>
    </div>
  )
}
export default Template3