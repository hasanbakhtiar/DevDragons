import React from 'react'
import { useDispatch } from 'react-redux'

const Increment = () => {
    const dispatch = useDispatch();
  return (
    <div>
        <button 
        onClick={()=>{
            dispatch({
                type:"inc"
            })
        }}>increment</button>
    </div>
  )
}

export default Increment