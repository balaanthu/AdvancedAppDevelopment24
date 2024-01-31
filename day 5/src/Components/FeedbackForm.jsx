// FeedbackForm.js
import React from 'react';
import './FeedbackForm.css'; // Import your CSS file for FeedbackForm styling

const FeedbackForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle feedback submission
    console.log('Feedback submitted');
  };

  return (
    <div className='feedimg'>
        <div className='feedcon'>
    <div className="feedback-form-container">
      {/* <h2>Feedback Form</h2> */}
      <form onSubmit={handleSubmit} className="feedback-form">
        <label>
          Your Name:
          <input className='feedin' type="text" name="name" required />
        </label>
        <label className='feedlab'>
          Email:
          <input className='feedin' type="email" name="email" required />
        </label>
        <label className='feedlab'>
          Feedback:
          <textarea className='feedtext' name="feedback" required></textarea>
        </label>
        <button className='feedsub' type="submit">Submit Feedback</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default FeedbackForm;
