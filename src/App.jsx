
import { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import AboutMe from './components/About';
import Contact from './components/Contact';
import Loader from './components/Loader';
import { ScrollTimeline } from './components/lightswind/scroll-timeline';
import SEO from './components/SEO';

const Projects = lazy(() => import('./components/Projects'));
const Certificates = lazy(() => import('./components/Certificates'));
const Skills = lazy(() => import("./components/Skills"));
const Reviews = lazy(() => import('./components/Reviews'));
const Chatbot = lazy(() => import('./components/Chatbot'));

const App = () => {
  return (
    <HelmetProvider>
      <SEO 
        title="Muhammad Fahad | Portfolio" 
        description="Portfolio of Muhammad Fahad, a Junior Software Engineer specializing in React and frontend development." 
        name="Muhammad Fahad" 
        type="website" 
      />
      <div className="font-poppins">
        <Navbar />
        <Banner />
        <ScrollTimeline/>
        <AboutMe />
        <Suspense fallback={<div className="h-96 flex items-center justify-center"><Loader /></div>}>
          <Reviews />
          <Skills />
          <Projects />
          <Certificates />
        </Suspense>
        <Contact />
        <Suspense fallback={null}>
          <Chatbot />
        </Suspense>
      </div>
    </HelmetProvider>
  );
};

export default App;

