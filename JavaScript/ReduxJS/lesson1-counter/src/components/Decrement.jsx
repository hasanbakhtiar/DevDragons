import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Decrement = () => {
    const dispatch = useDispatch();
    const data = useSelector(p=>p)
  return (
    <div>
        <button onClick={()=>{
            dispatch({
                type:"dec"
            })
        }}>decrement({data.count})</button>
    </div>
  )
}

export default Decrement