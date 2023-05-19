import Img1 from '../../../assets/galeria/stillframes/img1.webp'
import Img2 from '../../../assets/galeria/stillframes/img2.webp'
import Img3 from '../../../assets/galeria/stillframes/img3.webp'
import Img4 from '../../../assets/galeria/stillframes/img4.webp'
import Img5 from '../../../assets/galeria/stillframes/img5.webp'
import Img6 from '../../../assets/galeria/stillframes/img6.webp'
import Img7 from '../../../assets/galeria/stillframes/img7.webp'
import Img8 from '../../../assets/galeria/stillframes/img8.webp'
import Img9 from '../../../assets/galeria/stillframes/img9.webp'
import Img10 from '../../../assets/galeria/stillframes/img10.webp'
import Img11 from '../../../assets/galeria/stillframes/img11.webp'
import Img12 from '../../../assets/galeria/stillframes/img12.webp'

function StillFrames() {
    return (
        <div>

            <div id="stillframe" className="w3-light-grey w3-margin w3-wide-small">
                <h3 className="w3-center">Still Frame</h3>
            </div>
            <div className="w3-row w3-display-container w3-center" id="myGrid" style={{ marginBottom: '128px' }}>
                <div className="w3-third">
                    <img src={Img3} style={{ width: '50%' }} />
                    <img src={Img5} style={{ width: '50%' }} />
                    <img src={Img1} style={{ width: '100%' }} />
                    <img src={Img2} style={{ width: '100%' }} />
                </div>
                <div className="w3-third">
                    <img src={Img6} style={{ width: '100%' }} />
                    <img src={Img8} style={{ width: '100%' }} />
                    <img src={Img10} style={{ width: '50%' }} />
                    <img src={Img9} style={{ width: '50%' }} />

                </div>
                <div className="w3-third">
                    <img src={Img11} style={{ width: '50%' }} />
                    <img src={Img12} style={{ width: '50%' }} />
                    <img src={Img7} style={{ width: '100%' }} />
                    <img src={Img4} style={{ width: '100%' }} />
                </div>
            </div>
        </div>
    )
}

export default StillFrames