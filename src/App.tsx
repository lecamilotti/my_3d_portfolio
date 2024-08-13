import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { styles } from "./styles";
import { logo } from "./assets";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the threshold as needed
    };

    handleResize(); // Check on initial render

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      {isMobile && (
        <div className="bg-gradient-to-r from-blue-900 to-black text-white p-4">
          <div className="flex justify-between items-center bg-red-500 p-5 mt-20 mb-0">
            <p className="text-center text-white ">
              Due to the extensive use of 3D objects, this website is not
              optimized for mobile devices. I strongly recommend using a desktop
              or laptop for the best experience.
            </p>
          </div>
        </div>
      )}
      <div className="relative z-0  mb-0  bg-gradient-to-r from-blue-900 to-black pb-0">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
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
    </BrowserRouter>
  );
};

export default App;
