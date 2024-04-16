import React from 'react';

import '../utils/Header.css';
import portfolio_cat from '../../public/assets/portfolio_cat.gif'

const Header = () => {
    return (
        <header>
            <h1 className='header'>derek medrano</h1>
            <img src={portfolio_cat} alt="GIF of a cat" className="gif-cat" />
        </header>
    )
};

export default Header;