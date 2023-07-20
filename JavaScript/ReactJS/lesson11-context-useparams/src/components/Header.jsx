import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand href="#home">Techno Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <LinkContainer to="/"><Nav.Link >Home</Nav.Link></LinkContainer>
            <LinkContainer to="/products"><Nav.Link >Products</Nav.Link></LinkContainer>
          </Nav>
          {localStorage.getItem('active') === 'true'?"hasan@webluna.az":<LinkContainer to="/login"><Button variant='success'>Login</Button></LinkContainer>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
  )
}

export default Header