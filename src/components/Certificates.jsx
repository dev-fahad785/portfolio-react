
import { useState } from 'react';
import Card from './Card';
import Heading from './Heading';
import { certificateData } from '../data/certificates';

const Certificates = () => {
    const [filter, setFilter] = useState('featured');

    const btns = [
        { label: 'Featured', value: 'featured' },
        { label: 'Web', value: 'web' },
        { label: 'Data Science', value: 'data science' },
        { label: 'SQL', value: 'sql' },
        { label: 'OS', value: 'OS' },
        { label: 'Other', value: 'other' },
        { label: 'All', value: 'All' },
        { label: 'Extra Curricular', value: 'extracirricular' },
    ];

    const filterCertificates = (category) => {
        setFilter(category);
    };

    const filteredCertificates = filter === 'All'
        ? certificateData
        : certificateData.filter(certificate => certificate.category.includes(filter));

    return (
        <div id='certificates' className="py-20 px-4 min-h-screen bg-white dark:bg-background">
            <div className="max-w-7xl mx-auto">
                <Heading heading={"Certifications"} subHeading={`Certifications I Have ${certificateData.length}`}/>
                
                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {btns.map((btn) => (
                        <button
                            key={btn.value}
                            className={`py-2 px-6 rounded-full text-sm font-medium transition-all duration-300 ${filter === btn.value
                                ? 'bg-black text-white dark:bg-white dark:text-black shadow-lg scale-105'
                                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-300'
                                }`}
                            onClick={() => filterCertificates(btn.value)}
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
                    {filteredCertificates.map((certificate, index) => (
                        <div
                            key={`${certificate.title}-${index}`}
                            className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700"
                            style={{
                                animationDelay: `${index * 100}ms`,
                                animationFillMode: 'both'
                            }}
                        >
                            <Card
                                image={certificate.image}
                                title={certificate.title}
                                tags={certificate.tags}
                                btnText={'View Certificate'}
                                btn2Text={false}
                                btn1Url={certificate.githubLink}
                            />
                        </div>
                    ))}
                </div>

                {filteredCertificates.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-gray-500 dark:text-gray-400 text-lg">No certifications found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
};


import SectionWrapper from './SectionWrapper';
export default SectionWrapper(Certificates, "certificates");
