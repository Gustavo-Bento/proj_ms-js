import { useState } from 'react'
import './App.css'
import Img1 from './assets/img1.jpg'
import Img2 from './assets/img2.jpg'
import Img3 from './assets/img3.jpg'
import Slide1 from './assets/slide1.jpg'
import Slide2 from './assets/slide2.jpg'
import Slide3 from './assets/slide3.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
  {/* Navbar (sit on top) */}
  <div className="w3-top">
    <div className="w3-bar w3-white w3-wide w3-padding w3-card">
      <a href="#home" className="w3-bar-item w3-button"><b>MS</b> Calhas</a>
      {/* Float links to the right. Hide them on small screens */}
      <div className="w3-right w3-hide-small">
        <a href="#projects" className="w3-bar-item w3-button">Projetos</a>
        <a href="#about" className="w3-bar-item w3-button">Sobre</a>
        <a href="#contact" className="w3-bar-item w3-button">Contato</a>
      </div>
    </div>
  </div>
  {/* Header */}
  <header className="w3-display-container w3-content w3-wide" style={{maxWidth: '1500px'}} id="home">
    <img className="w3-image" src="/assets/img/first.jpg" alt="mscalhas" width={1500} height="auto" />
    <div className="w3-display-middle w3-margin-top w3-center">
      <h1 className="w3-xxlarge w3-text-white"><span className="w3-padding w3-black w3-opacity-min"><b>BR</b></span> <span className="w3-hide-small w3-text-light-grey">Architects</span></h1>
    </div>
  </header>
  {/* Page content */}
  <div className="w3-content w3-padding" style={{maxWidth: '1564px'}}>
    {/* Project Section */}
    <div className="w3-container w3-padding-32" id="projects">
      <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Projects</h3>
    </div>
    <div className="w3-row-padding">
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container">
          <div className="w3-display-topleft w3-black w3-padding">Estruturas</div>
          <img src={Img1} alt="House" style={{width: '100%'}} />
        </div>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container">
          <div className="w3-display-topleft w3-black w3-padding">Calhas</div>
          <img src={Img2} alt="House" style={{width: '100%'}} />
        </div>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container">
          <div className="w3-display-topleft w3-black w3-padding">Telhado</div>
          <img src={Img3} alt="House" style={{width: '100%'}} />
        </div>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container">
          <div className="w3-display-topleft w3-black w3-padding">Dica</div>
          <img src={Slide1} alt="House" style={{width: '100%'}} />
        </div>
      </div>
    </div>
    <div className="w3-row-padding">
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container">
          <div className="w3-display-topleft w3-black w3-padding">Dica</div>
          <img src={Slide2} alt="House" style={{width: '99%'}} />
        </div>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container">
          <div className="w3-display-topleft w3-black w3-padding">Dica</div>
          <img src={Slide3} alt="House" style={{width: '99%'}} />
        </div>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container">
          <div className="w3-display-topleft w3-black w3-padding">Renovated</div>
          <img src="/w3images/house4.jpg" alt="House" style={{width: '99%'}} />
        </div>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container">
          <div className="w3-display-topleft w3-black w3-padding">Barn House</div>
          <img src="/w3images/house3.jpg" alt="House" style={{width: '99%'}} />
        </div>
      </div>
    </div>
    {/* About Section */}
    <div className="w3-container w3-padding-32" id="about">
      <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
    <div className="w3-row-padding w3-grayscale">
      <div className="w3-col l3 m6 w3-margin-bottom">
        <img src="/w3images/team2.jpg" alt="John" style={{width: '100%'}} />
        <h3>John Doe</h3>
        <p className="w3-opacity">CEO &amp; Founder</p>
        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
        <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <img src="/w3images/team1.jpg" alt="Jane" style={{width: '100%'}} />
        <h3>Jane Doe</h3>
        <p className="w3-opacity">Architect</p>
        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
        <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <img src="/w3images/team3.jpg" alt="Mike" style={{width: '100%'}} />
        <h3>Mike Ross</h3>
        <p className="w3-opacity">Architect</p>
        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
        <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
      </div>
      <div className="w3-col l3 m6 w3-margin-bottom">
        <img src="/w3images/team4.jpg" alt="Dan" style={{width: '100%'}} />
        <h3>Dan Star</h3>
        <p className="w3-opacity">Architect</p>
        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
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
      <img src="/w3images/map.jpg" className="w3-image" style={{width: '100%'}} />
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
