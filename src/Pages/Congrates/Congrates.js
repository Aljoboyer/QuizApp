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
            <h4 className='text-center'>You Completed The ISRO Quiz</h4>
            <p>Subject Name: {state.subject}</p>
            <p>Quize Type: {state.quizType}</p>
            <p>Total Marks: {state.marks}</p>
        </Row> 
        <button className='btn btn-primary' >Download Certifiacte</button>
    </section>
  );
}

export default Congrates;
