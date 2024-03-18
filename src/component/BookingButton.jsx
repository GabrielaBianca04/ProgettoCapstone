import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importa Link per il routing interno

const BookingButton = () => {
  return (
    <Link to="/booking-form">
      <Button variant="primary">
        Prenota un tavolo
      </Button>
    </Link>
  );
};

export default BookingButton;
