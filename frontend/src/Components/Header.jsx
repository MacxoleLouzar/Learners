import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () =>{
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href='/'>
            <img
              src="https://thedigitalacademy.co.za/assets/DA/img/DA2.png"
              width="170"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home" end>Home</Nav.Link>
            <Nav.Link href="Learners" end>Learners</Nav.Link>
            <Nav.Link href="Portfolio" end>Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;