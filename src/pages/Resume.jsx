import React, { useEffect, useState } from 'react';
import { pdfjs,Document, Page } from 'react-pdf';
import resume from '../Resume.pdf';
import '../styles/Resume.css';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();


const Resume = () => {

  return (
    <div>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <MediaQuery minWidth={1000}>
        <div className='pdfContainer'>
          <Document className='pdfBox' file={resume}>
            <Page scale={1.3} pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false}/>
          </Document>
          <Button type='primary' className='downloadBtn' size='lg'>
            <a href={resume} download='Resume.pdf' className='download'>Download Resume</a>
          </Button>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={620} maxWidth={960}>
        <div className='pdfContainer'>
          <Document className='pdfBox' file={resume}>
            <Page scale={0.85} pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false}/>
          </Document>
          <Button type='primary' className='downloadBtn'>
            <a href={resume} download='Resume.pdf' className='download'>Download Resume</a>
          </Button>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={600}>
        <div className='pdfContainer'>
          <Document className='pdfBox' file={resume}>
            <Page scale={0.45} pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false}/>
          </Document>
          <Button type='primary' className='downloadBtn' size='sm'>
            <a href={resume} download='Resume.pdf' className='download'>Download Resume</a>
          </Button>
        </div>
      </MediaQuery>
    </div>
  )
}

export default Resume