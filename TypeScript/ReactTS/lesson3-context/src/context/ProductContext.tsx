import axios from "axios";
import { createContext, useEffect, useState } from "react";


type propType = {
    children:any
}


export const ProductContext = createContext<any>(null);

export const ProductProvider = ({children}:propType)=>{
    const [product,setProduct] = useState<any[]>([]);
    useEffect(()=>{
       axios.get('https://dummyjson.com/products')
       .then((res:any)=>{setProduct(res.data.products)})
        
    },[])
    return <ProductContext.Provider value={[product,setProduct]}>{children}</ProductContext.Provider>
}
