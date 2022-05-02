import React from 'react';
import { Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Navbars from '../HomePage/Navbars/Navbars';

const Congrates = () => {
  const {state} = useLocation()
  return (
    <section>
        <Navbars />
        <Row className='container mx-auto'>
            <h1 className='text-center fw-bold'>Congratulation !</h1>
            <h4 className='text-center'>You Completed The School Quiz</h4>
            <p>Subject Name: </p>
            <p>Quize Type: </p>
            <p>Total Marks: </p>
        </Row>  
    </section>
  );
}

export default Congrates;
