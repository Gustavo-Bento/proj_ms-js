
import Img1 from '../../../assets/stillframe/img1.webp'
import Img2 from '../../../assets/stillframe/img2.webp'
import Img3 from '../../../assets/stillframe/img3.webp'

import Button from '../Button/index'

function Template1() {
  return (
    <div className="w3-col l4 m6 w3-margin-bottom">
      <a href="">
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
      <h3>Still Frame</h3>
      <p className="w3-opacity">Solução para o encanamento</p>
      <p>

        Se quer um telhado de confiança, utilize a estrutura mais duradora.
      </p>
      <Button />
    </div>
  )
}
export default Template1