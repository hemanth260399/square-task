import { useState } from 'react'
import './App.css'
import { Smallbox } from './boxsplitter'

function App() {
  let [flagstate, setflagstate] = useState(false)
  let boxcreate = () => {
    setflagstate(true)
  }
  return (
    <>
      <div className='box' name="box-1" onClick={boxcreate}>
        {(flagstate) && <Smallbox />}
      </div>
    </>
  )
}

export default App

