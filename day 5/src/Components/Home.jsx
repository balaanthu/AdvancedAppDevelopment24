import { Link } from 'react-router-dom';
import './Home.css'; // Make sure to replace 'YourComponent' with the actual name of your React component


// Create a functional component
const Homepage = () => {
  return (
    <div>
      <nav>
        <div className="menu">
          <div className="logo">
            <h1 className='logosolo'>H2B</h1>
          </div>
         <div className='items'>
          <ul>i
            <li><a href="#">Home</a></li>
            <li><a href="/About">about</a></li>
            {/* <li><a href="#">Courses</a></li> */}
            {/* <li><a href="#">Contact</a></li> */}
            <li><a href="#">Feedback</a></li>
            
          </ul>
          </div>
        </div>
      </nav>
      <div className="imgbg">
        <div className="overlay"></div>
      </div>
      <div className="center">
        <div className="btns">
        <Link to="/Adminlog"><button><a className='col'>Admin Login</a></button></Link>
        <Link to="/Login"><button className='hov'><a className='col'>User Login</a></button></Link>
          <div className="title">LANGUAGE IS THE WIRE,THAT</div>
        <div className="sub_title"> CONNECTS THE WORLD TOGETHERE</div>
        </div>
        <div className='footmove'>
        <footer className='footbot'>
         
          <div className="footer-info">
            <p>&copy; 2024 H2B. All rights reserved.</p>
            <p>Email: H2Binfo@gmail.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </footer>
        </div>
        </div>


        {/* <footer>
        <div className="footer-content">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer> */}

     
    </div>
  );
};

export default Homepage;