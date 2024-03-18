import React, { useState } from 'react';
import AddReviewForm from './AddReviewForm';
import { Col, Row, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Funzione per generare le stelle in base al punteggio
const renderStars = (score) => {
  const totalStars = 5;
  const filledStars = Math.floor(score);
  const halfStar = score - filledStars >= 0.5 ? 1 : 0;
  const emptyStars = totalStars - filledStars - halfStar;

  const stars = [];

  // Filled stars
  for (let i = 0; i < filledStars; i++) {
    stars.push(<span key={i}>&#9733;</span>);
  }

  // Half star
  if (halfStar) {
    stars.push(<span key={filledStars + 1}>&#9734;</span>);
  }

  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<span key={filledStars + i + 2}>&#9734;</span>);
  }

  return stars;
};

const ReviewCard = ({ name, text, score }) => (
  <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #73a44d', borderRadius: '5px', color: 'white' }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <div style={{ width: '70px', height: '50px', borderRadius: '100%', backgroundColor: '#73a44d', marginRight: '10px' }}></div>
      <div>
        <h3>{name}</h3>
        <p>{text}</p>
        <p>Score: {renderStars(score)}</p>
      </div>
    </div>
  </div>
);

const Reviews = () => {
  const reviewsData = [
    { name: 'John', text: 'Great experience! The food was delicious.', score: 4.5 },
    { name: 'Alice', text: 'Excellent service and atmosphere.', score: 5 },
    { name: 'Mike', text: 'Average experience, could be better.', score: 3 },
    { name: 'Sarah', text: 'Fantastic restaurant, highly recommended!', score: 5 },
    { name: 'Chris', text: 'Good food, decent service.', score: 4 },
    { name: 'Emily', text: 'Wonderful place with amazing food!', score: 4.8 },
    { name: 'David', text: 'Friendly staff and great ambiance.', score: 4.7 },
    { name: 'Jessica', text: 'Delicious food and quick service.', score: 4.5 },
    { name: 'Michael', text: 'Lovely restaurant with a cozy atmosphere.', score: 4.3 },
    { name: 'Sophia', text: 'Enjoyable dining experience with tasty dishes.', score: 4.9 }
  ];

  const [showReviewForm, setShowReviewForm] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalReviews = reviewsData.length;

  const handleReviewClick = () => {
    setShowReviewForm(prevState => !prevState);
  };

  const goToNextReviews = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % totalReviews);
  };

  const goToPreviousReviews = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + totalReviews) % totalReviews);
  };

  return (
    <Container fluid style={{ textAlign: 'center', padding: '2%', backgroundColor: 'rgb(75,67,65)' }}>
      <h1 style={{ color: '#2AAB57', marginBottom: '0', fontFamily: 'Fredericka the Great, cursive' }}>Recensioni</h1>
      <p style={{ color: '#2AAB57' }}>Scopri cosa dicono di noi</p>

      <Row className='d-flex' style={{ marginBottom: '20px', justifyContent: 'center' }}>
        <Col xs={1}>
          <Button variant="outline-success" onClick={goToPreviousReviews}>← </Button>
        </Col>
        {reviewsData.slice(currentIndex, currentIndex + 3).map((review, index) => (
          <Col xs={12} md={3} key={index}>
            <ReviewCard {...review} />
          </Col>
        ))}
        <Col xs={1}>
          <Button variant="outline-success" onClick={goToNextReviews}> →</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="success" size="lg" onClick={handleReviewClick} style={{ width: '100%' }}>{showReviewForm ? 'Chiudi' : 'Lasciaci una recensione'}</Button>
        </Col>
      </Row>
      {showReviewForm && <AddReviewForm />}
    </Container>
  );
};

export default Reviews;
