import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import data from '../data';
import Cards from '../Cards';

const Project = () => {
  console.log(data[1].title);

  const dataElements = data.map(data => (
    <Cards
      title={data.title}
      deployedlink={data.deployedLink}
      githublink={data.githubLink}
      image={data.image}
      key={data.id} // Add a unique key prop
    />
  ));

  return (
    <Router> {/* Wrap your component with BrowserRouter */}
      <div>
        <h1>Projects</h1>
        {dataElements}
        <p></p>
      </div>
    </Router>
  );
}

export default Project;
