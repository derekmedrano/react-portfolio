import React from 'react';
import '../utils/Navigation.css'

function Nav({ currentPage, handlePageChange }) {
    return (
      <ul className="nav">
        <li className="nav-item">
          <a
            href="#aboutme"
            onClick={() => handlePageChange('AboutMe')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#project"
            onClick={() => handlePageChange('Project')}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
          >
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </ul>
    );
  }

export default Nav
