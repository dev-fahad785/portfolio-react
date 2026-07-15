

import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import React from "react";
import ShinyButton from '@/components/magicui/shiny-button';
import { TypeAnimation } from 'react-type-animation';
import { Link as ScrollLink } from 'react-scroll';

const Banner = () => {
    return (
        <div id='home' className="p-5 md:p-10 lg:mt-20  md:mt-18 mt-4  rounded-lg  bg-white dark:bg-background transition-colors duration-300">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-black dark:text-white mb-3 md:mb-0 md:pr-8 flex flex-col items-center justify-center">
                    <div className="text-center lg:mb-8 md:mb-4 flex flex-col items-center">
                        <h1 className="text-lg text-gray-700 dark:text-gray-300 mb-2 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:text-black dark:hover:text-white">
                            Hello, I am
                        </h1>
                        <h1 className="text-4xl md:text-5xl font-semibold mb-2 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:text-gray-700 dark:hover:text-gray-300 text-black dark:text-white">
                            Muhammad Fahad
                        </h1>

                        <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4 h-8">
                            <TypeAnimation
                                sequence={[
                                    'Junior Software Engineer',
                                    2000,
                                    'MERN/MEAN/Django Developer',
                                    2000,
                                    'AWS Beginner',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </div>
                        <p className="max-w-xl text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300">
                            I build responsive full-stack web apps with React, Node.js, Django, and practical deployment experience.
                        </p>

                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
                        <ShinyButton text='Download CV' className="bg-black dark:bg-white text-white dark:text-black"/>
                        <ScrollLink
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="cursor-pointer rounded-lg border border-gray-300 dark:border-gray-600 px-6 py-2 text-sm font-medium text-gray-800 dark:text-gray-100 hover:border-black dark:hover:border-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            View Projects
                        </ScrollLink>
                    </div>

                    {/* Icons Section */}
                    <div className="flex justify-center md:justify-start space-x-6">
                        <a href="https://github.com/dev-fahad785" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:text-gray-800 dark:hover:text-gray-300 hover:scale-110 transition-colors duration-300">
                            <FaGithub size={35} />
                        </a>
                        <a href="https://www.linkedin.com/in/fahad785" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:scale-110 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                            <FaLinkedin size={35} />
                        </a>
                    </div>
                </div>

                <div className="md:w-1/2 flex justify-center items-center">
                    <div className="flex-shrink-0 w-64 h-64 mt-12 md:w-80 md:h-80 lg:w-96 lg:h-96 border border-black dark:border-white border-opacity-30 rounded-full overflow-hidden">
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
