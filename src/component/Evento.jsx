import React, { useState } from 'react';
import jsonData from '../Eventi.json';
import { Button, Col, Container, Row } from 'react-bootstrap';
function Evento() {
  // Utilizza lo stato per tenere traccia dell'indice dell'evento attualmente visualizzato
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  // Metodo per passare all'evento successivo
  const nextEvent = () => {
    if (currentEventIndex < jsonData.length - 1) {
      setCurrentEventIndex(currentEventIndex + 1);
    }
  };

  // Metodo per passare all'evento precedente
  const prevEvent = () => {
    if (currentEventIndex > 0) {
      setCurrentEventIndex(currentEventIndex - 1);
    }
  };

  // Ottieni l'evento corrente utilizzando l'indice corrente
  const currentEvent = jsonData[currentEventIndex];

  return (
    <Container className='text-center p-4'>
        <Row className="row justify-content-center align-items-center">
            <Col md={1}> <Button variant="outline-warning" onClick={prevEvent}>←</Button></Col>
            <Col md={5}><h2>{currentEvent.titolo}</h2>
          <p>{currentEvent.descrizione}</p>
          <p>Data: {currentEvent.data}</p></Col>
            <Col md={3}> <img src={currentEvent.immagine} alt={currentEvent.titolo} style={{ width: '18rem' }} /></Col>
            <Col md={1}><Button variant="outline-warning" onClick={nextEvent}>→
</Button></Col>
        </Row>
    </Container>
  );
}

export default Evento;
