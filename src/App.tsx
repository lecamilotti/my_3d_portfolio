import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  // SpaceshipCanvas,
  // ISSCanvas,
} from './components';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-gradient-to-r from-blue-900 to-black'>
        {/* <SpaceshipCanvas /> */}
        <StarsCanvas />

        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0 w-full'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
