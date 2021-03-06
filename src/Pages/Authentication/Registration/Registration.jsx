import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbars from "../../HomePage/Navbars/Navbars";
import {useSelector,useDispatch} from "react-redux";
import { Register } from "../../../QuizRedux/features/authSlice";


const Registration = () => {
  const [formValue, setFormValue] = useState({});
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const { email, password, firstName, lastName, confirmPassword, phone } = formValue;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("Password should match");
    }

    if (
      email &&
      password &&
      confirmPassword &&
      firstName &&
      lastName &&
      phone
    ) {
      dispatch(Register({ formValue, navigate, toast }));
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };


  return (
    <>
    <Navbars/>
      <div className="page-banner-area item-bg4">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-banner-content">
                <h2>Register</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Register</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="register-area ptb-50">
        <div className="container">
          <div className="register-form">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  value={firstName}
                  name="firstName"
                  type="text"
                  onChange={onInputChange}
                  required
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  value={lastName}
                  name="lastName"
                  onChange={onInputChange}
                  required
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  value={email}
                  name="email"
                  onChange={onInputChange}
                  required
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  value={phone}
                  onChange={onInputChange}
                  name="phone"
                  type="number"
                  className="form-control"
                  placeholder="Number"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  value={password}
                  name="password"
                  type="password"
                  onChange={onInputChange}
                  required
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <label> Confirm Password</label>
                <input
                  value={confirmPassword}
                  name="confirmPassword"
                  onChange={onInputChange}
                  required
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>

              <button type="submit">
                {loading && <span>loading...</span>}
                Register now
              </button>
            </form>
            <div className="important-text">
              <p>
                Already have an account? <Link to="/Login">Login now!</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
