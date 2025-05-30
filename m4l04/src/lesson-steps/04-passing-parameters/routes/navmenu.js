import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Link} from 'react-router';


const myData = {
  info: 'Some data to pass',
  price: 123
}

export default function NavMenu() {
  return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand>React application</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link as={Link} to="../">Home</Nav.Link>
        <Nav.Link as={Link} to="../posts">Posts</Nav.Link>
        <Nav.Link as={Link} to="../about">About</Nav.Link>

          <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="../page1">Page1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="../page1/paramVal1">Page1 with one parameter</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="../page1/Martin/Lenart">Page1 with several parameters</NavDropdown.Item>

              <NavDropdown.Item as={Link} to="../page2">Page2</NavDropdown.Item>

              {/* Passing data as through the Link */}
              <NavDropdown.Item as={Link} to="../page2" state={myData}>Page2 passing state</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="../page3">Page3</NavDropdown.Item>
              </NavDropdown>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}