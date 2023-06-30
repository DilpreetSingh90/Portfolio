import React from 'react';
import '../styles/Resume.css';
import MediaQuery from 'react-responsive';
import { Button } from 'react-bootstrap';
import resume from '../Resume.pdf';
import resumeImg from '../assets/Resume.png';

const Resume = () => {

  return (
    <div>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div className='pdfContainer'>
        <div className='pdfBox'>
          <img className='pdfPage' src={resumeImg} alt='resume' />
        </div>
        <MediaQuery minWidth={1000}>
          <Button type='primary' className='downloadBtn' size='lg'>
            <a className='download' href={resume} download='Resume.pdf'>Download Resume</a>
          </Button>
        </MediaQuery>
        <MediaQuery minWidth={620} maxWidth={980}>
          <Button type='primary' className='downloadBtn'>
            <a className='download' href={resume} download='Resume.pdf'>Download Resume</a>
          </Button>
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <Button type='primary' className='downloadBtn' size='sm'>
            <a className='download' href={resume} download='Resume.pdf'>Download Resume</a>
          </Button>
        </MediaQuery>
      </div>
    </div>
  )
}

export default Resume