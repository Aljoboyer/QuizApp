import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbars from "../../HomePage/Navbars/Navbars";
import {useSelector,useDispatch} from "react-redux";
import { login } from "../../../QuizRedux/features/authSlice";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const { email, password } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ formValue, navigate, toast }));
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <>
      <Navbars />
      <div>
        <div className="page-banner-area item-bg3">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="page-banner-content">
                  <h2>Login</h2>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Login</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="login-area ptb-100">
          <div className="container">
            <div className="login-form">
              <h2>Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    value={email}
                    name="email"
                    onChange={onInputChange}
                    type="text"
                    className="form-control"
                    placeholder="Email or phone"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    value={password}
                    name="password"
                    onChange={onInputChange}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>

                <button type="submit">
                  {loading && (
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>

                  )}
                  Login
                </button>
              </form>
              <div className="important-text">
                <p>
                  <Link to="/signup">Don't have an account? Register now</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
