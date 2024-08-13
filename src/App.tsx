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
  console.log(isMobile);

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
      <div className="bg-red-500">
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
      </div>
    </BrowserRouter>
  );
};

export default App;
