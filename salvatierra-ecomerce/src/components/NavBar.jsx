import {Link} from 'react-router-dom'

import CartWidget from "./CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar () {
    return (
        <>
          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">Lana de la Abuela</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Link to="/">Inicio</Link>
                  <NavDropdown title="Categorias" id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Remeras
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Gorras
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Pantalones</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Contacto
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <CartWidget/>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
    )
}

export default NavBar