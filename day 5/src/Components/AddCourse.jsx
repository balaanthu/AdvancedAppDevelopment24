// AddCourse.js
import React, { useState } from 'react';
import './AddCourse.css'; // Import the CSS file

const AddCourse = () => {
  const [courseName, setCourseName] = useState('');
  const [courseDuration, setCourseDuration] = useState('');
  const [courseFee, setCourseFee] = useState('');

  const handleAddCourse = (e) => {
    e.preventDefault();
    // Add logic to handle the submission of course details
    console.log('Adding course:', {
      courseName,
      courseDuration,
      courseFee,
    });
    // You can send this data to your backend or perform any necessary actions
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
