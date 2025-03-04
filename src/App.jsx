import { useState } from 'react'
import './App.css'
import Calculator from './Calculator/Calculator'
import AutoAlert from './Auto Alert/AutoAlert'
import RandomBoxColor from './Random Box Color/RandomBoxColor'
import ShowInputValue from './Show Input Value/ShowValue'
function App() {
  return (
    <>
      <h1>React Tasks</h1>
      <Calculator />
      <AutoAlert />
      <RandomBoxColor />
      <ShowInputValue />
    </>
  )
}

export default App

