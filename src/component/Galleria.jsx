import React, { useState, useEffect } from 'react';
import imagesData from './img.json';
import { Container, Row, Col,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Galleria = () => {
  const [images, setImages] = useState(null);
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  // Carica le immagini dal JSON una sola volta utilizzando useEffect
  useEffect(() => {
    setImages(imagesData);
  }, []); // L'array vuoto come secondo argomento assicura che useEffect venga eseguito solo una volta

  if (!images || images.length === 0) {
    return <div>Nessuna immagine disponibile.</div>;
  }

  // Divide l'array di immagini in gruppi di tre
  const imageGroups = [];
  for (let i = 0; i < images.length; i += 3) {
    imageGroups.push(images.slice(i, i + 3));
  }

  const nextGroup = () => {
    setCurrentGroupIndex(prevIndex => (prevIndex === imageGroups.length - 1 ? 0 : prevIndex + 1));
  };

  const prevGroup = () => {
    setCurrentGroupIndex(prevIndex => (prevIndex === 0 ? imageGroups.length - 1 : prevIndex - 1));
  };

  return (
    <Container style={{ padding: '2%' }}>
      <h1 style={{textAlign:'center', padding:'1%',color:'#c13e4f',fontFamily: 'Fredericka the Great, cursive'}}>Galleria </h1>
      <Row>
        <Col md={1} className="d-flex justify-content-center align-items-center"><Button variant="outline-danger" onClick={prevGroup}>←</Button></Col>
        <Col>
          <div className="d-flex justify-content-center align-items-center">
            {imageGroups[currentGroupIndex].map((imageUrl, index) => (
              <div key={index} style={{ marginRight: '10px' }}>
                <img src={imageUrl} alt={`Immagine ${index + 1}`} style={{ maxWidth: '100%' }} />
              </div>
            ))}
          </div>
        </Col>
        <Col md={1} className="d-flex justify-content-center align-items-center"><Button variant="outline-danger" onClick={nextGroup}>→
</Button></Col>
      </Row>
    </Container>
  );
};

export default Galleria;

