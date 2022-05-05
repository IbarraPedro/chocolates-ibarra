import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar, Nav, Container} from 'react-bootstrap'
import CartWidget from './CartWidget'
import ItemListContainer from './ItemListContainer'

function NavBar ()  {
  return (
    <div>
          
            <Navbar bg="primary" variant="dark">
                <Container>
                
                <Navbar.Brand href="#home">Choco-Late</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Empresariales</Nav.Link>
                <Nav.Link href="#pricing">Eventos</Nav.Link>
                
                </Nav>
                <CartWidget/>
                </Container>
            </Navbar>
          

    </div>
  )
}

export default NavBar;