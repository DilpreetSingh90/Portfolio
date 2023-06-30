import React, { useRef } from 'react';
import '../styles/Contact.css';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';
import MediaQuery from 'react-responsive';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, 
      process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          alert("Your Message was sent", result.text);
      }, (error) => {
          alert("An error occured, Plese try again", error.text);
      });
  };

  return (
<>
  <div id='stars'></div>
  <div id='stars2'></div>
  <div id='stars3'></div>
  <div className="formBg">
    <h1 className="form-title">GET IN TOUCH</h1>
    <div>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" className="form-control item" id="name" placeholder="Your Name..." required />
        <input type="email" className="form-control item" name="email" id="email" placeholder="Your Email..." required />
        <input type="text" className="form-control item" name="subject" id="subject" placeholder="Subject..." />
        <textarea className="form-control message" name="message" rows="5" required placeholder="Enter your Message..."></textarea>
        <MediaQuery minWidth={1000}>
          <Button variant="primary" type='submit' value='send' className='button' size='lg'>Send Message</Button>
        </MediaQuery>
        <MediaQuery minWidth={620} maxWidth={960}>
          <Button variant="primary" type='submit' value='send' className='button' >Send Message</Button>
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <Button variant="primary" type='submit' value='send' className='button' size='sm'>Send Message</Button>
        </MediaQuery>       
      </form>
    </div>
  </div>
</>
  )
}

export default Contact;