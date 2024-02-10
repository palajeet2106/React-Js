// import { useState } from 'react'
import './App.css'
import Cards from './components/Card'

function App() {
  // const [count, setCount] = useState(0)
  // let obj = {
  //   name : 'ajeet',
  //   age : 21
  // }
  // let newArr = [1 , 2, 3]

  return (
    <>
     <h1 className='bg-green-500 text-black p-4 rounded-xl mb-2'>Coding Operation</h1>
     <Cards website = "coding operation" btnText = "click me" / >
     <Cards website = "Ajeet"  />
    </>
  )
}

export default App
