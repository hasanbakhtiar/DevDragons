import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const MyInput = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({
        myFunc: sayHi
    }))


    const sayHi = () => {
        alert('hello')
    }
    return (
        <input type="text" />
    )
})


const AppUseImperativeHandle = () => {


    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.myFunc()
    }
    return (
        <div>
            <MyInput ref={inputRef} />
            <button onClick={() => { handleClick() }}>run</button>
        </div>
    )
}

export default AppUseImperativeHandle