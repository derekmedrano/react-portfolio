import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import '../utils/Footer.css'

const Footer = () =>{
    return (
        <footer>
        <ul className='footer'>
          <li>
            <a href='mailto:derekmedrano@gmail.com'>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
          <li>
            <a href='https://github.com/derekmedrano' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
              
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/derek-medrano-9a3b15303/' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
              
            </a>
          </li>
        </ul>

        </footer>
    )
}

export default Footer