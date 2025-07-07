import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home';
import Projects from './pages/projects';
import Contact from './pages/contact';
import ProjectPage from './pages/projects/ProjectPage.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import NotFound from './pages/NotFound.jsx';
import About from './pages/about';
import './components/CustomCursor.css';
import './global-bg.css';

function App() {
  const [cursorType, setCursorType] = React.useState('circle');
  const location = useLocation();

  // Listen for entering/leaving FutureWorksSection
  React.useEffect(() => {
    const handleFutureEnter = () => setCursorType('eye');
    const handleFutureLeave = () => setCursorType('circle');
    const handleHeroEnter = () => setCursorType('hello');
    const handleHeroLeave = () => setCursorType('circle');
    window.addEventListener('futureworks-cursor-enter', handleFutureEnter);
    window.addEventListener('futureworks-cursor-leave', handleFutureLeave);
    window.addEventListener('herosection-cursor-enter', handleHeroEnter);
    window.addEventListener('herosection-cursor-leave', handleHeroLeave);
    return () => {
      window.removeEventListener('futureworks-cursor-enter', handleFutureEnter);
      window.removeEventListener('futureworks-cursor-leave', handleFutureLeave);
      window.removeEventListener('herosection-cursor-enter', handleHeroEnter);
      window.removeEventListener('herosection-cursor-leave', handleHeroLeave);
    };
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<><CustomCursor type={cursorType} /><Home /></>} />
        <Route path="/projects" element={<><CustomCursor type={cursorType} /><Projects /></>} />
        <Route path="/projects/:projectName" element={<><CustomCursor type={cursorType} /><ProjectPage /></>} />
        <Route path="/contact" element={<><CustomCursor type="circle" /><Contact /></>} />
        <Route path="/about" element={<><CustomCursor type={cursorType} /><About /></>} />
        <Route path="*" element={<><CustomCursor type={cursorType} /><NotFound /></>} />
      </Routes>
    </>
  );
}

export default App
