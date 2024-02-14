// AddCourse.js
import React, { useState } from 'react';
import './AddCourse.css';
import axios from 'axios' // Import the CSS file

const AddCourse = () => {
  const [courseName, setCourseName] = useState('');
  const [courseDuration, setCourseDuration] = useState('');
  const [courseFee, setCourseFee] = useState('');

  const handleAddCourse = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found. Please log in again.');
        // Handle the absence of token, e.g., redirect to login page
        return;
      }

      const response = await axios.post(
        'http://localhost:8080/add',
        {
          coursename: courseName,
          duration: courseDuration,
          fee: courseFee,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Handle successful response, if needed
      console.log('Course added successfully:', response.data);

      // Clear the form fields after successful submission
      setCourseName('');
      setCourseDuration('');
      setCourseFee('');
    } catch (error) {
      // Handle error, if needed
      console.error('Error adding course:', error);
    }
  };

  return (
    <div className='addimg'>
        <div className='movecourse'>
    <div className="add-course-container">
      <h2>Add New Course</h2>
      <form onSubmit={handleAddCourse}>
        <label className="form-label">
          Course Name:
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Course Duration:
          <input
            type="text"
            value={courseDuration}
            onChange={(e) => setCourseDuration(e.target.value)}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Course Fee:
          <input
            type="text"
            value={courseFee}
            onChange={(e) => setCourseFee(e.target.value)}
            className="form-input"
          />
        </label>
        <button type="submit" className="form-button">
          Add Course
        </button>
      </form>
      </div>
    </div>
    </div>
  );
};

export default AddCourse;
