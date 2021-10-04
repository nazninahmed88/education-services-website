import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services , setservices] = useState([]);
    useEffect(()=>{
        fetch('./service.json')
        .then(res=>res.json())
        .then(data => setservices(data))
    },[])
    return (
        
        <div className='container'>
            <Row xs={1} md={3} className="g-5 pt-5">
            {
               services.map(service=> <Service service={service}> </Service>)
            }
        </Row>
        </div>
       
    );
};

export default Services;