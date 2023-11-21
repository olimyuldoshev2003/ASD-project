
import { useState } from 'react'
import './App.css'

//For Images and Videos

import logoHeader

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header className="header">
        <div className="block_1">
          <img src="" alt="" />
        </div>
        <div className="block_2"></div>
        <div className="block_3"></div>
      </header>
      <section className="section"></section>
      <footer className="footer"></footer>
    </div>
  )
}

export default App
