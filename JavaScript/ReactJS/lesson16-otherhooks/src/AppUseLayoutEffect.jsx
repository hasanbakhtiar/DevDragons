import React, { useEffect, useLayoutEffect, useState } from 'react'

const AppUseLayoutEffect = () => {
    const [data,setData] = useState('my data');
    useLayoutEffect(()=>{
        setData('data was updated')
    },[])
  return (
    <div>
        {data}
    </div>
  )
}

export default AppUseLayoutEffect