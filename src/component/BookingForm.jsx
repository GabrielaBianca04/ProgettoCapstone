import React from 'react';
import { Button, Form, FormGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const BookingForm = () => {
  return (
    <div style={{padding:'5%',backgroundColor:'#C6FF87',color:'#21130d'}}>
      <h2 style={{fontFamily: 'Fredericka the Great, cursive'}}>Prenota un tavolo</h2>
      <Form action="submit.php" method="post">
        <FormGroup>
          <label htmlFor="nome">Nome:</label>
          <input type="text" className="form-control" id="nome" name="nome" required />
        </FormGroup>
        <FormGroup>
          <label htmlFor="numeroPersone">Numero Persone:</label>
          <input type="number" className="form-control" id="numeroPersone" name="numeroPersone" required />
        </FormGroup>
        <FormGroup>
          <label htmlFor="data">Giorno:</label>
          <input type="date" className="form-control" id="data" name="data" required />
        </FormGroup>
        <FormGroup>
          <label htmlFor="orario">Ora:</label>
          <input type="time" className="form-control" id="orario" name="orario" required />
        </FormGroup>
        <Button variant="success" type="submit" className="btn mt-2" style={{border:'0'}}>Prenota</Button>
      </Form>
    </div>
  );
};

export default BookingForm;
