import { useState } from 'react';


function Counter() {
    const [value, setValue] = useState(0);
    const increment = () => {
        setValue(value + 1)
    }
    const decrement = () => {
        if (value>1) {
            setValue(value - 1)
        }
    }
    return (
        <div className='container'>
            <h1>{value}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    )
}


export default Counter

