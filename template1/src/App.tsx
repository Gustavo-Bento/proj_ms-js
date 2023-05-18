import { useState } from 'react'

import Toolbar from './components/Toolbar/index'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Content from './components/Content/index'
import Informations from './components/Informations/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Toolbar />
      <div className="w3-content" style={{ maxWidth: '2000px', marginTop: '46px' }}>
        <Header />
        <Informations />
        <Content />
      </div>
      <Footer />
    </div>
  )
}

export default App
