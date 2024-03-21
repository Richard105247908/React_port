import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project'; // Import the Project component

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    } else if (currentPage === 'About') {
      return <About />;
    } else if (currentPage === 'Projects') { // Adjusted condition to render Project component
      return <Project />;
    } else {
      return <Contact />;
    }
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

export default PortfolioContainer;
