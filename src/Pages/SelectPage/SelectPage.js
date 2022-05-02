import React, { useState } from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const SelectPage = () => {
    const navigate = useNavigate();
    const [subject, setSubject] = useState('');
    const [show, setShow] = useState(false);

    const NavigateHandler = (type) => {
        navigate('/QuizPage', { state:{type, subject}})
    }
  return (
    <div>
        <h1 className='text-center my-4'>Choose Quiz Subject</h1>
        <Row className='container mx-auto gap-3 justify-content-center'>
        {
            show && <button onClick={() =>{
                setShow(false)
                setSubject('')
            }} className='btn btn-warning text-dark fw-bold fs-4'>Go Back</button>
        }
  
            <Col lg={3} md={6} sm={12}>
                {
                    subject === 'Math' || subject === 'Science' ? '' :           <div onClick={() => {
                        setSubject('GS')
                        setShow(true)
                    }} className='gs_div subject_div'>
                    General Knowledge</div>
                }
            </Col>
            <Col lg={3} md={6} sm={12}>
                {
                    subject === 'GS' || subject === 'Math' ? '' : <div onClick={() => {
                        setSubject('Science')
                        setShow(true)
                    }}  className='science_div subject_div'>
                    Science
                </div>
                }
            </Col>
            <Col lg={3} md={6} sm={12}>
                {
                    subject === 'GS' || subject === 'Science' ? '' :              <div onClick={() => {
                        setSubject('Math')
                        setShow(true)
                    }} className='math_div subject_div'>
                    Math</div>
                }

            </Col>
        </Row>
       {
           show &&  <Row className='container mx-auto gap-3 justify-content-center my-4'>
           <Col lg={3} md={6} sm={12}>
               <div onClick={() => NavigateHandler('Easy')} className='easy_div type_div'>
                   EASY
               </div>
           </Col>
           <Col lg={3} md={6} sm={12}>
               <div onClick={() => NavigateHandler('Medium')} className='meduim_div type_div'>
                   MEDIUM
               </div>
           </Col>
           <Col lg={3} md={6} sm={12}>
               <div onClick={() => NavigateHandler('Hard')}  className='hard_div type_div'>
                  HARD
               </div>
           </Col>
       </Row>
       }
   </div>
  );
}

export default SelectPage;
