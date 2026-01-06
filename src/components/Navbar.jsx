
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", to: "home" },
        { name: "About", to: "about" },
        { name: "Skills", to: "skills" },
        { name: "Projects", to: "projects" },
        { name: "Certificates", to: "certificates" },
        { name: "Contact", to: "contact" },
    ];

    return (
        <div id="navbar-scroll" className="">
            {/* Navbar */}
            <div className={`fixed z-50 top-0 left-0 right-0 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"}`}>
                <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
                    {/* Logo */}
                    <div>
                         <a href="/" className="text-2xl font-bold tracking-tighter text-black">RF<span className="text-gray-500">.</span></a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <ul className="flex space-x-6 text-base font-medium text-gray-700">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <ScrollLink
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        offset={-70} 
                                        className="hover:text-black cursor-pointer transition-colors relative group"
                                    >
                                        {link.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                                    </ScrollLink>
                                </li>
                            ))}
                        </ul>
                         <a 
                            href="/images/cv.pdf" 
                            download 
                            className="px-5 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-transform hover:scale-105 shadow-lg"
                        >
                            Download CV
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-2xl text-black focus:outline-none" aria-label="Toggle menu">
                            {menuOpen ? "✕" : "☰"}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[500px] opacity-100 border-t border-gray-100" : "max-h-0 opacity-0"}`}
                >
                    <ul className="flex flex-col p-4 space-y-4 text-center">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <ScrollLink
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="block text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors cursor-pointer"
                                    onClick={() => setMenuOpen(false)} 
                                >
                                    {link.name}
                                </ScrollLink>
                            </li>
                        ))}
                         <li>
                             <a 
                                href="/images/cv.pdf" 
                                download 
                                className="inline-block px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-transform"
                            >
                                Download CV
                            </a>
                         </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
