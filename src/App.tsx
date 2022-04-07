import { useState } from 'react'

import './App.css'
import { ModalPortal } from './componets/Modal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ModalPortal />
    </div>
  )
}

export default App
