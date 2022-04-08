import { useState } from 'react'

import './App.css'
import { ModalPortal } from './componets/Modal'
import { WebShare } from './componets/webshare'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <ModalPortal /> */}
      <WebShare webShareTitle='Share with friends' url="https://portfolio-mywwsmdcv-44chann.vercel.app/" title="vikash portfolio" text="this is cool portfolio"  >
        <button>Share</button>
      </WebShare>
    </div >
  )
}

export default App
