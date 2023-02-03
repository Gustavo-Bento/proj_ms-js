import { useState } from 'react'
import './App.css'
import Img1 from './assets/img1.jpg'
import Img2 from './assets/img2.jpg'
import Img3 from './assets/img3.jpg'
import Img4 from './assets/img4.jpg'
import Img5 from './assets/img5.jpg'
import Img6 from './assets/img6.jpg'
import Img7 from './assets/img7.jpg'
import Img8 from './assets/img8.jpg'
import Fundo from './assets/fundo.jpg'
import Logo from './assets/logo.png'
import Perfil1 from './assets/perfil1.jpg'
import Perfil2 from './assets/perfil2.jpg'
import Perfil3 from './assets/perfil3.jpg'
import Perfil4 from './assets/perfil4.jpg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* Navbar (sit on top) */}
      <div className="w3-top">
        <div className="w3-bar w3-white w3-wide w3-padding w3-card">
          <a href="#home" className="w3-bar-item w3-button">
            <a href="#home" className="w3-bar-item w3-button"><b>MS</b> Calhas & Hidraulica</a>
          </a>
          {/* Float links to the right. Hide them on small screens */}
          <div className="w3-right w3-hide-small">
            <a href="#projects" className="w3-bar-item w3-button">Projetos</a>
            <a href="#about" className="w3-bar-item w3-button">Sobre</a>
            <a href="#contact" className="w3-bar-item w3-button">Contato</a>
          </div>
        </div>
      </div>
      {/* Header */}
      <header className="w3-display-container w3-content w3-wide" style={{ maxWidth: '1500px' }} id="home">
        <img className="w3-image" src={Fundo} alt="mscalhas" width={1500} height="auto" />
        <div className="w3-display-middle w3-margin-top w3-center">
          <img src={Logo} alt="Logo" style={{ width: '20%' }} className="w3-round w3-opacity-min" />
          <h1 className="w3-xxlarge w3-text-white">
            <span className="w3-padding w3-opacity-min">
              <b>MS</b>
            </span>
            <span className="w3-hide-small w3-text-light-grey">Calhas & Hidraulica</span>
          </h1>
        </div>
      </header>
      {/* Page content */}
      <div className="w3-content w3-padding" style={{ maxWidth: '1564px' }}>
        {/* Project Section */}
        <div className="w3-container w3-padding-32" id="projects">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Soluções Para Seu Imóvel</h3>
        </div>
        <div className="w3-row-padding">
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-indigo w3-padding w3-opacity-min">Estrutura</div>
              <img src={Img1} alt="House" style={{ width: '100%' }} className="w3-round" />
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-indigo w3-padding w3-opacity-min">Calha</div>
              <img src={Img2} alt="House" style={{ width: '100%' }} className="w3-round" />
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-indigo w3-padding w3-opacity-min">Telhado</div>
              <img src={Img3} alt="House" style={{ width: '100%' }} className="w3-round" />
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-indigo w3-padding w3-opacity-min">Estrutura</div>
              <img src={Img4} alt="House" style={{ width: '100%' }} className="w3-round" />
            </div>
          </div>
          <div className="w3-row-padding">
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className=" w3-display-topleft w3-indigo w3-padding w3-opacity-min">Estrutura</div>
                <img src={Img5} alt="House" style={{ width: '100%' }} className="w3-round" />
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className=" w3-display-topleft w3-indigo w3-padding w3-opacity-min">Estrutura</div>
                <img src={Img6} alt="House" style={{ width: '100%' }} className="w3-round" />
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className=" w3-display-topleft w3-indigo w3-padding w3-opacity-min">Estrutura</div>
                <img src={Img7} alt="House" style={{ width: '100%' }} className="w3-round" />
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-indigo w3-padding w3-opacity-min">Estrutura</div>
                <img src={Img8} alt="House" style={{ width: '100%' }} className="w3-round" />
              </div>
            </div>
          </div>
        </div>
        {/* About Section */}
        <div className="w3-container w3-padding-32" id="about">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Sobre a importancia das Calhas</h3>
          <p>As calhas são uma parte importante de qualquer estrutura de cobertura, pois são essenciais para gerenciar o escoamento de água e evitar danos à fundação e às paredes do edifício. Calhas de metal, como alumínio e aço galvanizado, são as mais comumente usadas, pois são duráveis, resistentes às intempéries e acessíveis. Essas calhas podem ter uma variedade de formas e tamanhos e podem ser instaladas de diferentes maneiras, incluindo cabides tradicionais, cabides ocultos e suportes de fáscia. Para garantir um telhado duradouro e evitar possíveis danos, é importante garantir que as calhas sejam instaladas e mantidas corretamente.</p>
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
        <div className="w3-container w3-padding-32" id="contact">
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

  )
}

export default App
