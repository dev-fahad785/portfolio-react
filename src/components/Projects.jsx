
import { useState } from 'react';
import Card from './Card';
import Heading from './Heading';
import { projectData } from '../data/projects';

const Projects = () => {
    const [filter, setFilter] = useState('Featured');

    const btns = [
        { label: 'Featured', value: 'Featured' },
        { label: 'Semester', value: 'semester' },
        { label: 'Javascript', value: 'Javascript' },
        { label: 'React JS', value: 'React' },
        { label: 'Fullstack', value: 'Full Stack' },
        { label: 'Show All', value: 'All' },
    ];

    const filterProjects = (category) => {
        setFilter(category);
    };

    const filteredProjects = filter === 'All'
        ? projectData
        : projectData.filter(project => project.category.includes(filter));

    return (
        <div id='projects' className="py-20 px-4 min-h-screen bg-gray-50/50 dark:bg-background">
            <div className="max-w-7xl mx-auto">
                <Heading
                    heading="Projects"
                    subHeading={`Showcasing ${projectData.length} projects across different technologies`}
                />

                {/* Enhanced Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {btns.map((btn) => (
                        <button
                            key={btn.value}
                            className={`py-2 px-6 rounded-full text-sm font-medium transition-all duration-300 ${filter === btn.value
                                ? 'bg-black text-white dark:bg-white dark:text-black shadow-lg scale-105'
                                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-300'
                                }`}
                            onClick={() => filterProjects(btn.value)}
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid with enhanced layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700"
                            style={{
                                animationDelay: `${index * 100}ms`,
                                animationFillMode: 'both'
                            }}
                        >
                            <Card
                                title={project.title}
                                description={project.description}
                                features={project.features}
                                tags={project.tags}
                                btnText="GitHub"
                                btn2Text={project.liveDemoLink !== '#' ? "Live Demo" : null}
                                btn1Url={project.githubLink}
                                btn2Url={project.liveDemoLink}
                            />
                        </div>
                    ))}
                </div>

                {/* No projects message */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-gray-500 dark:text-gray-400 text-lg">No projects found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
};


import SectionWrapper from './SectionWrapper';
export default SectionWrapper(Projects, "projects");