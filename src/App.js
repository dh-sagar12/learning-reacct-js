import React, { useState } from 'react'
import Body from './component/Body'
import Navbar from './component/Navbar'



const App = () => {
  const [counter, setCounter] = useState(0)


  

  const handleAdd = () => {
    setCounter(counter+ 1)

    
  }

  const handleSub = ()=>{
    setCounter(counter- 1)

  }
  return (

    <>
     <div>
        <Navbar counter={counter}/>
        <Body handleAdd={handleAdd}  handleSub={handleSub} counter={counter} setCounter={setCounter}/>
     </div>
    </>
  )
}

export default App


