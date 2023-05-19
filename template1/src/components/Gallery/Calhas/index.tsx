import Img1 from '../../../assets/galeria/calhas/img1.webp'
import Img2 from '../../../assets/galeria/calhas/img2.webp'
import Img3 from '../../../assets/galeria/calhas/img3.webp'
import Img4 from '../../../assets/galeria/calhas/img4.webp'
import Img5 from '../../../assets/galeria/calhas/img5.webp'
import Img6 from '../../../assets/galeria/calhas/img6.webp'
import Img7 from '../../../assets/galeria/calhas/img7.webp'
import Img8 from '../../../assets/galeria/calhas/img8.webp'
import Img9 from '../../../assets/galeria/calhas/img9.webp'
import Img10 from '../../../assets/galeria/calhas/img10.webp'
import Img11 from '../../../assets/galeria/calhas/img11.webp'
import Img12 from '../../../assets/galeria/calhas/img12.webp'

function Calhas() {
    return (
        <div id="calha" className='w3-padding w3-margin m3'>
            <div className="w3-light-grey w3-wide-small">
                <h2 className="w3-center w3-container">Calhas e Rufos</h2>
            </div>
            <div className="w3-row w3-display-container w3-center" id="myGrid" style={{ marginBottom: '128px' }}>
                <div className="w3-third">
                    <div className="w3-display-topright w3-black w3-padding">Calhas e Rufos</div>
                    <img src={Img1} style={{ width: '100%' }} />
                    <img src={Img6} style={{ width: '50%' }} />
                    <img src={Img3} style={{ width: '50%' }} />
                    <img src={Img5} style={{ width: '100%' }} />
                </div>
                <div className="w3-third">
                    <img src={Img4} style={{ width: '100%' }} />
                    <img src={Img7} style={{ width: '100%' }} />
                    <img src={Img8} style={{ width: '100%' }} />
                    <img src={Img9} style={{ width: '100%' }} />
                </div>
                <div className="w3-third">
                    <img src={Img10} style={{ width: '100%' }} />
                    <img src={Img11} style={{ width: '100%' }} />
                    <img src={Img2} style={{ width: '50%' }} />
                    <img src={Img12} style={{ width: '50%' }} />
                </div>
            </div>
        </div>
    )
}

export default Calhas