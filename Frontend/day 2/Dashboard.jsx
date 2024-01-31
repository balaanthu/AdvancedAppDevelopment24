// Dashboard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai'; // Import the user icon
import './Dashboard.css'; // Import your CSS file

const Dashboard = () => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  return (
    <div className={`dashboard ${isSidePanelOpen ? 'side-panel-open' : ''}`}>
      <div className="side-panel">
        <div className="user-icon" onClick={toggleUserDropdown}>
          <AiOutlineUser />
          {isUserDropdownOpen && (
            <div className="user-dropdown">
              <p>Username</p>
              <button onClick={() => console.log('Logout')}>Logout</button>
            </div>
          )}
        </div>
        <Link to="/CoursesPage" className="side-panel-button">
          Courses
        </Link>
        <Link to="/EnquiryForm" className="side-panel-button">
          Add Enquiry
        </Link>
        <Link to="/FeedbackForm" className="side-panel-button">
          Feedback
        </Link>
        <Link to="/dashboard/myenq" className="side-panel-button">
          MyEnquiries
        </Link>
        <Link to="/CoursesEnrolled" className="side-panel-button">
          Courses enrolled
        </Link>
      </div>
      <div className="main-content">
        <div className="dashname">H2B</div>
        <div className="dashname2">BritEngCert</div>
      </div>
    </div>
  );
};

export default Dashboard;
