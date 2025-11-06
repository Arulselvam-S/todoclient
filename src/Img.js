import React from 'react'
import { useState } from 'react'
import './css/Img.css'

const Img = () => {
  const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    }
    const decrement = () => {
      setCount(count - 1);
    }
    const reset = () => {
      setCount(0);
    }
  return (
     <div className='Img-main'>
      <h1>Counter</h1>
      <div className="counter-content">
        <h1>{count}</h1>
        <div className="buttons">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>


      </div>
      
    </div>
  )
}

export default Img