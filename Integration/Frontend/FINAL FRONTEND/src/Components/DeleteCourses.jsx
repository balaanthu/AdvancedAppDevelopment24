// AddCourse.js
import React, { useState } from 'react';
import './Deletecourse.css';
import axios from 'axios' // Import the CSS file

// Import necessary modules and components

const DeleteCourse = () => {
    const [courseName, setCourseName] = useState('');
  
    const handleDeleteCourse = async (e) => {
      e.preventDefault();
  
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('Token not found. Please log in again.');
          // Handle the absence of token, e.g., redirect to login page
          return;
        }
  
        const response = await axios.delete(
          `http://localhost:8080/add/${courseName}`, // Updated endpoint with courseName as a parameter
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        // Handle successful response, if needed
        console.log('Course deleted successfully:', response.data);
  
        // Clear the form fields after successful submission
        setCourseName('');
      } catch (error) {
        // Handle error, if needed
        console.error('Error deleting course:', error);
      }
    };
  
    return (
      <div className='addimg'>
        <div className='movecourse'>
          <div className="add-course-container">
            <h2>Delete Course</h2>
            <form onSubmit={handleDeleteCourse}>
              <label className="form-label">
                Course Name:
                <input
                  type="text"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                  className="form-input"
                />
              </label>
              <button type="submit" className="form-button">
                Delete Course
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default DeleteCourse;
  