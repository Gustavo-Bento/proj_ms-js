import { useState } from 'react'

import Toolbar from './components/Toolbar/index'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Content from './components/Content/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Toolbar />
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  )
}

export default App
