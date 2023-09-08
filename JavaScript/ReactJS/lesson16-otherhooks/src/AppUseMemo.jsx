import React, { useMemo, useState } from 'react'
import users from './data/user';
const AppUseMemo = () => {
  const [count,setCount] = useState(0);
  const [email,setEmail] = useState("");
  const userRows = ()=>{
    console.log('list running');
   return(
    users.map(i=>(
      <li onClick={()=>{setEmail(i.email)}} key={i.id}>{i.name}</li>
    ))
   )
  }

  const userRowsMemo = useMemo(()=>userRows(),[email])
  
  return (
    <div>
      {email}
      {userRowsMemo}
      {count}
      <button onClick={()=>{setCount(count+1)
      console.log('counter is running');
      }}>+1</button>
    </div>
  )
}

export default AppUseMemo