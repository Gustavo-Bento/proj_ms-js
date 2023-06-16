import { useState } from 'react'
import {
  Routes,
  Route
} from "react-router-dom";
import Toolbar from './components/Toolbar'
import Footer from './components/Footer/index'
import Gallery from './components/Gallery/index'
import Map from './components/Map/index'
import Calhas from './components/Gallery/Calhas/index'
import StillFrames from './components/Gallery/Steelframe/index'
import Hidraulica from './components/Gallery/Hidraulica/index'
import Contact from './components/Contact/index'
import Painel from './components/Painel/index'
import Index from './components/Index/index'
import Informations from './components/Informations';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="w3-content" style={{ maxWidth: '2000px', marginTop: '46px' }}>
      <Toolbar />
        <Routes>
          <Route index element={<Index/>} />
          <Route path='informacoes' element={<Informations/>}/>
          <Route path='servicos' element={<Painel/>}/>
          <Route path='galeria' element={<Gallery/>} />
          <Route path='calhas' element={<Calhas/>}/>
          <Route path='steelframes' element={<StillFrames/>}/>
          <Route path='hidraulica' element={<Hidraulica/>}/>
          <Route path='contato' element={<Contact/>}/>
          <Route path='endereco' element={<Map/>}/>
        </Routes>
        <Footer />
      </div>
  </div>
  )
}

export default App
