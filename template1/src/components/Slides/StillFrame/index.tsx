import '../../../App.css'
import './style.css'
import './showDiv'

import Img1 from '../../../assets/img_forest.jpg'
import Img2 from '../../../assets/img_lights.jpg'
import Img3 from '../../../assets/img_mountains.jpg'
import Img4 from '../../../assets/img_showtops.jpg'

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block"
}

function plusDivs(n) {
    showDivs(slideIndex += n);
}


function StillFrame() {
    var slideIndex = 1;
    showDivs(slideIndex);

    return (
        <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
                <div className="w3-display-topleft w3-indigo w3-padding w3-opacity-min">Estrutura</div>
                <div className="w3-content w3-display-container">
                    <img className="mySlides" src={Img1} style="width:100%" />
                    <img className="mySlides" src={Img2} style="width:100%" />
                    <img className="mySlides" src={Img3} style="width:100%" />
                    <img className="mySlides" src={Img4} style="width:100%" />

                    <button className="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
                    <button className="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
                </div>
            </div>
        </div>
    )
}

export default StillFrame