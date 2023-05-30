import React from 'react';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";


const Footer = () => {
    const year = new Date().getFullYear() ;
  return (
    <div className='footer'> 
        <div className="socialMedia">
            <a href="https://instagram.com/dilpreet_singh90?igshid=ZDc4ODBmNjlmNQ=="><InstagramIcon /></a>
            <a href='https://www.facebook.com/dilpreet.singh.9693?mibextid=ZbWKwL'><FacebookIcon /></a>
            <a href='https://www.linkedin.com/in/dilpreet-singh-056731209'><LinkedInIcon /></a>
        </div>
        <p> Copyright &copy;{year}</p><br/></div>
  )
}

export default Footer;