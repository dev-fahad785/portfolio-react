

import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import React from "react";
import ShinyButton from '@/components/magicui/shiny-button';

const Banner = () => {
    return (
        <div id='home' className="p-5 md:p-10 lg:mt-20  md:mt-18 mt-4  rounded-lg  bg-white">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-black mb-3 md:mb-0 md:pr-8 flex flex-col items-center justify-center">
                    <div className="text-center md:text-left lg:mb-8 md:mb-4 flex flex-col items-center">
                        <h1 className="text-lg text-gray-700 mb-2 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:text-black">
                            Hello, I am
                        </h1>
                        <h1 className="text-4xl md:text-5xl font-semibold mb-2 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:text-gray-700">
                            Muhammad Fahad
                        </h1>
                        <h1 className="text-xl md:text-2xl text-gray-600 mb-4 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:text-black">
                            Junior Software Engineer 
                        </h1>
                    </div>
                    <div className="flex justify-center md:justify-start mb-4">
                        <ShinyButton text='Download CV' />
                    </div>

                    {/* Icons Section */}
                    <div className="flex justify-center md:justify-start space-x-6">
                        <a href="https://github.com/dev-fahad785" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-800 hover:scale-110 transition-colors duration-300">
                            <FaGithub size={35} />
                        </a>
                        <a href="https://www.linkedin.com/in/fahad785" target="_blank" rel="noopener noreferrer" className="text-black hover:scale-110 hover:text-blue-600 transition-colors duration-300">
                            <FaLinkedin size={35} />
                        </a>
                    </div>
                </div>

                <div className="md:w-1/2 flex justify-center items-center">
                    <div className="flex-shrink-0 w-64 h-64 mt-12 md:w-80 md:h-80 lg:w-96 lg:h-96 border border-black border-opacity-30 rounded-full overflow-hidden">
                        <img
                            src="/images/me-1.jpg"
                            alt="rf gul "
                            className="object-cover w-full h-full object-top  rounded-full"
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;
