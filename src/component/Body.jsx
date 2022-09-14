import React, { useState } from 'react'


const Body = (props) => {
  // const handleSub = props.handleSub
  // const handleAdd =  props.handleAdd

  const {handleSub, handleAdd, counter} =  props
  


  
 
 


  return (
    <>
      <div className='p-32 '>
        {/* <p className='font-bold text-3xl '>{counter}</p> */}
        <p>Add to cart</p>
        <div className='space-x-4 flex '>
          <button onClick={handleAdd}  className= 'border p-1 border-red-300 bg-blue-500 text-white'>Add</button>
          <button onClick={handleSub} className= 'border p-1 border-red-300 bg-blue-500 text-white'>SUb</button>
        </div>
      </div>
    </>
  )


}

export default Body

// onClick={handleSub}
// onClick={handleAdd}

