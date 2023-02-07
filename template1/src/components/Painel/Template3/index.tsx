import Encanamento from '../../../assets/encanamento/img1.jpg'
import Button from '../Button/index'

function Template1() {
  return (
    <div className="w3-col l3 m6 w3-margin-bottom">
      <img src={Encanamento} alt="Encanamento" style={{ width: '100%' }} />
      <h3>Encanamento</h3>
      <p className="w3-opacity">Solução para o encanamento</p>
      <p>
       Não quer problemas ou vazamentos na sua obra? entre em contato.
      </p>
      <Button />
    </div>
  )
}
export default Template1