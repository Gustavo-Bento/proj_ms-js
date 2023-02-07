import Publicacao from './Publicacao/index'
import Descricao from './Descricao/index'

function Slides() {
    return (
        <div className="w3-container" id="calhas">
            <div className="w3-light-grey w3-margin-1">
                <h2 className="w3-wide w3-center">Soluções para Calhas</h2>
            </div>
            <div className="row">
                <div className="col-sm-8"><Descricao />
                </div>
                <div className="col-sm-4"><Publicacao /></div>
            </div>
        </div>
    )
}

export default Slides