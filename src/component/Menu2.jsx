import { Card, Container } from "react-bootstrap";
import PizzeRosse from "./PizzeRosse";
import {Row,Col,Image,Button} from "react-bootstrap";
import { useState } from "react";
import pizzeRosse from '../img/PizzeRosse.jpg'
import PizzeSpecial from "./PizzeSpecial";
import PizzeBianche from "./PizzeBianche";
import PizzeDolci from "./PizzeDolci";
import Antipasti from "./Antipasti";
import Bevande from "./Bevande";
import pizzeSpecial from'../img/PizzeSpecial.jpg';
import pizzeBianche from '../img/PizzeBianche.jpg';
import pizzeDolci from '../img/PizzeDolci.jpg';
import antipasti from '../img/Fritti.jpeg';
import bevande from '../img/Bevande.jpg';

const Menu2 = () => {
    const [showPizzeRosse, setShowPizzeRosse] = useState(false);
    const [showPizzeBianche, setShowPizzeBianche] = useState(false);
    const [showPizzeSpecial, setShowPizzeSpecial] = useState(false);
    const [showPizzeDolci, setShowPizzeDolci] = useState(false);
    const [showAntipasti, setShowAntipasti] = useState(false);
    const [showBevande, setShowBevande] = useState(false);
  
    const handleRossoClick = () => {
      setShowPizzeRosse(prevState => !prevState); 
    };

    const handleBiancoClick = () => {
        setShowPizzeBianche(prevState => !prevState); 
      };

      const handleSpecialClick = () => {
        setShowPizzeSpecial(prevState => !prevState); 
      };

      const handleDolceClick = () => {
        setShowPizzeDolci(prevState => !prevState); 
      };

      const handleAntipastoClick = () => {
        setShowAntipasti(prevState => !prevState); 
      };

      const handleBevandeClick = () => {
        setShowBevande(prevState => !prevState); 
      };
  
  

    return (
        <Container>
            <Row>
                <Col>
                <Card style={{width:'18rem',height:'auto'}}>
                <Image src={pizzeRosse} alt="PizzeRosse" className="img-fluid"  />
                <Button  onClick={handleRossoClick}>{showPizzeRosse ? 'Chiudi' : 'PizzeRosse'}</Button></Card>
                </Col>

                <Col>
                <Card style={{width:'18rem',height:'auto'}}>
                <Image src={pizzeSpecial} alt="PizzeSpecial" className="img-fluid" />
                <Button  onClick={handleSpecialClick}>{showPizzeSpecial? 'Chiudi' : 'PizzeSpecial'}</Button></Card>
                </Col>

                <Col>
                <Card style={{width:'18rem',height:'auto'}}>
                <Image src={pizzeBianche} alt="PizzeBianche" className="img-fluid"  />
                <Button   onClick={handleBiancoClick}>{showPizzeSpecial ? 'Chiudi' : 'PizzeBianche'}</Button></Card>
                </Col>
            </Row>
            <Row>
                <Col>
                <Card style={{width:'18rem',height:'auto'}}>
                <Image src={pizzeDolci} alt="PizzeDolci" className="img-fluid" />
                <Button  onClick={handleDolceClick}>{showPizzeDolci ? 'Chiudi' : 'PizzeDolci'}</Button></Card>
                </Col>

                <Col>
                <Card style={{width:'18rem',height:'auto'}}>
                <Image src={antipasti} alt="Antipasti" className="img-fluid"  />
                <Button   onClick={handleAntipastoClick}>{showAntipasti ? 'Chiudi' : 'Antipasti&Fritti'}</Button></Card>
                </Col>

                <Col>
                <Card style={{width:'18rem',height:'auto'}}>
                <Image src={bevande} alt="Bevande" className="img-fluid"  />
                <Button   onClick={handleBevandeClick}>{showBevande ? 'Chiudi' : 'Bevande'}</Button></Card>
                </Col>
            </Row>
            {showPizzeRosse && <PizzeRosse />}
            {showPizzeSpecial && <PizzeSpecial />}
            {showPizzeBianche && <PizzeBianche />}
            {showPizzeDolci && <PizzeDolci />}
            {showAntipasti && <Antipasti />}
            {showBevande && <Bevande />}

        </Container>
    );
};

export default Menu2;
