// AdminDash.js
import React, { useState } from 'react';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import './AdminDash.css';
import EnquiriesPage from './EnquiriesPage'; // Import the EnquiriesPage component

const AdminDash = () => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const history = useHistory();

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

  const navigateToEnquiries = () => {
    history.push('/dash/prof');
    setIsSidePanelOpen(false); // Close side panel after navigating
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
        <button className="side-panel-button" onClick={navigateToEnquiries}>
          Enquiries
        </button>
        <Link to="/dashboard/feed" className="side-panel-button">
          View Feedbacks
        </Link>
        <Link to="/EnrolledList" className="side-panel-button">
          Enrolled List
        </Link>
        <Link to="/UpdateCourses" className="side-panel-button">
          Update Courses
        </Link>
      </div>
      <div className="main-content1">
        <Switch>
          <Route path="/dash/prof" component={EnquiriesPage} />
          {/* Add other routes as needed */}
        </Switch>
        <div className="dashnamead">H2B</div>
        <div className="dashnamead2">BritEngCert</div>
      </div>
    </div>
  );
};

export default AdminDash;
