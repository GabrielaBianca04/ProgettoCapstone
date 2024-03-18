import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Ordine = ({ carrello, rimuoviDalCarrello }) => {
    const [prezzoTotale, setPrezzoTotale] = useState(0);

    const calcolaPrezzoTotale = () => {
        if (carrello && Array.isArray(carrello)) {
            let totale = 0;
            carrello.forEach(prodotto => {
                totale += prodotto.prezzo;
            });
            setPrezzoTotale(totale);
        } else {
            console.error("Il carrello non è valido o non contiene un array di prodotti");
            setPrezzoTotale(0); 
        }
    };
    

 
    useEffect(() => {
        calcolaPrezzoTotale();
    }, [carrello]); 
    
    const handleClickRimuoviDalCarrello = (indice) => {
        rimuoviDalCarrello(indice);
        calcolaPrezzoTotale();
    };

    const handleCancellaOrdine = () => {
        // Svuota il carrello reimpostando lo stato a un array vuoto
        rimuoviDalCarrello([]);
        setPrezzoTotale(0);
    };

    return (
        <div className="container-fluid" style={{ padding: '5%' }}>
            <h1 style={{fontFamily: 'Fredericka the Great, cursive'}}>Il tuo ordine:</h1>
            <table style={{ width: '100%', padding: '5%' }}>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'start' }}>Prodotto</th>
                        <th style={{ textAlign: 'end' }}>Prezzo</th>
                        <th style={{ textAlign: 'end' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {carrello && carrello.map((prodotto, index) => (
                        <tr key={index}>
                            <td style={{ textAlign: 'start' }}>{prodotto.nome}</td>
                            <td style={{ textAlign: 'end' }}>${prodotto.prezzo.toFixed(2)}</td>
                            <td style={{ textAlign: 'end' }}>
                                <Button variant="outline-danger" onClick={() => handleClickRimuoviDalCarrello(index)}>Rimuovi</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <hr />
            <div className="cart-summary" style={{ textAlign: 'end', paddingRight: '5%' }}>
                <div className="total-price" style={{ marginBottom: '1%' }}>Prezzo Totale: ${prezzoTotale.toFixed(2)}</div>
                <div>
                    <Button variant="danger" style={{ marginBottom: '1%', marginRight:'1%' }} onClick={handleCancellaOrdine}>Cancella ordine</Button>
                    <Button variant="success" style={{ marginBottom: '1%' }}>Paga</Button>
                </div>
                <div>
                    <label htmlFor="booking-time">Orario Prenotazione</label>
                    <input type="time" id="booking-time" required />
                </div>
            </div>
        </div>
    );
}

export default Ordine;
