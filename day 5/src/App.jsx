import React from 'react'
// import {Link} from "react-router-dom"
import Home from "./Components/Home"
import Login from "./Components/Login"
import Adminlog from './Components/Adminlog'
import Register from "./Components/Register"
import Dashboard from './Components/dashboard'
import EnquiryForm from './Components/EnquiryForm'
import CoursesPage from './Components/CoursesPage'
import AdminDash from './Components/AdminDash'
import About from './Components/About'
import AddCourse from './Components/Addcourse'
import CoursesEnrolled from './Components/CoursesEnrolled'
import EnrolledList from './Components/EnrolledList'
import UpdateCourses from './Components/UpdateCourses'
import FeedbackForm from './Components/FeedbackForm'
import EnquiriesPage from './Components/EnquiriesPage'


import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Adminreg from './Components/Adminreg'
function App() {


  return (
   <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/EnquiryForm" element={<EnquiryForm/>}/>
        <Route path="/FeedbackForm" element={<FeedbackForm/>}/>
        <Route path="/CoursesPage" element={<CoursesPage/>}/>
        <Route path="/CoursesEnrolled" element={<CoursesEnrolled/>}/>
        <Route path="/UpdateCourses" element={<UpdateCourses/>}/>
        <Route path="/EnrolledList" element={<EnrolledList/>}/>
        <Route path="/Adminlog" element={<Adminlog/>}/>
        <Route path="/AdminDash" element={<AdminDash/>}/>
        <Route path="/EnquiriesPage" element={<EnquiriesPage/>}/>
        <Route path="/AddCourse" element={<AddCourse/>}/>
        <Route path="/Adminreg" element={<Adminreg/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Home" element={<Home/>}/>
        

      </Routes>
    </Router>
    
   </div>
  )
}

export default App
