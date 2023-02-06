
import Img1 from '../../../assets/negocio/slide 1.jpg'
import Img2 from '../../../assets/slide 2.jpg'
import Img3 from '../../../assets/slide 3.jpg'

function Publicacao() {
    return (
        <div className="container">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to={0} className="active" />
                    <li data-target="#myCarousel" data-slide-to={1} />
                    <li data-target="#myCarousel" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                    <div className="item active">
                        <img src={Img1} alt="Forest" style={{ width: '100%' }} />
                    </div>
                    <div className="item">
                        <img src={Img2} alt="Lights" style={{ width: '100%' }} />
                    </div>
                    <div className="item">
                        <img src={Img3} alt="Mountains" style={{ width: '100%' }} />
                    </div>
                </div>
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Publicacao