import React, { FC } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import bd from '../assets/bd.png';

const Header: FC = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand href='/'>
            <img
              src={bd}
              width={30}
              height={30}
              className='d-inline-block align-top'
              alt='bd logo'
            />{' '}
            Brad Duderstadt
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/bradduderstadt'>Home</Nav.Link>
              <NavDropdown title='Demos' id='basic-nav-dropdown'>
                <NavDropdown.Item href='/bradduderstadt/todo'>
                  DnD Todo
                </NavDropdown.Item>
                <NavDropdown.Item href='/bradduderstadt/crypto'>
                  Crypto Prices
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>Demo 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='/bradduderstadt/resume'>Resume</Nav.Link>
              <Nav.Link href='/bradduderstadt/about'>About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>{' '}
      </Navbar>
    </>
  );
};

export default Header;
