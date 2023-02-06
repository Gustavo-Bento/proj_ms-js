import Publicacao from './Publicacao/index'
import Descricao from './Descricao/index'

function Slides() {
    return (
        
            <div className="w3-card">
                <div className="w3-container w3-light-grey w3-margin-1">
                    <h2 className="w3-wide w3-center">Soluções para Calhas e Hidraulica</h2>
                </div>
                <div className="row w3-margin-1">
                    <div className="col-sm-8"><Descricao />
                    </div>
                    <div className="col-sm-4"><Publicacao /></div>
                </div>
            </div>
    )
}

export default Slides