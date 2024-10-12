import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Navbar from './pages/navbar/navbar';
import Hero from './pages/hero/hero';
import Education from './pages/education/education';
import Projects from './pages/projects/projects';
import Footer from './pages/footer/footer';

const Homepage = () => {
  return (
    <div className='homeContent'>
      <Navbar />
      <Hero />
      <Education />
      <Projects />
      <Footer />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);

