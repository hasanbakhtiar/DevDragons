
import { useContext, useState } from 'react';
import SingleCard from '../components/SingleCard';
import { Col, ListGroup, Row } from 'react-bootstrap'
import { ProductContext } from '../context/ProductProvider';

const Products = () => {
  const [product] = useContext(ProductContext);
  const [catProduct,setCatProduct] = useState([]);
  const handleClick = (cat)=>{
   const catData = product.filter(p=>p.category === cat);
   setCatProduct(catData)
  }
  return (
    <>
      <h1 className='text-center my-5 text-light'>Product List</h1>
      <Row>
      <Col sm={12} md={3}>
      <ListGroup>
      <ListGroup.Item onClick={()=>{handleClick("smartphones")}}>Smartphones</ListGroup.Item>
      <ListGroup.Item onClick={()=>{handleClick("laptops")}}>Laptops</ListGroup.Item>
      <ListGroup.Item onClick={()=>{handleClick("fragrances")}}>Fragrances</ListGroup.Item>
      <ListGroup.Item onClick={()=>{handleClick("skincare")}}>Skincare</ListGroup.Item>
      <ListGroup.Item onClick={()=>{handleClick("groceries")}}>Groceries</ListGroup.Item>
    </ListGroup>
      </Col>
      <Col sm={12} md={9}>

       <Row className='g-5'>
       {catProduct.length === 0 ? product.map(item=>(
          <SingleCard 
          key={item.id}
          photo={item.images[0]}
          title={item.title}
          price={item.price}
          id={item.id}
          alldata={item}
          />
        )) : catProduct.map(item=>(
          <SingleCard 
          key={item.id}
          photo={item.images[0]}
          title={item.title}
          price={item.price}
          id={item.id}
          alldata={item}
          />
        ))}
       </Row>
        
      </Col>
    </Row>
    </>
  )
}

export default Products