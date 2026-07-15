

import IconCloud from '@/components/magicui/IconCloud';
import React, { useState, useEffect, useRef } from 'react';
import Heading from './Heading';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';
import { FaWindows } from 'react-icons/fa';

// Extract all slugs for the icon cloud
const slugs = [...new Set(Object.values(skillsData)
    .flat()
    .map(skill => skill.slug)
    .filter(Boolean))];



const SkillItem = ({ skill, showExperience = false }) => {
    const stars = Array(5).fill(0);
    const CustomIcon = skill.customIcon === "windows" ? FaWindows : null;

    return (
        <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-sm transition-all duration-300 hover:scale-102 hover:shadow-md hover:border-black dark:hover:border-gray-500 group">
            <div className="flex items-center gap-3">
                {(skill.slug || CustomIcon) && (
                    <div className="w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-md group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
                        {CustomIcon ? (
                            <CustomIcon aria-label={skill.name} className="w-5 h-5 text-[#0078D4]" />
                        ) : (
                            <img
                                src={`https://cdn.simpleicons.org/${skill.slug}`}
                                alt={skill.name}
                                className="w-5 h-5"
                            />
                        )}
                    </div>
                )}
                <div>
                    <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                    {showExperience && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{skill.experience}</p>
                    )}
                </div>
            </div>
            <div className="flex text-gray-600">
                {stars.map((_, index) => (
                    <span key={index} className="text-lg">
                        {index < skill.level ? "★" : "☆"}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    const [activeTab, setActiveTab] = useState("frontend");
    const [isVisible, setIsVisible] = useState(false);
    const skillsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            if (skillsRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    const categories = [
        { id: "frontend", label: "Frontend" },
        { id: "backend", label: "Backend" },
        { id: "databases", label: "Databases" },
        { id: "deployment", label: "Deployment" },
        { id: "aws", label:"AWS(Basics)"},
        { id: "devops", label:"DevOps"},
        { id: "languages", label: "Languages" },
        { id: "eda", label: "EDA" },
        { id: "versioncontrol", label: "Version Control" },
        { id: "operatingsystem", label: "OS" },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="skills" className="py-16 bg-white dark:bg-background" ref={skillsRef}>
            <Heading heading={"Skills"} subHeading={"My Technical Proficiencies"} />

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Left Side: Skills Icon Cloud */}
                    <div className="w-full lg:w-2/5 flex justify-center items-center">
                        <div className="relative">
                            <div className="absolute -inset-4  rounded-full opacity-30 blur-xl animate-pulse"></div>
                            <div className={`relative p-6 rounded-full transition-all duration-1000 ${isVisible ? 'animate-spin-slow opacity-100' : 'opacity-0'}`}>
                                <IconCloud iconSlugs={slugs} />
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Skills Details */}
                    <div className="w-full lg:w-3/5">
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-500">
                            {/* <div className="mb-8">

                                <p className="text-gray-600 dark:text-gray-300">
                                    I specialize in building modern, responsive web applications using the latest technologies.
                                    My strengths lie in frontend development with React and Next.js, backed by solid programming fundamentals.
                                </p>
                            </div> */}

                            {/* Tabs Navigation */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveTab(category.id)}
                                        className={`px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${activeTab === category.id
                                            ? "bg-gray-500 text-white"
                                            : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                                            }`}
                                    >
                                        {category.label}
                                    </button>
                                ))}
                            </div>

                            {/* All Skills in Category */}
                            <div>
                                <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-800 dark:text-white">
                                    All {categories.find(c => c.id === activeTab)?.label} Skills
                                    <span className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">({skillsData[activeTab].length})</span>
                                </h3>
                                <motion.div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-3"
                                    variants={container}
                                    initial="hidden"
                                    animate="show"
                                    key={activeTab}
                                >
                                    {skillsData[activeTab].map((skill, index) => (
                                        <motion.div key={index} variants={item}>
                                            <SkillItem skill={skill} showExperience={true} />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>

                        {/* Learning Next */}
                        {/* <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-blue-100 dark:border-gray-800">
                            <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">Currently Learning</h3>
                            <div className="flex flex-wrap gap-2">
                                {[ "DSA", "LeetCode", "Django", "Full Stack Projects"].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-600 dark:text-blue-400 text-sm rounded-full border border-blue-200 dark:border-gray-700"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};


import SectionWrapper from './SectionWrapper';
export default SectionWrapper(Skills, "skills");
