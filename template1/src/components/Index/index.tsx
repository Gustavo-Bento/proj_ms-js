import Header from "../Header"
import SimplePainel from "../Painel/SimplePainel/index"
import Informations from "../Informations/index"
import Gallery from "../Gallery/index"
import SimpleContact from "../Contact/SimpleContact/index"
import SimpleMap from "../Map/SimpleMap/index"

function Index() {
    return(
        <div>
            <Header/>
            <Informations />
            <SimplePainel/>
            <Gallery/>
            <SimpleContact/>
            <SimpleMap />
        </div>
    )
}
export default Index