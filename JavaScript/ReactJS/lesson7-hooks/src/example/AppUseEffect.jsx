import React, { useEffect, useState } from 'react'
import SingleCard from './components/SingleCard'
import product from './data/products'

const AppUseEffect = () => {
    const [count,setCount] = useState(0);
    const [data,setData] = useState('hello');
    useEffect(()=>{
        console.log('useEffect is running');         
    },[count,data])
  return (
    <div className='container'>
        <p>{count}</p>
        <button onClick={()=>{setCount(count+1)}}>inc</button>
        <p>{data}</p>
        <button onClick={()=>{setData("bye")}}>chng</button>
            <div className='row'>
                {product.map(item=>(
                    <SingleCard key={item.id} title={item.title} price={item.price} />
                ))}
            </div>
    </div>
  )
}

export default AppUseEffect