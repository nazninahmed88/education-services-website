import React from 'react';
import './Home.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import Course from '../../Course/Course';


const Home = () => {
    const [crouses , setcourses] = useState([]);
    useEffect(()=>{
        fetch('./courses.json')
        .then(res=>res.json())
        .then(data=> setcourses(data))
    },[])
    return (
        <div>

<Carousel className='pt-5 w-75 mx-auto'>
  <Carousel.Item>
    <img
      className="d-block w-50 mx-auto"
      src="./book2.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50 mx-auto"
      src="./book1.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50 mx-auto"
      src="./book3.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    
     
        <div className='container'>
       <Row xs={1} md={2} mt={5} className="g-5 pt-5">
       {
           crouses.map(crouse=> <Course crouse={crouse}> </Course>)
       }
    </Row>


    </div>
    
      </div>

    );
};

export default Home;