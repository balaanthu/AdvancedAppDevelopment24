import  { useState, useEffect } from 'react';
import axios from 'axios';
// import './CoursesPage.css'

const View = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); // Fetch data when the component mounts

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
  
      if (!token) {
        console.error('Token not found. Please log in again.');
        // Handle the absence of token, e.g., redirect to the login page
        return;
      }
  
      const response = await axios.get('http://localhost:8080/api/v1/auth/enquiry', {
        headers: {
          Authorization: `Bearer ${token}`,  // Wrap in backticks
        },
      });
  
      console.log('Fetched data:', response.data);
  
      // Update the state with the fetched data
      setServicesData(response.data);
    } catch (error) {
      console.error('Fetching data failed:', error);
      // Handle the error, e.g., show an error message
    }
  };
  
  return (
    <div className='adminback'>
      <div className='viewback'>
        <div className="views">
          <section id="view">
            <center>
              <h2 className='h2ad'>View Enquiries</h2>
            </center>
            <table className='admintable'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Coursename</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {servicesData.map((service, index) => (
                  <tr key={index}>
                    <td>{service.name}</td>
                    <td>{service.email}</td>
                    <td>{service.course}</td>
                    <td>{service.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
};

export default View;