import React, { useState,useEffect } from 'react';
import {Link,useLocation} from "react-router-dom";
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import logo from '../assets/logo.png'

const Navbar = () => {
  const [expandNav,setExpandNav] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNav(false);
  }, [location]);

  const activeTab = (path) => {
    if (location.pathname === path) {
      return { textDecoration: 'underline',
        textDecorationColor: 'whitesmoke',
        textUnderlineOffset: '10px' };
    }
  };

  return (
    <div className='navBg' id={expandNav ? "open" : "close"}>
      <a className='logoBtn' href='/'><img src={logo} alt='logo'/></a> 
      <div className="toggleButton">   
        <button
          onClick={() => {
            setExpandNav((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className='links'>
        <Link style={activeTab("/")} className='link' to="/">Home</Link>
        <Link style={activeTab("/experience")} className='link' to="/experience">Experience</Link>
        <Link style={activeTab("/projects")} className='link' to="/projects">Projects</Link>
        <Link style={activeTab("/resume")} className='link' to="/resume">Resume</Link>
        <Link style={activeTab("/contact")} className='link' to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar;