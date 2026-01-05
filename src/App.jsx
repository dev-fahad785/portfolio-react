// import {React} from 'react';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import AboutMe from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Skills from "./components/Skills";
import Reviews from './components/Reviews';
import Loader from './components/Loader'
import Chatbot from './components/Chatbot';
import { ScrollTimeline } from './components/lightswind/scroll-timeline';
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Loading for 2 seconds
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Loader /> // Show the loader when loading
      ) : (

        <div className="font-poppins">
          <Navbar />
          <Banner />
          <ScrollTimeline/>
          <AboutMe />
          <Reviews />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
          <Chatbot />
        </div>// Show the page content when loading is done
      )}

    </>

  );
};
export default App;
