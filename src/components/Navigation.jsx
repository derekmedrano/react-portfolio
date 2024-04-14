import React from 'react';
import '../utils/Navigation.css'

const Nav = ({ option, setOption }) => {
    const options = ['AboutMe', 'Portfolio', 'Resume', 'Contact'];

    return (
        <nav className='navigation'>
            {options.map((optionKey) =>
        <a
        key={optionKey}
        className={`navigation-link ${option === optionKey ? 'active' : ''}`}
        onClick={() => setOption(optionKey)}
        >
            {optionKey}
        </a>
        )}
        </nav>
    );

};

export default Nav
