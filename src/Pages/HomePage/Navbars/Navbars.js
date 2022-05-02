import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import decode from "jwt-decode";
import { setLogout } from "../../../QuizRedux/features/authSlice.js";

const Navbars = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();

  const token = user?.token;

  if (token) {
    const decodeToken = decode(token);
    if (decodeToken.exp * 1000 < new Date().getTime()) {
      dispatch(setLogout());
    }
  }

  const handleLogout = () => {
    dispatch(setLogout());
  };
  return (
<div>
    <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#home"> <h4 className='mx-3'>React-Bootstrap</h4> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <p className='mt-3 mx-4'><Link to="/">Home</Link></p>
              <p className='mt-3 mx-4'><Link to="/AddQuiz">Add Quiz</Link></p>
            </Nav>
            <Nav>
              <p className='mt-3 mx-4'><Link to="/Registration">Registration</Link></p>
             {
               user?.result?._id ? <p onClick={handleLogout} className='mt-3 mx-4'>LogOut</p> : <p className='mt-3 mx-4'><Link to="/Login">Login</Link></p>
             } 
            </Nav>
        </Navbar.Collapse>
    </Navbar>
</div>
  );
}

export default Navbars;
