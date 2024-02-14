// About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='aboutimg'>
      <div className='abtmove'>
        <div className="about-container">
          <h1>About H2B BritEngCert</h1>
          <p>
            Welcome to H2B BritEngCert – your go-to platform for English language courses!
          </p>
          <p>
            At H2B BritEngCert, we are committed to providing high-quality English language education
            to help you achieve your language learning goals. Whether you are a beginner looking to
            improve your basic English skills or an advanced learner aiming for proficiency,
            we have courses tailored to meet your needs.
          </p>
          <p>
            Our experienced instructors, interactive lessons, and state-of-the-art learning resources
            ensure an engaging and effective learning experience. Join our community of language enthusiasts
            and embark on a journey to enhance your English language skills.
          </p>
          <p>
            Feel free to explore our courses, submit enquiries, and engage with our vibrant community.
            We are here to support you on your language learning adventure!
          </p>

          {/* Vision and Mission Section */}
          <div className="vision-mission-section">
            <h2>Vision</h2>
            <p>
              Our vision is to empower individuals with the language skills needed for success in a
              globalized world. We aspire to be a leading provider of accessible and effective English
              language education.
            </p>

            <h2>Mission</h2>
            <p>
              Our mission is to deliver high-quality language courses that cater to diverse learning
              needs. We aim to create a supportive learning environment, foster community engagement,
              and make language learning an enjoyable and enriching experience for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
