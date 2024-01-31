// CoursesPage.js
import React from 'react';
import './CoursesPage.css';

const CoursesPage = () => {
  // Sample course data
  const courses = [
    { id: 1, title: 'Course 1', description: 'Description for Course 1' },
    { id: 2, title: 'Course 2', description: 'Description for Course 2' },
    { id: 3, title: 'Course 3', description: 'Description for Course 3' },
    { id: 4, title: 'Course 4', description: 'Description for Course 4' },
    { id: 5, title: 'Course 5', description: 'Description for Course 5' },
    { id: 6, title: 'Course 6', description: 'Description for Course 6' },
  ];

  const handleEnrollClick = (courseId) => {
    // Add your enroll logic here, for example, redirect to an enroll page
    console.log(`Enroll clicked for Course ${courseId}`);
  };

  return (
    <div className='courseimg'>
    <div className="courses-page">
      <h1>Available Courses</h1>
      <div className="course-list">
        {courses.map((course) => (
          <div key={course.id} className="course-box">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <button className='enrollbutton' onClick={() => handleEnrollClick(course.id)}>Enroll</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CoursesPage;
