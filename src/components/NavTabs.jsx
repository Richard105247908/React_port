import React from 'react';

function NavTabs(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home" onClick={() => props.handlePageChange('Home')}>
          My Website: Richard
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#home" onClick={() => props.handlePageChange('Home')} className={props.currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" onClick={() => props.handlePageChange('About')} className={props.currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" onClick={() => props.handlePageChange('Projects')} className={props.currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" onClick={() => props.handlePageChange('Contact')} className={props.currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
