import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import menuData from '../Menu.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const Bevande = ({ aggiungiAlCarrello }) => {
    const [prodotti, setProdotti] = useState([]);

    useEffect(() => {

        if (Array.isArray(menuData.prodotti)) {
            const prodottiFiltered = menuData.prodotti.filter(item => item.categoria === "Bevande");
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
                    <h2>Bevande</h2>
                </Col>
                <hr></hr>
            </Row>
            {prodotti.map((prodotto, index) => (
                <Row key={index} className="mb-3">
                    <Col xs={8}>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h4>{prodotto.nome}</h4>
                                {prodotto.ingredienti && <p>{prodotto.ingredienti}</p>}
                            </div>
                            <div>
                                <p>€{prodotto.prezzo}</p>
                                <Button variant="outline-warning" onClick={() => aggiungiAlCarrello(prodotto)}>Aggiungi al Carrello</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            ))}
        </Container>
    );
};

export default Bevande;
