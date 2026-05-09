import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import '../styles/Experience.css';

const Experience = () => {
  return ( 
  <div className='exp'>
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>
    <VerticalTimeline className='line' lineColor="white">
       <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#1e3a5f', color: 'radial-gradient(ellipse at bottom,#1b2735 0,#090a0f 100%)' }}
          contentArrowStyle={{ borderRight: '7px solid  radial-gradient(ellipse at bottom,#1b2735 0,#090a0f 100%)' }}
          date="Aug 2025 - Present"
          dateClassName={'dateLeft'}
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title edu">
            Member of Technical Staff, Oracle
          </h3>

          <h4 className="vertical-timeline-element-subtitle quali">
            Bengaluru, Karnataka, India
          </h4>
        </VerticalTimelineElement>
         <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#1e3a5f', color: 'radial-gradient(ellipse at bottom,#1b2735 0,#090a0f 100%)' }}
          contentArrowStyle={{ borderRight: '7px solid  radial-gradient(ellipse at bottom,#1b2735 0,#090a0f 100%)' }}
          date="July 2023 - July 2025"
          dateClassName={'dateRight'}
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title edu">
            Software Engineer, Airtel Digital
          </h3>

          <h4 className="vertical-timeline-element-subtitle quali">
            Gurugram, Haryana, India
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#1e3a5f', color: 'radial-gradient(ellipse at bottom,#1b2735 0,#090a0f 100%)' }}
          contentArrowStyle={{ borderRight: '7px solid  radial-gradient(ellipse at bottom,#1b2735 0,#090a0f 100%)' }}
          date=" 2019 - 2023"
          dateClassName={'date'}
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title edu">
            Bachelor of Technology in Mechanical Engineering (Minor - Computer Science )
          </h3>

          <h4 className="vertical-timeline-element-subtitle quali">
            Netaji Subhas University of Technology, New Delhi, India
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#1e3a5f', color: 'radial-gradient(ellipse at bottom,#1b2735 0,#090a0f 100%)' }}
          contentArrowStyle={{ borderRight: '7px solid  radial-gradient(ellipse at bottom,#1b2735 0,#090a0f 100%)' }}
          date="Jun 2022 - Sep 2022"
          dateClassName={'date2'}
          iconStyle={{ background: "#3e497a", color: "#fff " }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title edu">
            Software Developer Intern - Jobs Territory
          </h3>
          <h4 className="vertical-timeline-element-subtitle quali">
            Bengaluru, Karnataka, India
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience;