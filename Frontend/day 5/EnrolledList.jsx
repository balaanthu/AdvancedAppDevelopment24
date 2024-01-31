// EnrolledList.js
import React from 'react';
import './EnrolledList.css'; // Import your CSS file for EnrolledList styling

const EnrolledList = () => {
  // Fetch the list of enrolled students or use your own data
  const enrolledStudents = [
    { id: 1, name: 'Student 1', course: 'Course A' },
    { id: 2, name: 'Student 2', course: 'Course B' },
    // Add more student data as needed
  ];

  return (
    <div className='listimg'>
    <div className="enrolled-list-container">
      <h2>Enrolled List</h2>
      <form className="enrolled-list-form">
        <table className="enrolled-list-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {enrolledStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
    </div>
  );
};

export default EnrolledList;
