import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar, Nav, Container} from 'react-bootstrap'


function NavBar ()  {
  return (
    <div>
          
            <Navbar bg="dark" variant="dark">
                <Container>
                <img
                  src="img/Logo.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
               />
                <Navbar.Brand href="#home">Choco-Late</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Empresariales</Nav.Link>
                <Nav.Link href="#pricing">Eventos</Nav.Link>
                </Nav>
                </Container>
            </Navbar>

    </div>
  )
}

export default NavBar;