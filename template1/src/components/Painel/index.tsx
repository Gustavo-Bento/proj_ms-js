import Template1 from "./Template1/index"
import Template2 from "./Template2/index"
import Template3 from "./Template3/index"

function Painel() {
    return (
        <div id="servicos" className="w3-container">
            <div className="w3-light-grey w3-margin w3-wide-small">
                <h2 className="w3-center">Serviços prestados com qualidade</h2>
            </div>
            <div className="w3-row-padding">
                <Template1 />
                <Template2 />
                <Template3 />
            </div>
        </div>
    )
}
export default Painel