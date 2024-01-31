// EnquiryForm.js
import React, { useState } from 'react';
import './EnquiryForm.css';

const EnquiryForm = () => {
  // Step 1: Add a state variable for the selected course
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Step 3: Include the selected course in the form data
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;
    console.log('Enquiry Form Submitted:', { name, email, message, selectedCourse });
    // Add your logic to handle the enquiry form submission
    // You can access form data using e.target.elements
    // Perform actions with the form data (e.g., send to server, update state)
  };

  return (
    <div className='enqimg'>
      <div className='movecont'>
        <div className="enquiry-form-container11">
          <h2 className='new11'>Add Enquiry</h2>
          <form onSubmit={handleSubmit}>
            <label className='label11' htmlFor="name">Name:</label>
            <input className='newinput' type="text" id="name" name="name" required />

            <label className='label11' htmlFor="email">Email:</label>
            <input className='newinput' type="email" id="email" name="email" required />

            {/* Step 2: Create a dropdown box for courses */}
            <label className='label11' htmlFor="course">Select Course:</label>
            <select
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
            </select>

            <label className='label11' htmlFor="message">Enquiry Message:</label>
            <textarea className='newtext' id="message" name="message" rows="4" required></textarea>

            <button className='enqbut' type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
