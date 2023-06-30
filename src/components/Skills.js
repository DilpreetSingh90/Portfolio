import React from 'react';
import Skill from './Skill';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <div className="skills">
            <h2 className='skillTitle'>I have experience with these technologies</h2>
            <div className="skillsGrid">
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"  alt="logo for C++" title="C++" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"  alt="logo for Python" title="Python" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  alt="logo for Javascript" title="Javascript" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"  alt="logo for Typescript" title="Typescript" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="The logo icon for react" title="React"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="The logo icon for HTML 5" title="HTML 5"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="The logo icon for CSS3" title="CSS 3"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="The logo icon for TailwindCSS" title="Twilwind CSS"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="The logo icon for NodeJS" title="Node JS"/>
                <i class="devicon-express-original iTags" title='Express.js'></i>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"  alt="logo for Bootstrap" title="Bootstrap" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"  alt="logo for Redux" title="Redux" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"  alt="logo for Mysql" title="Mysql" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"  alt="logo for Mongodb" title="MongoDB" />
                <i class="devicon-github-original-wordmark iTags" title='Github'></i>
                <i class="devicon-nextjs-original iTags" title='Next.js'></i> 
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"  alt="logo for Tensorflow" title="Tensorflow" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"  alt="logo for Firebase" title="Firebase" />
            </div>            
    </div>
  )
}

export default Skills;