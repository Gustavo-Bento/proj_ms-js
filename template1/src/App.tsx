import { useState } from 'react'

import Perfil1 from './assets/perfil1.jpg'
import Perfil2 from './assets/perfil2.jpg'
import Perfil3 from './assets/perfil3.jpg'
import Perfil4 from './assets/perfil4.jpg'

import Toolbar from './components/Toolbar/index'
import Header from './components/Header/index'
import Slides from './components/Slides/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* Navbar (sit on top) */}
        <Toolbar />
        {/* Header */}
        <Header />
        {/* Page content */}
        <div className="w3-content w3-padding" style={{ maxWidth: '1564px' }}>
          {/* Project Section */}
          <div className="w3-container w3-padding-4" id="projects">
            <h3 className="w3-border-bottom w3-border-light-grey w3-padding-4">Soluções Para Seu Imóvel</h3>
          </div>
          <div className="w3-row w3-margin">
            <Slides />
          </div>
          <div className="w3-row-padding w3-grayscale">
            <div className="w3-col l3 m6 w3-margin-bottom">
              <img src={Perfil1} alt="John" style={{ width: '100%' }} />
              <h3>Gustavo Ferreira</h3>
              <p className="w3-opacity">Professor</p>
              <p>
                Obrigado por manter diligentemente os azulejos e encanamentos da propriedade.</p>
              <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <img src={Perfil2} alt="Jane" style={{ width: '100%' }} />
              <h3>Lucas Henrique</h3>
              <p className="w3-opacity">Estagiário</p>
              <p>Sua atenção aos detalhes é muito apreciada.</p>
              <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <img src={Perfil3} alt="Guilherme" style={{ width: '100%' }} />
              <h3>Guilherme Silva</h3>
              <p className="w3-opacity">CEO da MS</p>
              <p>O trabalho árduo garante que a propriedade seja mantida em excelentes condições.</p>
              <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <img src={Perfil4} alt="Michel" style={{ width: '100%' }} />
              <h3>Bianca Pires</h3>
              <p className="w3-opacity">Pedagoga</p>
              <p>Estamos profundamente gratos por toda a manutenção que você fez.</p>
              <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
            </div>
          </div>
          {/* Contact Section */}
          <div className="w3-container w3-padding-16" id="contact">
            <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Contact</h3>
            <p>Lets get in touch and talk about your next project.</p>
            <form action="/action_page.php" target="_blank">
              <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name" />
              <input className="w3-input w3-section w3-border" type="text" placeholder="Email" required name="Email" />
              <input className="w3-input w3-section w3-border" type="text" placeholder="Subject" required name="Subject" />
              <input className="w3-input w3-section w3-border" type="text" placeholder="Comment" required name="Comment" />
              <button className="w3-button w3-black w3-section" type="submit">
                <i className="fa fa-paper-plane" /> SEND MESSAGE
              </button>
            </form>
          </div>
          {/* Image of location/map */}
          <div className="w3-container">
            <img src="/w3images/map.jpg" className="w3-image" style={{ width: '100%' }} />
          </div>
          {/* End page content */}
        </div>
        {/* Footer */}
        <footer className="w3-center w3-black w3-padding-16">
          <p>Powered by <a href="https://github.com/Gustavo-Bento" title="GFMB" target="_blank" className="w3-hover-text-green">GFMB</a></p>
        </footer>
      </div>
    </>
  )
}

export default App
