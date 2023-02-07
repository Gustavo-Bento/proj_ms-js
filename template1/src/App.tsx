import { useState } from 'react'

import Perfil1 from './assets/perfil1.jpg'
import Perfil2 from './assets/perfil2.jpg'
import Perfil3 from './assets/perfil3.jpg'
import Perfil4 from './assets/perfil4.jpg'

import Toolbar from './components/Toolbar/index'
import Header from './components/Header/index'
import Slides from './components/Slides/index'
import Map from './components/Map/index'
import Contact from './components/Contact/index'
import Painel from './components/Painel/index'

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
        <div className="w3-content" style={{ maxWidth: '1564px' }}>
          {/* Project Section */}
          <div className="w3-container w3-padding-4" id="projects">
            <h3 className="w3-border-bottom w3-border-light-grey w3-padding-4">Soluções Para Seu Imóvel</h3>
          </div>
          <Painel />
          <Slides />
          
          {/* Contact Section */}
          <Contact />
          {/* Image of location/map */}
          <Map />
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
