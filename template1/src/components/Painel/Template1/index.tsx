import Stillframe from '../../../assets/stillframe/img1.jpg'
import Button from '../Button/index'

function Template1() {
  return (
    <div className="w3-col l3 m6 w3-margin-bottom">/
      <img src={Stillframe} alt="Stillframe" style={{ width: '100%' }} />
      <h3>Stillframe</h3>
      <p className="w3-opacity">Solução para sua obra a longo prazo</p>
      <p>
        Se pretende ter um telhado de confiança, utilize a estrutura mais duradora.
      </p>
      <Button />
    </div>
  )
}
export default Template1