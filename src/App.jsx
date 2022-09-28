import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";

import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'

import './App.css'
import Cat from './components/cat/Cat'
import MostCats from './components/mostCats/MostCats'

const App = () => {
  // Mobile device
  const [deviceMobile, setDeviceMobile] = useState(false)

  useEffect(() => {

    // Definimos el dispositivo segun el tamaño del dispotivo
    setDeviceMobile(window.innerWidth <= 500 ? true : false)

    // Creamos un evento por si el usuario cambia el tamaño;
    window.addEventListener('resize', () => {
      setDeviceMobile(window.innerWidth <= 500 ? true : false)
    }, false)

  }, [])


  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home deviceMobile={deviceMobile} />} />
        <Route path='/cat/:breed' element={<Cat />} />
        <Route path='/most' element={<MostCats />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App  