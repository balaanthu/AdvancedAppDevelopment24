// UpdateCourses.js
import React, { useState } from 'react';
import './UpdateCourses.css'; // Import your CSS file for UpdateCourses styling

const UpdateCourses = () => {
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);
  const [isDeleteFormOpen, setIsDeleteFormOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Fetch the list of courses or use your own data
  const courses = [
    { id: 1, name: 'Course A', description: 'Description A' },
    { id: 2, name: 'Course B', description: 'Description B' },
    // Add more course data as needed
  ];

  const handleUpdate = (course) => {
    setSelectedCourse(course);
    setIsUpdateFormOpen(true);
  };

  const handleDelete = (course) => {
    setSelectedCourse(course);
    setIsDeleteFormOpen(true);
  };

  const handleCloseForms = () => {
    setIsUpdateFormOpen(false);
    setIsDeleteFormOpen(false);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    // Implement update logic
    console.log('Update course:', selectedCourse);
    handleCloseForms();
  };

  const handleDeleteSubmit = (e) => {
    e.preventDefault();
    // Implement delete logic
    console.log('Delete course:', selectedCourse);
    handleCloseForms();
  };

  return (
    <div className='updimg'>
    <div className="update-courses-container">
      <h2>Update Courses</h2>
      <table className="update-courses-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>
                <button className='updsub' onClick={() => handleUpdate(course)}>Update</button>
                <button  className='updsub' onClick={() => handleDelete(course)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isUpdateFormOpen && (
        <div className="form-container22">
          <form onSubmit={handleUpdateSubmit}>
            <h3>Update Course</h3>
            <label className='updlab'>
              Name:
              <input className='updin' type="text" defaultValue={selectedCourse.name} />
            </label>
            <label className='updlab'>
              Description:
              <textarea className='updtext' defaultValue={selectedCourse.description}></textarea>
            </label>
            <button className='updsub' type="submit">Update</button>
            <button className='updsub' type="button" onClick={handleCloseForms}>
              Cancel
            </button>
          </form>
        </div>
      )}

      {isDeleteFormOpen && (
        <div className='delcon'>
        <div className="form-container22">
          <form onSubmit={handleDeleteSubmit}>
            <h3>Delete Course</h3>
            <p>Are you sure you want to delete the course: {selectedCourse.name}?</p>
            <button className='updsub' type="submit">Delete</button>
            <button  className='updsub' type="button" onClick={handleCloseForms}>
              Cancel
            </button>
          </form>
        </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default UpdateCourses;
