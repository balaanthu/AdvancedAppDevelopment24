import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import './Login.css'; // Import your CSS file

const Login = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateForm(newEmail, password);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validateForm(email, newPassword);
  };

  const validateForm = (newEmail, newPassword) => {
    // Example validation for email and password
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Basic email and password validation
    const isEmailValid = emailRegex.test(newEmail);
    const isPasswordValid = newPassword.length >= 6;

    // Update the button disabled state
    setIsButtonDisabled(!(isEmailValid && isPasswordValid));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
   try{
    const response=await axios.post('http://localhost:8080/api/v1/auth/authenticate',{
        email,
        password
      });
      console.log(response.data);
      console.log("Login sucessfull");
      localStorage.setItem('token',response.data.token)
      navigate('/Dashboard');
    }
    catch(error){
      console.error('Login failed',error);
    }
  };

  return (
    <div className='login'>
      <div className="Form-box">
        <form className="Login-form" onSubmit={handleSubmit}>
          <h1>User Login</h1>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="checkbox">
            <span>
              <input type="checkbox" id="login-checkbox" />
              <label htmlFor="login-checkbox">Remember Me</label>
            </span>
            <h5 className='rem'>Forget password ?</h5>
          </div>
         
            <button className={`submit-btn2 ${isButtonDisabled ? 'disabled' : ''}`} type="submit" disabled={isButtonDisabled}>
              Submit
            </button>
          
          <h5 className="rem">Don't have an account?<Link to="/Register">Register</Link></h5>
        </form>
      </div>
    </div>
  );
};

export default Login;

