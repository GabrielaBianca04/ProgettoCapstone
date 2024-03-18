import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import menuData from '../Menu.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const PizzeRosse = ({aggiungiAlCarrello}) => {
    const [prodotti, setProdotti] = useState([]);
   
  

    useEffect(() => {
        // Assicurati che menuData contenga un array di oggetti
        if (Array.isArray(menuData.prodotti)) {
            const prodottiFiltered = menuData.prodotti.filter(item => item.categoria === "Pizze Rosse");
            setProdotti(prodottiFiltered);
        } else {
            console.error("Il file JSON non contiene un array di prodotti");
        }
    }, []);

  
    return (
        <Container fluid style={{ textAlign: 'start', padding: '5%', backgroundColor: '#F9FF8B' }}>
            
      <Row>
                <Col>
                    <h1>Menu</h1>
                    <h2>Pizze Rosse</h2>
                </Col>
                <hr></hr>
            </Row>
            {prodotti.map((prodotto, index) => (
                <Row key={index} style={{ marginBottom: '20px' }}>
                    <Col md={6}>
                        <h3>{prodotto.nome}</h3>
                    </Col>
                    <Col md={6} style={{ textAlign: 'right' }}>
                        <p>€{prodotto.prezzo}</p>
                    </Col>
                    <Col md={12}>
                        <p>{prodotto.ingredienti}</p>
                    </Col>
                    <Col md={12}>
                        <Button variant="outline-warning" onClick={() => aggiungiAlCarrello(prodotto)}>Aggiungi al Carrello</Button>
                    </Col>
                </Row>
            ))}
        </Container>
    );
};


export default PizzeRosse;
