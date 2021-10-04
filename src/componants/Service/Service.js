import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const {name,resources ,img ,price, videoDuration} =props.service
    return (
      <Col>
      <Card className='course-container'>
        <Card.Img  variant="top" src={img} />
        <Card.Body>
          <Card.Title> <h3> {name}</h3> </Card.Title>
          <Card.Text> Resources :  {resources}</Card.Text>
          <p> Duration: {videoDuration} </p>
          <h5> Price:${price}</h5>
          <button className='regular-btn' > Enroll</button>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Service;