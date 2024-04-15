import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Navigation';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './utils/index.css';


function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
    <div>
      <Header />
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="body">{renderPage()}</main>
      <Footer />
    </div>  
    </>
  )
}

export default App
