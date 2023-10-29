import { useState } from 'react'

import './App.css'

function App() {
  const {VITE_API}= import.meta.env

  return (
    <>
     <h1> deploy</h1>
     {VITE_API}
    </>
  )
}

export default App
