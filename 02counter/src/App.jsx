import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter]  = useState(1)

// hooks

  //let counter = 15

  const addValue = () => {
   
    if(counter <= 19){
      setCounter( counter + 1)
      // setCounter( prevCounter => prevCounter + 1)
      // setCounter( prevCounter => prevCounter + 1)
      // setCounter( prevCounter => prevCounter + 1)
      // setCounter( prevCounter => prevCounter + 1)
    }
    
  }

  const removeValue = () => {
    if(counter > 1){
      setCounter(counter - 1)
    }
  }
  
  return (
    <>
      <h1>Coding Operation</h1>
      <h2>Counter Value : {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      
      <button
      onClick={removeValue}
      >remove value {counter} </button>
      <p>value : {counter}</p>
    </>
  )
}

export default App
