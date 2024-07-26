import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { styles } from './styles';
import { logo } from './assets';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
} from './components';

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the threshold as needed
    };

    handleResize(); // Check on initial render

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className='bg-red-500'>
        {isMobile ? (
          <div className='bg-gradient-to-r from-blue-900 to-black text-white p-4'>
            <div className='flex justify-between items-center bg-red-500 p-5'>
              <p className='text-center text-white '>
                For better performance and to be able to use all the resources
                of this website, the mobile version has been disabled. Thanks
                for understanding.
              </p>
            </div>
            <div className='flex flex-col items-center justify-center h-screen'>
              <img src={logo} alt='Your Logo' className='w-20 h-20 mb-4' />
              <h1 className='text-2xl font-bold'>Leandro Camilotti</h1>
              <p className='text-center'>Frontend Developer</p>
            </div>
          </div>
        ) : (
          <div className='relative z-0  mb-0  bg-gradient-to-r from-blue-900 to-black pb-0'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <div
              className={`w-full mt-50 pb-0 z-10 ${styles.padding} min-h-[300px]`}
            >
              <Contact />
            </div>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
