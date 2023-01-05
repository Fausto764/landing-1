import { useState } from 'react'
import { SeccionPh } from './components/seccion-cuerpo/seccion-ph/SeccionPh'
import { SeccionDer } from './components/seccion-cuerpo/seccion-der/SeccionDer'
import './css/App.css'

function App() {
  
  return (
    <main className="App">
      <SeccionPh/>
      <SeccionDer/>
    </main>
  )
}

export default App
