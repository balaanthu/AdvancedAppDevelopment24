// Register.jsx

import React, { useState } from 'react';
import './Adminreg.css';

const Adminreg = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
    gender: '',
    dateOfBirth: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Form submitted:', formData);
    // You may want to make an API call to handle the registration process
  };

  return (
    <div className='backimg7'>
      <div className="register-form7">
        <h2 className='head7'>Admin Registration</h2>
        <form onSubmit={handleSubmit}>
          <label className='lab7' htmlFor="username">Username:</label>
          <input
            className='inp7'
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <label className='lab7' htmlFor="email">Email:</label>
          <input
            className='inp7'
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label className='lab7' htmlFor="password">Password:</label>
          <input
            className='inp7'
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label className='lab7' htmlFor="confirmPassword">Confirm Password:</label>
          <input
            className='inp7'
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <label className='lab7' htmlFor="mobileNumber">Mobile Number:</label>
          <input
            className='inp7'
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            pattern="[0-9]{10}"
            placeholder="Enter your mobile number"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />

          <label className='lab7' htmlFor="gender">Gender:</label>
          <select
            className='inp7'
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

          <label className='lab7' htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            className='inp7'
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            placeholder="Select your date of birth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />

          <button className='but7' type="submit">Register</button>
          <p className="login-link7">Already have an account? <a href="/Adminlog">Login</a></p>
        </form>
      </div>
    </div>
    
  );
};

export default Adminreg;
