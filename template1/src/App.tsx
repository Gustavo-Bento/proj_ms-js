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
import Footer from './components/Footer/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Toolbar />
        <Header />
        <div className="w3-content" style={{ maxWidth: '1564px' }}>
          <Painel />
          <Slides />
          <Contact />
          <Map />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
