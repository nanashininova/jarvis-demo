import React from 'react';
import HeroSection from './sections/HeroSection.jsx';
import AboutSection from './sections/AboutSection.jsx';
import FutureWorksSection from './sections/FutureWorksSection.jsx';
import DomainsSection from './sections/DomainsSection.jsx';
import FooterSection from './sections/FooterSection.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';

const Home = () => {
  const [isHeroInView, setIsHeroInView] = React.useState(true);
  const heroRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      // If top of hero is at or above nav, and bottom is below nav, it's in view
      setIsHeroInView(rect.top <= 64 && rect.bottom > 64);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar isHero={isHeroInView} />
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <AboutSection />
      <FutureWorksSection />
      <DomainsSection />
      <FooterSection />
    </>
  );
}

export default Home;

