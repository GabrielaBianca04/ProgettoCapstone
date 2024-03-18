import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import AboutUs from './component/AboutUs';
import PhotoGallery from './component/PhotoGallery';
import Menu from './component/Menu'; // Importa il componente Menu
import Reviews from './component/Reviews';
import Footer from './component/Footer';
import NavBar from './component/NavBar';

import Galleria from './component/Galleria';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PizzeBianche from './component/PizzeBianche';
import PizzeRosse from './component/PizzeRosse';
import PizzeSpecial from './component/PizzeDolci';
import Bevande from './component/Bevande';
import PizzeDolci from './component/PizzeDolci';
import Antipasti from './component/Antipasti';
import BookingForm from './component/BookingForm';

import Evento from './component/Evento';
import Menu2 from './component/Menu2';
import Ordine from './component/Ordine';


function App() {
  const [carrello, setCarrello] = useState([]);

  // Funzione per aggiungere un prodotto al carrello
  const aggiungiAlCarrello = (prodotto) => {
    setCarrello([...carrello, prodotto]);
  };

  // Funzione per rimuovere un prodotto dal carrello
  const rimuoviDalCarrello = (indice) => {
    const nuovoCarrello = [...carrello];
    nuovoCarrello.splice(indice, 1);
    setCarrello(nuovoCarrello);
  };

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar carrello={carrello} rimuoviDalCarrello={rimuoviDalCarrello} />
        <Header id="header" />
        <AboutUs />
        <PhotoGallery />
        <Routes>
          <Route id='Menu' path="/" element={<Menu />} />
          <Route id='PizzeRosse' path="/pizze-rosse" element={<PizzeRosse aggiungiAlCarrello={aggiungiAlCarrello} />} />
          <Route id='PizzeBianche' path="/pizze-bianche" element={<PizzeBianche aggiungiAlCarrello={aggiungiAlCarrello} />} />
          <Route id='PizzeSpecial' path="/pizze-special" element={<PizzeSpecial aggiungiAlCarrello={aggiungiAlCarrello} />} />
          <Route id='Bevande' path="/bevande" element={<Bevande aggiungiAlCarrello={aggiungiAlCarrello} />} />
          <Route id='PizzeDolci' path="/pizze-dolci" element={<PizzeDolci aggiungiAlCarrello={aggiungiAlCarrello} />} />
          <Route id='Antipasti' path='antipasti' element={<Antipasti aggiungiAlCarrello={aggiungiAlCarrello} />} />
        </Routes>
       
          <Reviews id='reviews' /> 
           <Galleria id='gallery' />  
        <Footer />
        
        
      </BrowserRouter>
    </div>
  );
}

export default App;

