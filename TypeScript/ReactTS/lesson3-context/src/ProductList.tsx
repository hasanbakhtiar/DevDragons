import  { useContext } from 'react'
import { ProductContext } from './context/ProductContext';

const ProductList = () => {
    const [product] = useContext(ProductContext);
  return (
    <div>
        {product.map((i:any)=>(
            <li key={i.id}>{i.title}</li>
        ))}
    </div>
  )
}

export default ProductList