
import { useState } from 'react';

const Card = ({
  title,
  description,
  features = [],
  tags = [],
  btn1Url,
  btn2Url,
  btnText,
  btn2Text,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group w-full max-w-sm bg-white rounded-2xl border border-gray-800 hover:border-gray-500 p-6 transition-all duration-700 hover:shadow-2xl hover:shadow-gray-100/50 cursor-pointer relative overflow-hidden flex flex-col h-96"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl pointer-events-none" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col flex-grow h-full">
        {/* Title & Description - Fixed height section */}
        <div className="mb-4 flex-shrink-0">
          <h3 className="font-bold text-2xl mb-2 text-gray-900 line-clamp-1">{title}</h3>
          <p className="text-gray-600 text-md leading-relaxed line-clamp-3 h-20">
            {description}
          </p>
        </div>

        {/* Feature/Tag Section - Expandable middle section */}
        <div className="relative flex-grow mb-4 overflow-hidden min-h-32">
          {/* Tags (shown when not hovered) */}
          {!isHovered && (
            <div className="flex flex-wrap gap-2 overflow-y-auto max-h-32 pr-1 transition-opacity duration-500">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gray-50 text-gray-700 text-xs rounded-full font-medium border border-gray-100 hover:bg-gray-100 transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Features (shown when hovered) */}
          {isHovered && (
            <div className="flex flex-col gap-2 overflow-y-auto max-h-32 pr-1 transition-opacity duration-500">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Features
              </h4>
              {features.slice(0, 6).map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-sm text-gray-700 animate-slideIn"
                  style={{
                    animationDelay: `${index * 0.05}s`,
                    animationFillMode: 'both',
                    animationDuration: '0.4s',
                  }}
                >
                  <div className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons - Fixed at bottom */}
       <div className="mt-auto pt-4 flex flex-nowrap justify-center gap-3 z-10 flex-shrink-0 overflow-auto">
  <a
    href={btn1Url}
    className="py-1.5 px-4 text-sm border border-black rounded-lg text-black bg-white hover:bg-gray-900 hover:text-white transition-transform transform hover:scale-105 whitespace-nowrap"
    target="_blank"
    rel="noopener noreferrer"
  >
    {btnText}
  </a>
  {btn2Text && (
    <a
      href={btn2Url}
      className="py-1.5 px-4 text-sm border border-black rounded-lg text-black bg-white hover:bg-gray-900 hover:text-white transition-transform transform hover:scale-105 whitespace-nowrap"
      target="_blank"
      rel="noopener noreferrer"
    >
      {btn2Text}
    </a>
  )}
</div>

      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideIn {
          animation-name: slideIn;
        }

        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

// Enhanced Heading Component
const Heading = ({ heading, subHeading }) => (
    <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">{heading}</h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">{subHeading}</p>
    </div>
);

const Projects = () => {
    const [filter, setFilter] = useState('Featured');

    const projectData = [
        {
            title: 'Shopping Cart',
            description: 'OOP-based shopping cart system with file handling capabilities',
            features: ['Object-Oriented Design', 'File I/O Operations', 'CLI Interface', 'Data Persistence'],
            tags: ['Java', 'OOP', 'CLI', 'File Handling'],
            category: 'semester',
            githubLink: 'https://github.com/dev-rfgul/shopping-cart-OOP',
            liveDemoLink: 'https://github.com/dev-rfgul/shopping-cart-OOP',
        },
        {
            title: 'Bus Management System',
            description: 'Complete documentation and system design for bus operations',
            features: [ 'Requirements Analysis', 'UML Diagrams', 'Documentation'],
            tags: ['Software Engineering', 'Documentation', 'UML'],
            category: 'semester',
            githubLink: 'https://github.com/dev-rfgul/bus-management-system',
            liveDemoLink: 'https://github.com/dev-rfgul/bus-management-system',
        },
        {
            title: 'EDA on Telecom Data',
            description: 'Comprehensive exploratory data analysis on customer churn',
            features: ['Data Visualization', 'Statistical Analysis', 'Pattern Recognition', 'Insights Generation'],
            tags: ['Python', 'Pandas', 'Numpy', 'EDA'],
            category: 'semester',
            githubLink: 'https://github.com/dev-rfgul/EDA-churn-analysis',
            liveDemoLink: 'https://github.com/dev-rfgul/EDA-churn-analysis/blob/main/customer-churn-analysis.ipynb'
        },
    
        {
            title: 'Crypto Price Checker',
            description: 'Real-time cryptocurrency price tracking application',
            features: ['Live Price Updates', 'Multiple Currencies', ],
            tags: ['JavaScript', 'API', 'HTML', 'CSS'],
            category: 'Javascript',
            githubLink: 'https://github.com/dev-rfgul/crypto-price-checker',
            liveDemoLink: 'https://cryptoprices785.netlify.app/',
        },
        {
            title: 'Music Player',
            description: 'Spotify-inspired music player with modern interface',
            features: ['Audio Controls', 'Playlist Management', 'Responsive UI'],
            tags: ['JavaScript', 'HTML', 'CSS', 'Audio API'],
            category: 'Javascript',
            githubLink: 'https://github.com/dev-rfgul/spotify',
            liveDemoLink: 'https://spotify785.netlify.app/',
        },
        {
            title: 'QR Code Generator',
            description: 'Generate QR codes for any text or URL instantly',
            features: ['Instant Generation', 'URL to QR code','Text to QR code'],
            tags: ['JavaScript', 'API', 'HTML', 'CSS'],
            category: ['Javascript', ],
            githubLink: 'https://github.com/dev-rfgul/qr-code-generater',
            liveDemoLink: 'https://qrcode785.netlify.app/',
        },
        {
            title: 'Tic Tac Toe Game',
            description: 'Classic game with smart AI opponent and score tracking',
            features: [ 'Score Tracking', 'Responsive Design'],
            tags: ['JavaScript', 'Game Logic', 'HTML', 'CSS'],
            category: 'Javascript',
            githubLink: 'https://github.com/dev-rfgul/ticTacToe',
            liveDemoLink: 'https://tictactoe785.netlify.app/',
        },
        {
            title: 'Text to Speech',
            description: 'Convert any text to natural-sounding speech',
            features: ['Multiple Voices', 'Speed Control', 'Voice Selection', 'Browser Compatible'],
            tags: ['JavaScript', 'Web Speech API', 'HTML', 'CSS'],
            category: ['Javascript', ''],
            githubLink: 'https://github.com/dev-rfgul/text-to-speech',
            liveDemoLink: 'https://tts785.netlify.app/',
        },
        {
            title: 'Hashtags & Keywords Generator',
            description: 'AI-powered hashtag and keyword generation for social media',
            features: ['AI Generation', 'Social Media Optimization', 'Keyword Research', 'Copy to Clipboard'],
            tags: ['JavaScript', 'API', 'HTML', 'CSS'],
            category: ['Javascript', ],
            githubLink: 'https://github.com/dev-rfgul/hashtag-generator',
            liveDemoLink: 'https://hashtags785.netlify.app/',
        },
        {
            title: 'Weather App',
            description: 'Get real-time weather updates for any location worldwide',
            features: ['Live Weather Data', 'Location Search', 'Weather Forecasts', 'Temperature Units'],
            tags: ['JavaScript', 'Weather API', 'HTML', 'CSS'],
            category: 'Javascript',
            githubLink: 'https://github.com/dev-rfgul/weather-app',
            liveDemoLink: 'https://weather785.netlify.app/',
        },
        {
            title: 'Password Generator',
            description: 'Generate secure passwords with customizable options',
            features: ['Custom Length', 'Character Sets', 'Strength Meter', 'Copy to Clipboard'],
            tags: ['React', 'Vite', 'Tailwind CSS', 'Security'],
            category: 'React',
            githubLink: 'https://github.com/dev-rfgul/6-password-generator',
            liveDemoLink: 'https://6-password-generator.vercel.app/',
        },
        {
            title: 'Currency Converter',
            description: 'Real-time currency conversion with live exchange rates',
            features: ['Live Exchange Rates', 'Multiple Currencies', 'Historical Data', 'Conversion History'],
            tags: ['React', 'Vite', 'API', 'Live Conversion'],
            category: 'React',
            githubLink: 'https://github.com/dev-rfgul/7-currency-converter',
            liveDemoLink: 'https://7-currency-converter-ten.vercel.app/',
        },
        {
            title: 'Todo List',
            description: 'Feature-rich todo app with Context API state management',
            features: ['Add/Edit/Delete Tasks', 'Mark Complete', 'Local Storage', 'Filter Options'],
            tags: ['React', 'Context API', 'State Management', 'Local Storage'],
            category: 'React',
            githubLink: 'https://github.com/dev-rfgul/todolist-context-api-',
            liveDemoLink: 'https://todolist-fawn-xi.vercel.app/',
        },
        {
            title: 'Invoice Generator',
            description: 'Professional invoice generator with download and print features',
            features: ['PDF Generation', 'Print Support', 'Custom Templates', 'Tax Calculations'],
            tags: ['React', 'Vite', 'PDF', 'Print'],
            category: 'React',
            githubLink: 'https://github.com/dev-rfgul/invoice-generaator',
            liveDemoLink: 'https://invoice-generaator.vercel.app/',
        },
        {
            title: 'Dice Game',
            description: 'Interactive dice game with beautiful animations and scoring',
            features: ['AI Opponent', 'Score System', 'Multiple Players', 'Game Statistics'],
            tags: ['React', 'Tailwind CSS', 'Game Logic', 'Animations'],
            category: ['React', ],
            githubLink: 'https://github.com/dev-rfgul/dice-game',
            liveDemoLink: 'https://dice-game-lime-five.vercel.app/',
        },
        {
            title: 'AI Vs Human Game',
            description: 'Number guessing game where you compete against AI',
            features: ['AI Opponent', 'Difficulty Levels', 'Score Tracking', 'Game Analytics'],
            tags: ['React', 'Vite', 'Tailwind CSS', 'AI Logic'],
            category: ['React', 'Featured'],
            githubLink: 'https://github.com/dev-rfgul/ai-vs-human-vite-',
            liveDemoLink: 'https://ai-vs-human-game.vercel.app/',
        },
        {
            title: 'Bin Mukhtar Tax Consultants',
            description: 'Professional website for tax consultation services',
            features: ['SEO Optimized', 'Contact Forms', 'Service Pages', 'Mobile Responsive'],
            tags: ['Next.js', 'React', 'Company Website', 'SEO'],
            category: ['React', 'Featured'],
            githubLink: 'https://github.com/dev-rfgul/bin-mukhtar',
            liveDemoLink: 'https://binmukhtar.vercel.app/',
        },
        {
            title: 'Bit x Coin',
            description: 'Modern cryptocurrency landing page with animations',
            features: ['Modern Design', 'Smooth Animations', 'Responsive Layout', 'Performance Optimized'],
            tags: ['React', 'Vite', 'Tailwind CSS', 'Crypto'],
            category: ['React', ],
            githubLink: 'https://github.com/dev-rfgul/bitxcoin',
            liveDemoLink: 'https://bitxcoin.vercel.app/',
        },
        {
            title: 'Task Ai Studio',
            description: 'A tool for people with short term memory loss to help them remember their tasks',
            features: ['Productivity Tool','Designed for short term memory issues','AI Task Management', 'Task Reminders','Whatsapp Alert System','Productivity Report' ],
            tags: ["Fullstack",'React', 'Mongo', 'NodeJS', 'Express', 'Whatsapp Bot', 'Tailwind CSS', 'Gemeni API',],
            category: ['Full Stack', 'Featured'],
            githubLink: 'https://github.com/dev-rfgul/task-manager',
            liveDemoLink: 'https://taskai.studio',
        },
        {
            title: 'Smart University Transport System',
            description: 'A web application to manage university transport system',
            features: ['Smart transport Schedule', 'Dijkstra for Path finding', 'Live Location', 'Admin Dashboard', ],
            tags: ["Fullstack",'Django','SQL','Google Auth','Dijkstra Algorithm'],
            category: ['Full Stack', 'Featured'],
            githubLink: 'https://github.com/dev-rfgul/univ-bus-management-system',
            liveDemoLink: 'https://busconnect.pythonanywhere.com/',
        },
        {
            title: 'Ecommerce Website',
            description: 'A full-stack ecommerce website with admin panel',
            features: ['78% performance Boost','Product Management', 'User Management', 'Order Processing', 'Analytics Dashboard'],
            tags: ["Fullstack",'React', 'NodeJS', 'Express', 'MongoDB', 'Tailwind CSS'],
            category: ['Full Stack', 'Featured'],
            githubLink: 'https://github.com/dev-rfgul/glows-lifestyle',
            liveDemoLink: 'https://glowzlifestyle.shop/',

        },
            {
            title: 'Study Group Finder',
            description: 'Full-stack web app to connect students for collaborative learning',
            features: ['User Authentication', 'Real-time Matching', 'Group Management', 'Responsive Design'],
            tags: ["Fullstack",'React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
            category: ['semester', 'Featured','Full Stack'],
            githubLink: 'https://github.com/dev-rfgul/study-group-finder',
            liveDemoLink: 'https://study-group-finder-cyan.vercel.app/',
        },
    ];

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
        <div id='projects' className="py-20 px-4 min-h-screen">
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
                            className={`m-2 py-2 px-4 focus:outline-none focus:ring-2 border border-black border-opacity-60 rounded h-11 w-50 text-black ${filter === btn.value
                                ? 'bg-gray-500 text-white'  // Active button styles
                                : 'hover:bg-gray-800 hover:text-white'  // Inactive button styles
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
                            className="w-full"
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                            }}
                        >
                            <Card
                                title={project.title}
                                description={project.description}
                                features={project.features}
                                tags={project.tags}
                                btnText="GitHub"
                                btn2Text="Live Demo"
                                btn1Url={project.githubLink}
                                btn2Url={project.liveDemoLink}
                            />
                        </div>
                    ))}
                </div>

                {/* No projects message */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-gray-500 text-lg">No projects found in this category.</p>
                    </div>
                )}
            </div>

            <style jsx>{`
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

export default Projects;