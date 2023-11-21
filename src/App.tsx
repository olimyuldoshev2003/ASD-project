
import { useState } from 'react'
import './App.css'

//For Images and Videos

import logoHeader from "./assets/ASD logo.jpg"
import { Link } from 'react-router-dom'

function App() {

  return (
    <div className='p-[30px_100px]'>
      <header className="header">
        <div className="block_1">
          <img src={logoHeader} alt="" className='w-[100px] h-[100px] rounded-full'/>
        </div>
        <div className="block_2">
          <Link to="">Home</Link>
          <Link to="">About</Link>
          <Link to=""></Link>
          <Link to=""></Link>
        </div>
        <div className="block_3">
          <select name="" id="">
            <option value="">Lang</option>
            <option value="">En</option>
            <option value="">Ru</option>
            <option value="">Tj</option>
          </select>
        </div>
      </header>
      <section className="section"></section>
      <footer className="footer"></footer>
    </div>
  )
}

export default App
