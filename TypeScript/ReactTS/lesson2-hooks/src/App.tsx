import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

type dataType = {
    email:string
}
const data:dataType = {
    email:"hasan@webluna.az"
}


const App = () => {
    const [value,setValue] = useState<string>();
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate:any = useNavigate();
  return (
    <form onSubmit={(e:React.FormEvent)=>{
        e.preventDefault();
        const comingValue:any = inputRef.current?.value;
        if (comingValue === data.email) {
            navigate("/list")
        }else{
            setValue('wrong')
        }
    }}>
        <h1>{value}</h1>
        <input type="text" ref={inputRef} />
        <button type="submit">send</button>
    </form>
  )
}

export default App