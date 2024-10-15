import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

import '../styles/navstyle.css'

function Mynavbar() {
  return (
    <>
      <div
        className="nav--bg"
      >
        <Nav fill variant="tabs" defaultActiveKey="/">
          <Nav.Item className="fs-4">
            <Nav.Link className='nav--link' as={Link} to="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item className="fs-4">
            <Nav.Link className='nav--link' as={Link} to="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item  className="fs-4">
            <Nav.Link className='nav--link' as={Link} to="/skills">Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item className="fs-4">
            <Nav.Link className='nav--link' as={Link} to="/contact">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
}

export default Mynavbar;
