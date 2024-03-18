import React, { useState } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import logo from '../img/Logo.jpg';
import BookingForm from './BookingForm';
import ContactUs from './ContactUs';

const Header = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const handleBookingClick = () => {
    setShowBookingForm(prevState => !prevState);
  };

  const handleContactClick = () => {
    setShowContactForm(prevState => !prevState);
  };

  return (
    <Container fluid style={{ padding: '3%' }}>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <Image fluid src={logo} />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <Button variant="warning" href='https://drive.google.com/file/d/1kjSifa8506_OAB91n0IO-glvH7oGZ3am/view' className='me-2'>Menu</Button>
          <Button variant='success' className='me-2' onClick={handleBookingClick}>{showBookingForm ? 'Chiudi Prenotazione' : 'Prenota'}</Button>
          <Button variant='danger' onClick={handleContactClick}>{showContactForm ? 'Chiudi' : 'Contattaci'}</Button>
        </Col>
      </Row>

      {showBookingForm && <BookingForm />}
      {showContactForm && <ContactUs />}
    </Container>
  );
};

export default Header;


