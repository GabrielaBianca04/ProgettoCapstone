import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';

const AddReviewForm = () => {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Title:', title);
    console.log('Name:', name);
    console.log('Text:', text);
    console.log('Score:', score);

    // Ripulisci i campi del modulo
    setTitle('');
    setName('');
    setText('');
    setScore('');
  };

  return (
    <Container fluid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white',padding:'3%' }}>
      <form onSubmit={handleSubmit} style={{ width: '50%', margin: '0 auto' }}>
        <h2 style={{fontFamily: 'Fredericka the Great, cursive'}}>Lasciaci una recensione</h2>
        <div>
          <label htmlFor="title">Titolo:</label>
          <input style={{ backgroundColor: '#73a44d', margin: '3px', width: '100%' }} type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="name">Nome:</label>
          <input style={{ backgroundColor: '#73a44d', margin: '3px', width: '100%' }} type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="text">Recensione:</label>
          <textarea style={{ backgroundColor: '#73a44d', margin: '3px', width: '100%' }} id="text" value={text} onChange={(e) => setText(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="score">Punteggio:</label>
          <input style={{ backgroundColor: '#73a44d', margin: '3px', width: '100%' }} type="number" id="score" value={score} onChange={(e) => setScore(e.target.value)} min="0" max="5" step="0.1" required />
        </div>
        <Button  variant="success" style={{  margin: '3px' }} type="submit">Invia</Button>
      </form>
    </Container>
  );
};

export default AddReviewForm;
