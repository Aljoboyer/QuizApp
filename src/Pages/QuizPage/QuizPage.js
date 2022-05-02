import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useLocation , useNavigate} from 'react-router-dom';
import Navbars from '../HomePage/Navbars/Navbars';

const QuizPage = () => {
    const navigate = useNavigate()
    const {state} = useLocation()
    const [slices, setSlices] = useState(0);
    const [marks, setMarks] = useState(0);
    const [quizes, setQuizes] = useState([]);
    const [option, setOption] = useState('');
    const [quizShow, setQuizShow] = useState(true);
    const [due, setDue] = useState(10)
    const [timer, setTimer] = useState(10000)
    console.log('this is ', state)
    useEffect(() => {
        fetch(`http://localhost:5000/teacher/GetAllQuiz?subject=${state.subject}&&type=${state.type}`).then(res => res.json()).then(data => setQuizes(data))
    },[])

    const CheckBoxHandler = (data) => {
        setOption(data)
    }
    const MarksHandler = () => {
        if(quizes[slices].correct === option){
            setMarks(marks + 5)
        }
        else if(slices === 10){
            navigate('/Congrates', {state: {type: quizes[slices].quizType, subject: quizes[slices].subject, total: marks}})
        }
        setQuizShow(true)
        setTimer(10000)
        setDue(10)
    }

    setTimeout(function(){
        setQuizShow(false)
        setTimer(10000)
        }, timer);
    
  return (
    <section >
    <Navbars/>
    <div className='container mx-auto my-4'>
    {
        quizShow ? <div>
        <h1>Choose The Correct Answer Within 10sec</h1>
            {
                quizes.length === 0 || <CountdownCircleTimer
                isPlaying
                duration={due}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
            >
            {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer> 
            }
            <h4>Q. {quizes[slices]?.question}</h4>
            <p><input type="checkbox" checked={option === quizes[slices]?.option1 ? true : false} onClick={(e) => CheckBoxHandler(e.target.value)} value={quizes[slices]?.option1}/> {quizes[slices]?.option1}</p>
            <p><input  checked={option === quizes[slices]?.option2 ? true : false} type="checkbox" onClick={(e) => CheckBoxHandler(e.target.value)} value={quizes[slices]?.option2}/> {quizes[slices]?.option2}</p>
            <p><input checked={option === quizes[slices]?.option3 ? true : false} type="checkbox" onClick={(e) => CheckBoxHandler(e.target.value)} value={quizes[slices]?.option3}/> {quizes[slices]?.option3}</p>
            <p><input checked={option === quizes[slices]?.option4 ? true : false} type="checkbox" onClick={(e) => CheckBoxHandler(e.target.value)} value={quizes[slices]?.option4}/> {quizes[slices]?.option4}</p>
            <p><input checked={option === quizes[slices]?.option5 ? true : false} type="checkbox" onClick={(e) => CheckBoxHandler(e.target.value)} value={quizes[slices]?.option5}/> {quizes[slices]?.option5}</p>
        </div> : <p className='fw-bold text-info text-center my-4'>Quiz Time Out Please Try Next One</p>
    }  
        <button onClick={() => {
            setSlices(slices + 1)
            MarksHandler()
        }} className='btn btn-dark text-warning fw-bold fs-4 my-4'>NEXT</button>
    </div>
    </section> 
  );
}

export default QuizPage;
{/* <CountdownCircleTimer
                isPlaying
                duration={due}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
            >
            {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer> */}