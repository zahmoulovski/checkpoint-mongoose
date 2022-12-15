import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link to='/'>Home</Link>
            <Link to='/contacts'>Contacts</Link>
            <Link to='/add'>Add</Link>
            <Link to='/update/:id'>Update</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
