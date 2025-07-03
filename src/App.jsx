import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Projects from './pages/projects';
import Contact from './pages/contact';
import CustomCursor from './components/CustomCursor.jsx';
import './components/CustomCursor.css';

function App() {
  const [cursorType, setCursorType] = React.useState('circle');

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

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><CustomCursor type={cursorType} /><Home /></>} />
          <Route path="/projects" element={<><CustomCursor type={cursorType} /><Projects /></>} />
          <Route path="/contact" element={<><CustomCursor type="circle" /><Contact /></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
