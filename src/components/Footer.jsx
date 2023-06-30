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
            <a href="https://instagram.com/dilpreet_singh90?igshid=ZDc4ODBmNjlmNQ=="><InstagramIcon /></a>
            <a href='https://www.facebook.com/dilpreet.singh.9693?mibextid=ZbWKwL'><FacebookIcon /></a>
            <a href='https://www.linkedin.com/in/dilpreet-singh-056731209'><LinkedInIcon /></a>
            <a href='https://github.com/DilpreetSingh90'><GitHubIcon /></a>
        </div>
        <p> Made by <a style={{color:'white',textDecoration:'none'}} href='https://github.com/DilpreetSingh90'>Dilpreet</a></p>
        <MediaQuery maxWidth={600}>
          <a className='attribute' href="https://www.flaticon.com/free-icons/computer" title="computer icons">Computer icons created by Freepik - Flaticon</a>
        </MediaQuery>
    </div>
  )
}

export default Footer;