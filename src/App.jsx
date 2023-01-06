import { useState } from 'react'
import { SeccionPh } from './components/seccion-cuerpo/seccion-ph/SeccionPh'
import { SeccionDer } from './components/seccion-cuerpo/seccion-der/SeccionDer'
import { Header } from './components/header/Header'
import './css/App.css'

function App() {
  
  return (
    <>
      <Header/>
      <main className="contenedor__cuerpo">
        <SeccionPh/>
        <SeccionDer/>
      </main>
    </>
  )
}

export default App
