import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import menuData from '../Menu.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const PizzeDolci = ({aggiungiAlCarrello}) => {
    const [prodotti, setProdotti] = useState([]);
   
    useEffect(() => {
        // Assicurati che menuData contenga un array di oggetti
        if (Array.isArray(menuData.prodotti)) {
            const prodottiFiltered = menuData.prodotti.filter(item => item.categoria === "Dolci");
            setProdotti(prodottiFiltered);
        } else {
            console.error("Il file JSON non contiene un array di prodotti");
        }
    }, []);

  

    return (
        <Container fluid style={{ textAlign: 'start', padding: '5%', backgroundColor: '#F9FF8B' }}>
            <Row>
                <Col>
                    <h1 style={{fontFamily: 'Fredericka the Great, cursive'}}>Menu</h1>
                    <h2>Pizze Dolci</h2>
                </Col>
                <hr></hr>
            </Row>
            {prodotti.map((prodotto, index) => (
                <Row key={index} style={{ marginBottom: '20px' }}>
                    <Col md={6}>
                        <h4>{prodotto.nome}</h4>
                    </Col>
                    <Col md={6} style={{ textAlign: 'right' }}>
                        <p>€{prodotto.prezzo}</p>
                    </Col>
                    <Col md={12}>
                        {prodotto.ingredienti && <p>{prodotto.ingredienti}</p>}
                    </Col>
                    <Col md={12}>
                        <Button variant="outline-warning" onClick={() => aggiungiAlCarrello(prodotto)}>Aggiungi al Carrello</Button>
                    </Col>
                </Row>
            ))}
          
        </Container>
    );
};

export default PizzeDolci;


