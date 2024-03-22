import React from 'react';
import Panda from '../images/panda.jpg'


const Home = () => {
  return(
    <div>
    <div className="container">
      <div className>
        <div className>
          <img src={Panda} width="200px" alt="Avatar" />
        </div>
        <div className="col-md-6">
          <h1>Hello, I'm Richard Josiah.</h1>
          <p>
            Welcome to my portfolio site! I am a Front End Web Developer specializing in UI / UX Designer. 
          </p>
          <p>This site showcases my projects, skills, and experiences. Feel free to explore!</p>
        </div>
      </div>
    </div>
  </div>
);
}

export default Home;
