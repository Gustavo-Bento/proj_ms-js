import Header from "../Header"
import Painel from "../Painel"
import Informations from "../Informations"
import Gallery from "../Gallery"
import Contact from "../Contact"
import Map from "../Map"

function Index() {
    return(
        <div>
            <Header/>
            <Informations />
            <Painel/>
            <Gallery/>
            <Contact/>
            <Map />
        </div>
    )
}
export default Index