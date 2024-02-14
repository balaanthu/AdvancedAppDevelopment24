// // AddCourse.js
// import React, { useState } from 'react';
// // import './Deletecourse.css';
// import axios from 'axios' // Import the CSS file

// // Import necessary modules and components

// const GetEnquiry = () => {
//     const [name, setMyEnquiry] = useState('');
  
//     const handleGetEnquiry = async (e) => {
//       e.preventDefault();
  
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           console.error('Token not found. Please log in again.');
//           // Handle the absence of token, e.g., redirect to login page
//           return;
//         }
  
//         const response = await axios.get(
//           `http://localhost:8080/api/v1/auth/enquiry/${name}`, // Updated endpoint with courseName as a parameter
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
  
//         // Handle successful response, if needed
//         console.log('Course deleted successfully:', response.data);
  
//         // Clear the form fields after successful submission
//         setMyEnquiry('');
//       } catch (error) {
//         // Handle error, if needed
//         console.error('Error deleting course:', error);
//       }
//     };
  
//     return (
//       <div className='addimg'>
//         <div className='movecourse'>
//           <div className="add-course-container">
//             <h2>My Enquiries</h2>
//             <form onSubmit={handleGetEnquiry}>
//               <label className="form-label">
//                 Name:
//                 <input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setMyEnquiry(e.target.value)}
//                   className="form-input"
//                 />
//               </label>
//               <button type="submit" className="form-button">
//                 Get Enquiry
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default GetEnquiry;





import React, { useState } from 'react';
import axios from 'axios';

const GetEnquiry = () => {
  const [name, setMyEnquiry] = useState('');
  const [enquiryData, setEnquiryData] = useState([]);

  const handleGetEnquiry = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found. Please log in again.');
        // Handle the absence of token, e.g., redirect to login page
        return;
      }

      const response = await axios.get(
        `http://localhost:8080/api/v1/auth/enquiry/${name}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Set the retrieved data in the state
      setEnquiryData(response.data);

      // Clear the form fields after successful submission
      setMyEnquiry('');
    } catch (error) {
      // Handle error, if needed
      console.error('Error getting enquiry:', error);
    }
  };

  return (
    <div className='addimg'>
      <div className='movecourse'>
        <div className="add-course-container">
          <h2>My Enquiries</h2>
          <form onSubmit={handleGetEnquiry}>
            <label className="form-label">
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setMyEnquiry(e.target.value)}
                className="form-input"
              />
            </label>
            <button type="submit" className="form-button">
              Get Enquiry
            </button>
          </form>
        </div>

        {/* Display the table of values */}
        {enquiryData.length > 0 && (
          <div className="enquiry-table-container">
            <h3>Enquiry Details</h3>
            <table className='enquiry-table'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Column2</th>
                  <th>Column2</th>
                  <th>Column2</th>
                  {/* Add more columns as needed */}
                </tr>
              </thead>
              <tbody>
                {enquiryData.map((enquiry, index) => (
                  <tr key={index}>
                    <td>{enquiry.name}</td>
                    <td>{enquiry.message}</td>
                    <td>{enquiry.course}</td>
                    <td>{enquiry.email}</td>
                    {/* Add more columns as needed */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetEnquiry;

  