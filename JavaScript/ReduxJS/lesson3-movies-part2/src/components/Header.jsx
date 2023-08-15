import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-secondary navbar-dark">
      <Container>
        <Link to="/"><Navbar.Brand>Movies</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink to="/"><Button variant='success me-3'>Home</Button></NavLink>
            <NavLink to="/movies"><Button variant='success'>List</Button></NavLink>
          </Nav>
          <NavLink to="/admin"><Button variant='warning'>Admin</Button></NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;