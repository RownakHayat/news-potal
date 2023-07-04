import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSideNav from '../LaftSideNav/LeftSideNav';
const Header = () => {
    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant='light'>
      <Container>
        <Navbar.Brand href="#home">News Everyday</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#breaking">Breaking News</Nav.Link>
            <Nav.Link href="#regular">Regular News</Nav.Link>
            <Nav.Link href="#international">International News</Nav.Link>

            <NavDropdown title="More News" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sports</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Entertainment
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Culture
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Arts
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
          <div className='d-lg-none'>
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;