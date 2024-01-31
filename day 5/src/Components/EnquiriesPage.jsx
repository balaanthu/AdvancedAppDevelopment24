import React, { useState, useEffect } from 'react';
import './EnquiriesPage.css';

const EnquiriesPage = () => {
  // Sample data for demonstration, replace it with your actual data fetching logic
  const [enquiries, setEnquiries] = useState([
    { id: 1, name: 'John Doe', course: 'Computer Science', date: '2024-01-31', message: 'Interested in course details' },
    { id: 2, name: 'Jane Smith', course: 'Electrical Engineering', date: '2024-01-30', message: 'Enquiry about admission process' },
    // Add more entries as needed
  ]);

  return (
    <div className="enquiry-page">
      <h1>Student Enquiries</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Date</th>
            <th>Enquiry Message</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((enquiry) => (
            <tr key={enquiry.id}>
              <td>{enquiry.id}</td>
              <td>{enquiry.name}</td>
              <td>{enquiry.course}</td>
              <td>{enquiry.date}</td>
              <td>{enquiry.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnquiriesPage;
