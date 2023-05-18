import Gallery from '../Gallery/index'
import Map from '../Map/index'
import Contact from '../Contact/index'
import Painel from '../Painel/index'
import Informations from '../Informations/index'

function Content() {
    return (
        <div className="w3-content" style={{ maxWidth: '1564px' }}>
            <Painel />
            <Informations />
            <Gallery />
            <Contact />
            <Map />
        </div>
    )
}

export default Content