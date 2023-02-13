import Publicacao from './Publicacao/index'
import Descricao from './Descricao/index'

function Slides() {
    return (
        <div className="w3-container w3-hide-small" id="calhas">
            <div className="w3-light-grey w3-margin w3-wide-small">
                <h2 className="w3-center">Soluções para Calhas</h2>
            </div>
            <div className="w3-row">
                <div className="w3-col m8 l8"><Descricao />
                </div>
                <div className="w3-col m4 l4"><Publicacao /></div>
            </div>
        </div>
    )
}

export default Slides