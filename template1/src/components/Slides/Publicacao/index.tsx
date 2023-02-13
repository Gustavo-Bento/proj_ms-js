
import Img1 from '../../../assets/negocio/slide1.jpg'
import Img2 from '../../../assets/negocio/slide2.jpg'
import Img3 from '../../../assets/negocio/slide3.jpg'

function Publicacao() {
    return (
        <div className="w3-content w3-margin">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to={0} className="active" />
                    <li data-target="#myCarousel" data-slide-to={1} />
                    <li data-target="#myCarousel" data-slide-to={2} />
                </ol>
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
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" />
                    <span className="sr-only">Anterior</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" />
                    <span className="sr-only">Proximo</span>
                </a>
            </div>
        </div>
    )
}

export default Publicacao