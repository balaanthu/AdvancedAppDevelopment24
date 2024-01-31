// EnrollmentContext.js
import { createContext, useContext, useState } from 'react';

const EnrollmentContext = createContext();

export const EnrollmentProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollCourse = (course) => {
    setEnrolledCourses((prevCourses) => [...prevCourses, course]);
  };

  const contextValue = {
    enrolledCourses,
    enrollCourse,
  };

  return (
    <EnrollmentContext.Provider value={contextValue}>
      {children}
    </EnrollmentContext.Provider>
  );
};

export const useEnrollment = () => {
  return useContext(EnrollmentContext);
};
