import Bombas from '../../../assets/bombas/img1.webp'
import Button from '../Button/index'

function Template1() {
  return (
    <div className="w3-col l3 m6 w3-margin-bottom">
      <img src={Bombas} alt="Stillframe" style={{ width: '100%' }} />
      <h3>Bombas</h3>
      <p className="w3-opacity">Solução para piscina e tubulações</p>
      <p>
        Se pretende ter uma piscina ou fluxo de agua melhor, utilize nossas bombas.
      </p>
      <Button />
    </div>
  )
}
export default Template1