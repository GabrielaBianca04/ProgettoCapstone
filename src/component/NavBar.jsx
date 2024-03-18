import React, { useState } from 'react';
import { Button, Col, Container, Nav, Navbar, Offcanvas,Form , Row} from 'react-bootstrap';
import Ordine from './Ordine';

const NavBar = ({ carrello, rimuoviDalCarrello }) => {
  const [showOrdine, setShowOrdine] = useState(false);

  const handleCloseOrdine = () => setShowOrdine(false);
  const handleShowOrdine = () => setShowOrdine(true);

  return (
    <Navbar expand="lg" style={{backgroundColor:'rgb(35,29,33)',padding:'1%'}} >
      <Container fluid>
        <Navbar.Brand href="#home" style={{color:'white'}}>Bella 'Mbriana</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="me-auto"></Nav>

          <Button variant="success" onClick={handleShowOrdine}>
            Ordine
          </Button>
        </Navbar.Collapse>
      </Container>

      <Offcanvas show={showOrdine} onHide={handleCloseOrdine} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Il tuo ordine</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Ordine carrello={carrello} rimuoviDalCarrello={rimuoviDalCarrello} />
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default NavBar;
