import Publicacao from './Publicacao/index'
import Descricao from './Descricao/index'

function Slides() {
    return (
        <div class="w3-row-padding">
            <div className="col-sm-8">
                <Descricao />
            </div>
            <div className="col-sm-4">
                <Publicacao />
            </div>
        </div>

    )
}

export default Slides