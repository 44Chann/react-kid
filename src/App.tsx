import { useState } from 'react'

import './App.css'
import { ModalPortal } from './componets/Modal'
import { WebShare } from './componets/webshare'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <ModalPortal /> */}
      <WebShare url="https:hello.com" title="this is title" text="awesome"  >
        <button>Share</button>
      </WebShare>
    </div >
  )
}

export default App
