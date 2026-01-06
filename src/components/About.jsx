
import Heading from './Heading';
import { motion } from 'framer-motion';

const AboutMe = () => {
    const stats = [
        { icon: "👥", title: "Education", detail: "B.Sc. Computer Science", institution: "Islamia University Bahawalpur" },
        { icon: "🏅", title: "Trainee Software Engineer", detail: "6 Months", institution: "Aitch Tech Bahawalpur " },
        { icon: "🚀", title: "Projects", detail: "30+", institution: "Practice Projects" },
        { icon: "📚", title: "Learning", detail: "Angular + DSA", institution: "Beginner" }
    ];

    return (
        <section id='about' className="py-16 px-6 md:px-8 lg:px-32 bg-white dark:bg-background transition-colors duration-300">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <Heading heading={"About Me"} subHeading={"Get to know more about me"} />
            </motion.div>

            <motion.div
                className="mt-12 w-full flex flex-col items-center gap-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-gray-500 transition-all hover:shadow-xl"
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * index }}
                            viewport={{ once: true }}
                        >
                            {/* <div className="text-4xl mb-4 text-blue-600">{stat.icon}</div> */}
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">{stat.title}</h2>
                            <p className="text-gray-700 dark:text-gray-300 text-lg mt-2">{stat.detail}</p>
                            <p className="text-gray-500 dark:text-gray-400 font-bold text-center">{stat.institution}</p>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    className="bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 w-full max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">My Journey</h3>

                    <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                        I am a <span className="font-bold text-black dark:text-white">Trainee Software Engineer</span> - Full Stack with
                        <span className="font-bold text-black dark:text-white"> 6+ Months</span> of experience in Full Stack Web Development
                        <span className="font-bold text-black dark:text-white"> MERN & Django</span>. I have worked on
                        <span className="font-bold text-black dark:text-white"> 30+ practice projects</span> which included
                        <a target="_blank" href="https://www.taskai.studio" className="text-blue-800 dark:text-blue-400 font-medium"> Task AI Studio</a>,a tool for people with short term memeory,
                        <a href="https://www.glowzlifestyle.shop" target="_blank" className="text-blue-800 dark:text-blue-400 font-medium"> Glowz Lifestyle</a> fully functional Ecom Website , and
                        <a href="https://busconnect.pythonanywhere.com/" className="text-blue-800 dark:text-blue-400 font-medium"> Smart Univ Bus Management System</a> which gave me a good understanding of Full Stack development.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2 text-center justify-center">
                        {[
                            'JavaScript', 'React', 'Node JS', 'Express JS', 'MongoDB',
                            'Django', 'Deployment', 'Python', 'EDA', 'Numpy', 'Pandas', 'Matplotlib'
                        ].map((skill, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-black dark:text-gray-200 rounded-full text-xs sm:text-sm font-medium"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    <div className="mt-6 text-center">
                        <a
                            href="#contact"
                            className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-900 dark:border-gray-500 font-medium rounded-lg transition-colors shadow-md hover:shadow-lg dark:hover:bg-gray-700 text-sm sm:text-base text-center"
                        >
                            Get In Touch
                        </a>
                    </div>
                </motion.div>


            </motion.div>
        </section>
    );
};

export default AboutMe;
