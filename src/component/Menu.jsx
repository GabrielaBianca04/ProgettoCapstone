import React from 'react';
import { Button, Card, CardBody, Col, Row, Image, Container } from 'react-bootstrap';
import PizzeRosse from '../img/PizzeRosse.jpg';
import PizzeBianche from '../img/PizzeBianche.jpg';
import PizzeSpecial from '../img/PizzeSpecial.jpg';
import PizzeDolci from '../img/PizzeDolci.jpg';
import Antipasti from '../img/Fritti.jpeg';
import Bevande from '../img/Bevande.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Menu = ({ category }) => {
  const handleClick = (category) => {
    console.log(`Hai cliccato sul button per la categoria: ${category}`);
  };

  const containerStyle = {
    backgroundColor: '#231d21',
    padding: '5%', 
    alignItems:'center',
  };
  

  return (
    <Container fluid style={containerStyle}>
     
      <Row className="justify-content-center" style={{marginLeft:'3%'}} > 
      <div className="text-center" style={{color:'#2AAB57'}}>
        <h1 style={{fontFamily: 'Fredericka the Great, cursive'}}>Menù</h1>
        <p>Scopri le nostre specialità</p>
      </div>
        <Col xs={12} md={4}>
          <Card  style={{ textAlign: 'center', width: '18rem', height: 'auto',margin:'1%',backgroundColor:'transparent',border:'0', }}>
            <Image src={PizzeRosse} alt="PizzeRosse" className="img-fluid" />
            <CardBody>
              <Link to='/pizze-rosse'>
              <Button  variant="success"  onClick={() => handleClick('PizzeRosse')} className="btn "> Pizze Rosse</Button></Link>
            </CardBody>
          </Card>
        </Col>
       
        <Col xs={12} md={4}>
          <Card style={{ textAlign: 'center', width: '18rem', height: 'auto',margin:'1%',backgroundColor:'transparent',border:'0'  }}>
            <Image src={PizzeSpecial} alt="PizzeSpecial" className="img-fluid" />
            <CardBody>
            <Link to="/pizze-special">
  <Button  variant="success"  onClick={() => handleClick('PizzeSpecial')} className="btn "> Pizze Special</Button>
</Link>
            </CardBody>
          </Card>
        </Col> 
        <Col xs={12} md={4}>
          <Card style={{ textAlign: 'center', width: '18rem', height: 'auto', margin:'1%',backgroundColor:'transparent',border:'0'  }}>
            <Image src={PizzeBianche} alt="PizzeBianche" className="img-fluid" />
            <CardBody>
              <Link to='pizze-bianche'>
              <Button  variant="success"  onClick={() => handleClick('PizzeBianche')} className="btn "> Pizze Bianche</Button></Link>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center" style={{marginLeft:'3%'}}>
        <Col xs={12} md={4}>
          <Card style={{ textAlign: 'center', width: '18rem', height: 'auto',margin:'1%',backgroundColor:'transparent',border:'0'  }}>
            <Image src={PizzeDolci} alt="PizzeDolci" className="img-fluid" />
            <CardBody>
              <Link to='pizze-dolci'>
              <Button  variant="success"  onClick={() => handleClick('PizzeDolci')} className="btn "> Pizze Dolci</Button></Link>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card style={{ textAlign: 'center', width: '18rem', height: 'auto', margin:'1%',backgroundColor:'transparent',border:'0'  }}>
            <Image src={Antipasti} alt="Antipasti&Fritti" className="img-fluid" />
            <CardBody>
              <Link to='antipasti'>
              <Button  variant="success"  onClick={() => handleClick('Antipasti&Fritti')} className="btn "> Antipasti & Fritti</Button></Link>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card style={{ textAlign: 'center', width: '18rem', height: 'auto', margin:'1%',backgroundColor:'transparent',border:'0'  }}>
            <Image src={Bevande} alt="Bevande" className="img-fluid" />
            <CardBody>
              <Link to="/bevande">
                <Button  variant="success"  onClick={() => handleClick('Bevande')} className="btn "> Bevande </Button>
              </Link>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;
