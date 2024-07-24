import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { styles } from './styles';
import {
  About,
  Contact,
  Experience,
  // Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  // StarsCanvas,
} from './components';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0  mb-0  bg-gradient-to-r from-blue-900 to-black pb-0'>
        {/* <StarsCanvas /> */} {/* need to be fixed on next version  */}
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className={`w-full mt-50 pb-0 ${styles.padding} min-h-[300px]`}>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
