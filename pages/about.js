import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About/About";
import AboutContent from "../components/About/AboutContent";

const about = () => {
  return (
    <div>
      <div className="lg:bg-gradient-to-l from-[#4900EE] to-indigo-600 bg-blue-50">
        <div className=" lg:bg-hero-svg  w-full h-full bg-cover bg-center relative overflow-hidden">
          <svg
            viewBox="0 0 29.31 4.29"
            className="text-gray-300 fill-current absolute w-20 top-[89%] right-10"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path d="M4.29,2.15A2.15,2.15,0,1,1,2.15,0,2.14,2.14,0,0,1,4.29,2.15Z" />
                <path d="M12.63,2.15A2.15,2.15,0,1,1,10.48,0,2.14,2.14,0,0,1,12.63,2.15Z" />
                <path d="M21,2.15A2.15,2.15,0,1,1,18.82,0,2.14,2.14,0,0,1,21,2.15Z" />
                <path d="M29.31,2.15A2.15,2.15,0,1,1,27.16,0,2.15,2.15,0,0,1,29.31,2.15Z" />
              </g>
            </g>
          </svg>
          <Navbar />
          <About />
        </div>
      </div>
      <AboutContent />
    </div>
  );
};

export default about;
