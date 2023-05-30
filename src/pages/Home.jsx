import {React,useState, useEffect, useRef} from 'react';
import '../styles/Home.css';
import Typed from "typed.js";
import Button from 'react-bootstrap/Button';
import Skills from '../components/Skills';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front End Developer", "Back End Developer", "Software Engineer"],
      startDelay: 200,
      typeSpeed: 50,
      backSpeed: 70,
      backDelay: 100,
      loop: true,
      showCursor: true,
      smartBackspace: true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='home'>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div className='container'>
        <h1 className='intro'>Hello, My Name is Dilpreet</h1>
        <p class="introSlide">
            I am a <span ref={el}></span>
        </p>
        <h2 className='intro3'>Based in New Delhi, India</h2>
        <a href='#skills'>
        <Button variant="primary" style={{marginTop: '2rem'}} >
          <div className='skillButton'>
            <span className='skillText'>See My Skills</span>
            <ArrowDownwardIcon />
          </div>
        </Button>
        </a>
      </div>
      <span id="skills" />
      <Skills />
    </div>
  )
}

export default Home;