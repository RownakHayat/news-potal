import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSideNav from '../LaftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../../Context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import { Button, Image } from 'react-bootstrap';

const Header = () => {
  const { user, logOut } = useContext(AuthContex);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(error => console.error(error));
  }

  return (
    <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant='light'>
      <Container>
        <Navbar.Brand><Link to='/'>News Everyday</Link></Navbar.Brand>
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
          <Nav>
            <>
              {
                user?.uid ?
                  <>
                    <span>{user?.displayName}</span>
                    <Button onClick={handleLogOut} variant="light">Logout</Button>
                  </>
                  :
                  <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Sign Up</Link>
                  </>
              }


            </>
            <Link to="/profile">
              {user?.photoURL ?
                <Image
                  style={{ height: '30px' }}
                  roundedCircle
                  src={user?.photoURL}></Image>
                :
                <FaUser></FaUser>}
            </Link>
          </Nav>
          <div className='d-lg-none'>
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;