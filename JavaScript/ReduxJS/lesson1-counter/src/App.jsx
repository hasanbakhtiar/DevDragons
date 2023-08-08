import React from 'react'
import Increment from './components/Increment'
import Decrement from './components/Decrement'

import { useSelector } from 'react-redux'






const App = () => {
  const data = useSelector(p => p)
  return (
    <div>
      <Increment />

      <span>{data.count}</span>
      <Decrement />
    </div>
  )
}

export default App