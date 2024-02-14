// EnquiryForm.js
import React, { useState } from 'react';
import './EnquiryForm.css';
import axios from 'axios';

const EnquiryForm = () => {
  // Step 1: Add a state variable for the selected course
  // const [selectedCourse, setSelectedCourse] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response =await axios.post(
        "http://localhost:8080/api/v1/auth/enquiry",{
          name,
          email,
          course,
          message,
          
        },
      );
      console.log("Details added Successfully");
      console.log(response.data);
      window.alert("Successfully added");
    }
    catch(error){
      console.log("Failed");
      console.log(error);
    }
  }

  return (
    <div className='enqimg'>
      <div className='movecont'>
        <div className="enquiry-form-container11">
          <h2 className='new11'>Add Enquiry</h2>
          <form onSubmit={handleSubmit}>
            <label className='label11' htmlFor="name">Name:</label>
            <input className='newinput' type="text" id="name"  value={name}
            onChange={(e) => setName(e.target.value)} required />

            <label className='label11' htmlFor="email">Email:</label>
            <input className='newinput' type="email" id="email" name="email" value={email}
            onChange={(e) => setEmail(e.target.value)} required />
            <label className='label11' htmlFor="coursename">Coursename:</label>
            <input className='newinput' type="text" id="coursename" name="coursename" value={course}
            onChange={(e) => setCourse(e.target.value)} required />

            {/* Step 2: Create a dropdown box for courses */}
            {/* <label className='label11' htmlFor="course">Select Course:</label> */}
            {/* <select
              className='newinput'
              id="course"
              name="course"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              required
            >
              <option value="">Select a Course</option>
              <option value="course1">Course 1</option>
              <option value="course2">Course 2</option>
              <option value="course3">Course 3</option>
              <option value="course4">Course 4</option>
              <option value="course5">Course 5</option>
              <option value="course6">Course 6</option>
            </select> */}

            <label className='label11' htmlFor="message">Enquiry Message:</label>
            <textarea className='newtext' id="message" name="message" rows="4" value={message}
            onChange={(e) => setMessage(e.target.value)} required></textarea>

            <button className='enqbut' type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
