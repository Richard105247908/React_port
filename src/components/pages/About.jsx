import React from 'react';

const About = () => (
  <div className="about-container">
    <div className="about-section">
      <h1>About Me</h1>
      <h4 className="knowMe">Get To Know Me</h4>
      <p>I am a Front End Web Developer based in London, England.</p> 
      <p>I am experienced in developing creative and functional designs, web page layout, creating user interfaces, writing and testing code, and infrastructure to maintain a cohesive website consistent with clients' needs.</p>
    </div>
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-section">
        <h3 className="title">Technical Skills</h3>
        <div className="skills-list">
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React Js</p>
          <p>Node Js</p>
          <p>jQuery</p>
          <p>Bootstrap</p>
          <p>APIs</p>
          <p>Responsive Design</p>
          <p>Testing and Debugging</p>
        </div>
      </div>
      <div className="skills-section">
        <h3 className="title">Soft Skills</h3>
        <div className="skills-list">
          <p>Creativity</p>
          <p>Teamwork</p>
          <p>Problem-Solving</p>
          <p>Critical Thinking</p>
          <p>Attention To Details</p>
          <p>Time and Project Management</p>
          <p>Communication</p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
