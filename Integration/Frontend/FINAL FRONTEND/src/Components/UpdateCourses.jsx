// // UpdateCourses.js
// import React, { useState } from 'react';
// import './UpdateCourses.css'; // Import your CSS file for UpdateCourses styling

// const UpdateCourses = () => {
//   const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);
//   const [isDeleteFormOpen, setIsDeleteFormOpen] = useState(false);
//   const [selectedCourse, setSelectedCourse] = useState(null);

//   // Fetch the list of courses or use your own data
//   const courses = [
//     { id: 1, name: 'Course A', description: 'Description A' },
//     { id: 2, name: 'Course B', description: 'Description B' },
//     // Add more course data as needed
//   ];

//   const handleUpdate = (course) => {
//     setSelectedCourse(course);
//     setIsUpdateFormOpen(true);
//   };

//   const handleDelete = (course) => {
//     setSelectedCourse(course);
//     setIsDeleteFormOpen(true);
//   };

//   const handleCloseForms = () => {
//     setIsUpdateFormOpen(false);
//     setIsDeleteFormOpen(false);
//   };

//   const handleUpdateSubmit = (e) => {
//     e.preventDefault();
//     // Implement update logic
//     console.log('Update course:', selectedCourse);
//     handleCloseForms();
//   };

//   const handleDeleteSubmit = (e) => {
//     e.preventDefault();
//     // Implement delete logic
//     console.log('Delete course:', selectedCourse);
//     handleCloseForms();
//   };

//   return (
//     <div className='updimg'>
//     <div className="update-courses-container">
//       <h2>Update Courses</h2>
//       <table className="update-courses-table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Description</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {courses.map((course) => (
//             <tr key={course.id}>
//               <td>{course.id}</td>
//               <td>{course.name}</td>
//               <td>{course.description}</td>
//               <td>
//                 <button className='updsub' onClick={() => handleUpdate(course)}>Update</button>
//                 <button  className='updsub' onClick={() => handleDelete(course)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {isUpdateFormOpen && (
//         <div className="form-container22">
//           <form onSubmit={handleUpdateSubmit}>
//             <h3>Update Course</h3>
//             <label className='updlab'>
//               Name:
//               <input className='updin' type="text" defaultValue={selectedCourse.name} />
//             </label>
//             <label className='updlab'>
//               Description:
//               <textarea className='updtext' defaultValue={selectedCourse.description}></textarea>
//             </label>
//             <button className='updsub' type="submit">Update</button>
//             <button className='updsub' type="button" onClick={handleCloseForms}>
//               Cancel
//             </button>
//           </form>
//         </div>
//       )}

//       {isDeleteFormOpen && (
//         <div className='delcon'>
//         <div className="form-container22">
//           <form onSubmit={handleDeleteSubmit}>
//             <h3>Delete Course</h3>
//             <p>Are you sure you want to delete the course: {selectedCourse.name}?</p>
//             <button className='updsub' type="submit">Delete</button>
//             <button  className='updsub' type="button" onClick={handleCloseForms}>
//               Cancel
//             </button>
//           </form>
//         </div>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// };

// export default UpdateCourses;



// AddCourse.js
import { useState } from 'react';
import './UpdateCourses.css';
import axios from 'axios';

const UpdateCourses = () => {
  const [courseName, setCourseName] = useState('');
  const [courseDuration, setCourseDuration] = useState('');
  const [courseFee, setCourseFee] = useState('');

  const handleUpdateCourse = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found. Please log in again.');
        // Handle the absence of token, e.g., redirect to the login page
        return;
      }

      const response = await axios.put(
        `http://localhost:8080/add/${courseName}`, // Updated endpoint with courseName as a parameter
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
      console.log('Course updated successfully:', response.data);

      // Clear the form fields after successful submission
      setCourseName('');
      setCourseDuration('');
      setCourseFee('');
    } catch (error) {
      // Handle error, if needed
      console.error('Error updating course:', error);
    }
  };

  return (
    <div className='addimg'>
      <div className='movecourse'>
        <div className="add-course-container">
          <h2>Update Course</h2>
          <form onSubmit={handleUpdateCourse}>
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
              Update Course
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCourses;

