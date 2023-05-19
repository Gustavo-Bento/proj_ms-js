import Template1 from "./Template1/index"
import Template2 from "./Template2/index"
import Template3 from "./Template3/index"

function Painel() {
    return (
        <div id="servicos" className="w3-container w3-padding w3-margin m3">
            <div className="w3-row-padding w3-content">
                
            <div className="w3-light-grey w3-wide-small">
                <h2 className="w3-center w3-container">Veja nossos principais serviços!</h2>
            </div>
                <Template1 />
                <Template2 />
                <Template3 />
            </div>
        </div>
    )
}
export default Painel