import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {
  const [state,setState] = useState([]);
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(res=>setState(res.data))
  },[])
  return (
    <ol>
      {state.slice(0,10).map(item=>(
        <li key={item.id}>{item.title}</li>
      ))}
    </ol>
  )
}

export default App