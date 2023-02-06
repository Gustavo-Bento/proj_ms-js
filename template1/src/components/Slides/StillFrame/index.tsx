
import Img1 from '../../../assets/img_forest.jpg'
import Img2 from '../../../assets/img_lights.jpg'
import Img3 from '../../../assets/img_mountains.jpg'
import Img4 from '../../../assets/img_showtops.jpg'

function StillFrame() {
    return (
        <div classname="container">
        <h2>Carousel Example</h2>
        <div id="myCarousel" classname="carousel slide" data-ride="carousel">
          <ol classname="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to={0} classname="active" />
            <li data-target="#myCarousel" data-slide-to={1} />
            <li data-target="#myCarousel" data-slide-to={2} />
            <li data-target="#myCarousel" data-slide-to={3} />
          </ol>
          <div classname="carousel-inner">
            <div classname="item active">
              <img src="{Img1}" alt="Forest" style={{width: '100%'}} />
            </div>
            <div classname="item">
              <img src="{Img2}" alt="Lights" style={{width: '100%'}} />
            </div>
            <div classname="item">
              <img src="{Img3}" alt="Mountains" style={{width: '100%'}} />
            </div>
            <div classname="item">
              <img src="{Img4}" alt="Showtops" style={{width: '100%'}} />
            </div>
          </div>
          <a classname="left carousel-control" href="#myCarousel" data-slide="prev">
            <span classname="glyphicon glyphicon-chevron-left" />
            <span classname="sr-only">Previous</span>
          </a>
          <a classname="right carousel-control" href="#myCarousel" data-slide="next">
            <span classname="glyphicon glyphicon-chevron-right" />
            <span classname="sr-only">Next</span>
          </a>
        </div>
      </div>
    )
}

export default StillFrame