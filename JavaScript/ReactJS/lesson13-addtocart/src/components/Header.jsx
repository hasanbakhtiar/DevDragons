import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { ProductContext } from '../context/ProductProvider';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';

const Header = () => {
  const [query, setQuery] = useState(null);
  const [product] = useContext(ProductContext);
  const {totalItems} = useCart();
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark position-fixed" style={{ "width": "100%", "z-index": "9", "top": "0" }}>
      <Container>
        <Navbar.Brand href="#home">Techno Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <LinkContainer to="/"><Nav.Link >Home</Nav.Link></LinkContainer>
            <LinkContainer to="/products"><Nav.Link >Products</Nav.Link></LinkContainer>
          </Nav>

          <div >

                  <Link to="/cart"  className="btn btn-success position-relative me-3">
                    <i className="fa-solid fa-cart-shopping" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                    {totalItems}
                    </span>
                  </Link>

            <button type="button" className="btn btn-primary me-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Search</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="modal-body"  >
                    <form className="input-group mb-3">
                      <input onChange={e => setQuery(e.target.value)} type="text" className="form-control" placeholder="Enter product name" aria-label="Enter product name" aria-describedby="button-addon2" />
                      <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
                    </form>

                    <ul className="list-group">
                      {product.filter(p => p.title.toLowerCase().includes(query)).map(item => (
                        <li key={item.id} className="list-group-item d-flex justify-content-between">{item.title}<img width={50} src={item.images[0]} /></li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>
            </div>
          </div>

          {localStorage.getItem('active') === 'true' ? "hasan@webluna.az" : <LinkContainer to="/login"><Button variant='success'>Login</Button></LinkContainer>}

        </Navbar.Collapse>

      </Container>
    </Navbar>

  )
}

export default Header