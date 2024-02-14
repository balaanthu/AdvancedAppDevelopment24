// AddCourse.js
import React, { useState } from 'react';
// import './Deletecourse.css';
import axios from 'axios' // Import the CSS file

// Import necessary modules and components

const DeleteEnquiry = () => {
    const [Name, setName] = useState('');
  
    const handleDeleteEnquiry = async (e) => {
      e.preventDefault();
  
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('Token not found. Please log in again.');
          // Handle the absence of token, e.g., redirect to login page
          return;
        }
  
        const response = await axios.delete(
          `http://localhost:8080/api/v1/auth/enquiry/${Name}`, // Updated endpoint with courseName as a parameter
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        // Handle successful response, if needed
        console.log('Enquiry deleted successfully:', response.data);
  
        // Clear the form fields after successful submission
        setName('');
      } catch (error) {
        // Handle error, if needed
        console.error('Error deleting enquiry:', error);
      }
    };
  
    return (
      <div className='addimg'>
        <div className='movecourse'>
          <div className="add-course-container">
            <h2>Delete Enquiry</h2>
            <form onSubmit={handleDeleteEnquiry}>
              <label className="form-label">
                Name:
                <input
                  type="text"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                />
              </label>
              <button type="submit" className="form-button">
                Delete Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default DeleteEnquiry;
  