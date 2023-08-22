import { Link } from 'react-router-dom'
import { ProductContext } from '../context/ProductProvider';
import { useContext } from 'react';

const Home = () => {
  const [product] = useContext(ProductContext);

  return (
  <div className="px-4 py-5 my-5 text-center">
  <h1 className="display-5 fw-bold  text-light">Techno Shop</h1>
  <div className="col-lg-6 mx-auto">
    <p className="lead mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates aperiam quia, sequi rem nulla vel quod fugiat autem corporis non inventore odit recusandae magnam quidem placeat voluptatum quo reprehenderit. Accusantium itaque, accusamus, fugit deleniti dolor qui odit laborum ducimus veritatis numquam alias natus perferendis. Soluta architecto consectetur voluptate blanditiis quaerat?</p>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <Link  className="btn btn-primary btn-lg px-4 gap-3" to="/products">Shop Now</Link>
    </div>
  {product.map(item=>(<Link to={`/products/${item.id}`}><li>{item.title}</li></Link>))}
  </div>
</div>

  )
}

export default Home