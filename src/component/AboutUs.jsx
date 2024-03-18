import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import spirito from '../img/la-bella-mbriana1.jpeg';


const AboutUs = () => {
   return (
      <Container fluid style={{ padding: '1%',backgroundColor:'#73a44d '}}>
         <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Col xs={12} md={9} style={{ textAlign: 'start',padding: '1%' }}>
               <h1 style={{color:'#21130d',fontFamily: 'Fredericka the Great, cursive'}}>Bella 'Mbriana</h1>
               <p style={{color:'white'}}>La Bella 'Mbriana, nella credenza popolare napoletana, è lo spirito benefico della casa. Deve il proprio nome alla meridiana, simbolo del sole e del calore domestico, e convive col Munaciello, spirito bizzarro, a volte positivo, altre dispettoso. Contrariamente alla Janara, quello della Bella 'Mbriana è uno spirito buono che ama stare in compagnia. Anch'ella, come la prima, ha l'abitudine d'introdursi nelle abitazioni altrui: i suoi intenti sono però profondamente diversi. La Bella 'Mbriana viene spinta da un fine nobile e benevolo, quello di portare armonia in casa. Come tutti gli spiriti, però, è un po' capricciosa e tende a favorire solo le persone che le sono simpatiche. Chi riceve la sua visita deve sentirsi molto onorato: la Bella 'Mbriana aiuta unicamente le persone buone e grate per quel che hanno, quello che invece la indispettisce è udire affermazioni contro la famiglia o la casa: in sua presenza non bisogna mai dirsi scontenti della propria abitazione o lamentarne i difetti poiché lo spettro della donna renderebbe l'ambiente ancor meno ospitale.</p>
            </Col>
            <Col xs={12} md={2} style={{ display: 'flex', justifyContent: 'center' }}>
               <Image src={spirito} style={{ maxWidth: '100%', height: 'auto',padding:'1%' }} />
            </Col>
         </Row>
      </Container>
   );
};

export default AboutUs;

