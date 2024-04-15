import React from 'react';

import '../utils/Header.css';

const Header = () => {
    return (
        <header>
            <h1 className='header'>derek medrano</h1>
            <img src="../public/assets/portfolio_cat.gif" alt="GIF of a cat" className="gif-cat" />
        </header>
    )
};

export default Header;