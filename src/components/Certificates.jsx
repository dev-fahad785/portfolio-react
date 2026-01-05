
import { useState } from 'react';
import Card from './Card';
import Heading from './Heading'

const Certificates = () => {
    const [filter, setFilter] = useState('featured');

    const certificateData = [
        {
            image: 'images/certificates/react.png',
            title: 'React Basics',
            tags: ['React', 'JavaScript', 'Frontend'],
            category: ['featured', 'web'],
            githubLink: 'https://coursera.org/share/ca00c1a7e4ad806b02599c8452b508d3',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/github.png',
            title: 'Git & Github',
            tags: ['Git', 'Version Control',],
            category: ['featured', 'web'],
            githubLink: 'https://coursera.org/share/af886bcafcf5b066b0391cf4f4e19672',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/freecodecamp.png',
            title: 'Responsive Web Design',
            tags: ['HTML', 'CSS', 'Mobile-Friendly'],
            category: ['featured', 'web'],
            githubLink: 'https://www.freecodecamp.org/certification/Fahad785/responsive-web-design',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/intro-to-python.png',
            title: 'Intro to Python',
            tags: ['Python', 'Programming Basics', 'Data Structures'],
            category: ['data science'],
            githubLink: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/e4540d6a5b2e9ca52e0016c3413aebb752c1ebbd',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/EDA.png',
            title: 'Exploratory Data Analysis In Python',
            tags: ['Python', 'Data Science', 'EDA'],
            category: ['featured', 'data science'],
            githubLink: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/8196a10f16e23c773fae6d00088d25beb51c8104',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/efficient-code-in-python.png',
            title: 'Writing Efficient Code In Python',
            tags: ['Python', 'Optimization', 'Performance Tuning'],
            category: ['data science'],
            githubLink: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/ae42b40c211f763da228c1d3b1c9829462c78ea0',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/linux1.png',
            title: 'Intro to Linux',
            tags: ['Linux', 'Command Line', 'File System'],
            category: ['OS'],
            githubLink: 'https://www.coursera.org/account/accomplishments/verify/ZRYVDT6YJU6D',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/linux2.png',
            title: 'Command Line Basics',
            tags: ['Bash', 'CLI', 'Scripting'],
            category: ['OS'],
            githubLink: 'https://www.coursera.org/account/accomplishments/verify/N5QLPPSVZQV6',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/sql-1.png',
            title: 'Intro to SQL',
            tags: ['SQL', 'Databases', 'Querying'],
            category: ['sql'],
            githubLink: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/888118d23ea2cd1a288f0a62ac219d50ad1a1667',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/sql-2.png',
            title: 'Intermediate SQL',
            tags: ['SQL', 'Joins', 'Aggregation'],
            category: ['sql'],
            githubLink: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/a96813db410ec0927ac9b9108e0bc4cd0d3a0154',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/sql-3.png',
            title: 'Joining in SQL',
            tags: ['SQL', 'Joins', 'Relational Databases'],
            category: ['sql'],
            githubLink: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/6056563c8c96ed27399b8e325327821eb04b96f7',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/wordpress.png',
            title: 'WordPress Development',
            tags: ['WordPress', 'CMS', 'Website Building'],
            category: ['web'],
            githubLink: 'https://www.rfgul.live/images/certificates/wordpress.png',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/freelancing.png',
            title: 'Freelancing',
            tags: ['Freelancing', 'Business Strategy', 'Client Acquisition'],
            category: ['other'],
            githubLink: 'https://www.rfgul.live/images/certificates/freelancing.png',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/acting.png',
            title: 'Best Actor Award',
            tags: ['Acting', 'Performance', 'Theater'],
            category: ['extracirricular'],
            githubLink: 'images/certificates/acting.png',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/calligraphy.jpg',
            title: 'Calligraphy Norway',
            tags: ['Calligraphy', 'Typography', 'Art'],
            category: ['extracirricular'],
            githubLink: 'images/certificates/calligraphy.jpg',
            liveDemoLink: '',
        },
        {
            image: 'images/certificates/NLFP.jpg',
            title: 'NLFP',
            tags: ['Leadership', 'Public Speaking', 'Personal Development'],
            category: ['extracirricular'],
            githubLink: 'images/certificates/NLFP.jpg',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/IKSC.png',
            title: 'IKSC',
            tags: ['Knowledge Competition', 'Critical Thinking', 'Education'],
            category: ['extracirricular'],
            githubLink: 'images/certificates/IKSC.png',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/essay.jpg',
            title: 'Essay Writing',
            tags: ['Writing', 'Creative Thinking', 'Literature'],
            category: ['extracirricular'],
            githubLink: 'images/certificates/essay.jpg',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/painting.jpg',
            title: 'Painting',
            tags: ['Art', 'Creativity', 'Visual Design'],
            category: ['extracirricular'],
            githubLink: 'images/certificates/painting.jpg',
            liveDemoLink: '#',
        },
    ];
    
    const btns = [
        { label: 'Featured', value: 'featured' },
        { label: 'Web', value: 'web' },
        { label: 'Data Science', value: 'data science' },
        { label: 'SQL', value: 'sql' },
        { label: 'OS', value: 'OS' },
        { label: 'Other', value: 'other' },
        { label: 'All', value: 'All' },
        { label: 'Extra Cirricular', value: 'extracirricular' },
    ]

    const filterCertificates = (category) => {
        setFilter(category);
    };

    const filteredCertificates = filter === 'All'
        ? certificateData
        : certificateData.filter(certificate => certificate.category.includes(filter));

    return (
        <div id='certificates' className="py-20 px-4 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <Heading heading={"Certifications"} subHeading={`Certifications I Have ${certificateData.length}`}/>
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {btns.map((btn) => (
                        <button
                            key={btn.value}
                            className={`m-2 py-2 px-4 focus:outline-none focus:ring-2 border border-black border-opacity-60 rounded h-11 w-50 text-black ${filter === btn.value
                                ? 'bg-gray-500 text-white'
                                : 'hover:bg-gray-800 hover:text-white'
                                }`}
                            onClick={() => filterCertificates(btn.value)}
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
                    {filteredCertificates.map((certificate, index) => (
                        <div
                            key={`${certificate.title}-${index}`}
                            className="w-full"
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
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
                        <p className="text-gray-500 text-lg">No certifications found in this category.</p>
                    </div>
                )}
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default Certificates;
