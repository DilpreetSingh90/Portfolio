import React from 'react';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Footer.css";
import MediaQuery from 'react-responsive';


const Footer = () => {
  return (
    <div className='footer'> 
        <div className="socialMedia">
            <a href='https://www.linkedin.com/in/dilpreetsingh90'><LinkedInIcon /></a>
            <a href='https://github.com/DilpreetSingh90'><GitHubIcon /></a>
        </div>
        <p> © {new Date().getFullYear()} Dilpreet Singh. All rights reserved.</p>
        <MediaQuery maxWidth={600}>
          <a className='attribute' href="https://www.flaticon.com/free-icons/computer" title="computer icons">Computer icons created by Freepik - Flaticon</a>
        </MediaQuery>
    </div>
  )
}

export default Footer;