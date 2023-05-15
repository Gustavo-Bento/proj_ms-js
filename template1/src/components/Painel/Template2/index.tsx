import Limpeza from '../../../assets/limpeza/img1.webp'
import Button from '../Button/index'

function Template1() {
  return (
    <div className="w3-col l3 m6 w3-margin-bottom">
      <img src={Limpeza} alt="Stillframe" style={{ width: '100%' }} />
      <h3>Limpeza em Geral</h3>
      <p className="w3-opacity">Limpeza de dutos e calhas</p>
      <p>
        Se pretende ter um telhado sem preoucpações, contrate nossos serviços!
      </p>
      <Button />
    </div>
  )
}
export default Template1