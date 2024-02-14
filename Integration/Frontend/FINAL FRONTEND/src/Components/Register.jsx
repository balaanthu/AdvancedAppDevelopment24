// Register.jsx

import React, { useState } from 'react';
import './Register.css';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Register = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  
    // mobileNumber: '',
    // gender: '',
    // dateOfBirth: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', formData);

      if (response.status === 200) {
        // Registration successful
        console.log('Registration successful:', formData);
        navigate('/Login')
      } else {
        // Handle registration failure
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };
  

  return (
    <div className='backimg'>
      <div className="register-form12">
        <h2 className='head'>User Registration</h2>
        <div className='formmove'><form onSubmit={handleSubmit}>
          <label className='lab' htmlFor="username">Username:</label>
          <input
            className='inp'
            type="text"
            id="name"
            name="name"
            placeholder="Enter your username"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label className='lab' htmlFor="email">Email:</label>
          <input
            className='inp'
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label className='lab' htmlFor="password">Password:</label>
          <input
            className='inp'
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

       

          {/* <label className='lab' htmlFor="mobileNumber">Mobile Number:</label>
          <input
            className='inp'
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            pattern="[0-9]{10}"
            placeholder="Enter your mobile number"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />

          <label className='lab' htmlFor="gender">Gender:</label>
          <select
            className='inp'
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label className='lab' htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            className='inp'
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            placeholder="Select your date of birth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          /> */}

          <button className='but' type="submit">Register</button>
          <p className="login-link">Already have an account? <a href="/login">Login</a></p>
        </form></div>
      </div>
    </div>
    
  );
};

export default Register;
