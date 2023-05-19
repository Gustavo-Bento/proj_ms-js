import Img1 from '../../../assets/galeria/hidraulica/img1.webp'
import Img2 from '../../../assets/galeria/hidraulica/img2.webp'
import Img3 from '../../../assets/galeria/hidraulica/img3.webp'
import Img4 from '../../../assets/galeria/hidraulica/img4.webp'
import Img5 from '../../../assets/galeria/hidraulica/img5.webp'
import Img6 from '../../../assets/galeria/hidraulica/img6.webp'
import Img7 from '../../../assets/galeria/hidraulica/img7.webp'
import Img9 from '../../../assets/galeria/hidraulica/img9.webp'
import Img10 from '../../../assets/galeria/hidraulica/img10.webp'

function Hidraulica() {
    return (
        <div>
            <div id="hidraulica" className="w3-light-grey w3-margin w3-wide-small">
                <h3 className="w3-center">Hidraulica</h3>
            </div>
            <div className="w3-row w3-display-container w3-center" id="myGrid" style={{ marginBottom: '128px' }}>
                <div className="w3-third">
                    <img src={Img7} style={{ width: '100%' }} />
                    <img src={Img1} style={{ width: '50%' }} />
                    <img src={Img2} style={{ width: '50%' }} />
                </div>
                <div className="w3-third">
                    <img src={Img3} style={{ width: '50%' }} />
                    <img src={Img4} style={{ width: '50%' }} />
                    <img src={Img9} style={{ width: '100%' }} />
                </div>
                <div className="w3-third">
                    <img src={Img10} style={{ width: '100%' }} />
                    <img src={Img5} style={{ width: '50%' }} />
                    <img src={Img6} style={{ width: '50%' }} />
                </div>
            </div>
        </div>
    )
}

export default Hidraulica