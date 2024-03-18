import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Photo1 from '../img/Bandidos.jpg';
import Photo2 from '../img/Progetto senza titolo (11).png';
import Photo3 from '../img/Tartufo.jpg';
import Photo4 from '../img/Progetto senza titolo (13).png';
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const containerStyle = {
  margin: 0, 
  padding: 0, 
};

const PhotoGallery = () => {
  return (
    <Container fluid style={containerStyle}>
      <Row style={{ margin: 0, padding: 0 }}> 
        <Image className="img-fluid" src={Photo1} fluid style={{ width: '25%', height: 'auto', margin: 0, padding: 0 }} /> {/* Aggiungi margin: 0 e padding: 0 anche alle immagini */}
        <Image className="img-fluid" src={Photo2} fluid style={{ width: '25%', height: 'auto', margin: 0, padding: 0 }} />
        <Image className="img-fluid" src={Photo3} fluid style={{ width: '25%', height: 'auto', margin: 0, padding: 0 }} />
        <Image className="img-fluid" src={Photo4} fluid style={{ width: '25%', height: 'auto', margin: 0, padding: 0 }} />
      </Row>
    </Container>
  );
};

export default PhotoGallery;
