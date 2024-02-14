import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai'; // Import the user icon
import './AdminDash.css'; // Import your CSS file

const AdminDash = () => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logout clicked');
    // Redirect to the login page or perform logout actions
  };

  return (
    <div className={`dashboard1 ${isSidePanelOpen ? 'side-panel-open' : ''}`}>
      <div className="side-panel1">
        {/* Dropdown button for user */}
        <div className="dropdown">
          <button className="side-panel-button1" onClick={toggleDropdown}>
            <AiOutlineUser /> {/* Use the user icon */}
          </button>
          {/* Dropdown content */}
          {isDropdownOpen && (
            <div className="dropdown-content">
              {/* Display user name as a button to redirect to the profile page */}
              <Link to="/dashboard/profile" className="username-button">
                John Doe {/* Replace with the actual user name */}
              </Link>
              {/* Logout option */}
              <Link className='tohome' to="/Home"><button onClick={handleLogout} className="logout-button">
                Logout
              </button></Link>
            </div>
          )}
        </div>

        {/* Other links in the side panel */}
        <Link to="/AddCourse" className="side-panel-button">
          Add Courses
        </Link>
        <Link to="/EnquiriesPage" className="side-panel-button">
          Enquiries
        </Link>
        {/* <Link to="/dashboard/feed" className="side-panel-button">
          View Feedbacks
        </Link> */}
        {/* <Link to="/EnrolledList" className="side-panel-button">
          Enrolled List
        </Link> */}
        <Link to="/UpdateCourses" className="side-panel-button">
          Update Courses
        </Link>
        <Link to="/DeleteCourses" className="side-panel-button">
          Delete Courses
        </Link>
      </div>
      <div className="main-content1">
        {/* Main content of the dashboard */}
        <div className="dashnamead">H2B</div>
        <div className="dashnamead2">BritEngCert</div>
        {/* You can customize this section based on your requirements */}
      </div>
    </div>
  );
};

export default AdminDash;