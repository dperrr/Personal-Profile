import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import '../styles/navstyle.css';

function Mynavbar() {
  return (
    <div className='nav--bg'>
          <Navbar  expand="lg" className="nav--bg w-100">
        <Navbar.Brand className="fs-3 nav--brand" as={NavLink} to="/">
          Profile Page
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item className="fs-5 mx-2">
              <Nav.Link as={NavLink} to="/" activeClassName="active" exact>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="fs-5 mx-2">
              <Nav.Link as={NavLink} to="/about" activeClassName="active">
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="fs-5 mx-2">
              <Nav.Link as={NavLink} to="/skills" activeClassName="active">
                Skills
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="fs-5 mx-2">
              <Nav.Link as={NavLink} to="/contact" activeClassName="active">
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    
  );
}

export default Mynavbar;
