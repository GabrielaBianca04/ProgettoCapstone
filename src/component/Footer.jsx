import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
        <Container fluid style={{ width: '100%', border: '0', padding: '10px',backgroundColor:'rgb(35,29,33)',color:'white' }}>
          <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d48092.92877715007!2d14.37313909664263!3d41.11688304770893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x133a517ea996d6b1%3A0xec7288a1af472659!2sContrada%20Sant&#39;Anna%2C%2082019%20Sant&#39;Agata%20de&#39;%20Goti%20BN!3m2!1d41.096689999999995!2d14.454395199999999!5e0!3m2!1sit!2sit!4v1710322940987!5m2!1sit!2sit"
width="100%"
        height="100%"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
 


 
     <div style={{textAlign:'center',marginTop:'2%'}}>
      <p>Telefono: 333-345667</p>
      <p>Indirizzo: <a href='https://www.google.com/maps/place//data=!4m2!3m1!1s0x133a517ea996d6b1:0xec7288a1af472659?sa=X&ved=1t:8290&ictx=111&cshid=1710442655552211'>Contrada Sant'Anna, 82019 Sant'Agata de' Goti BN</a></p>
        <p>Seguici su TikTok: <a href='https://www.tiktok.com/@bellambrianamastro5'>@bellambrianamastro5</a></p>
      <p>Seguici su Facebook: <a href='https://tr-tr.facebook.com/paolo.mastrocinque.731/'>@paolo.mastrocinque.731</a></p>
      <p>© 2024 Pizzeria Italiana. Tutti i diritti riservati.</p>
</div>
    </Container>




    </footer>
  );
};

export default Footer;


