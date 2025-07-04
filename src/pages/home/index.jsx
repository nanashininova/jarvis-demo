import React from 'react';
import HeroSection from './sections/HeroSection.jsx';
import WhiteIntroSection from './sections/WhiteIntroSection.jsx';
import AboutSection from './sections/AboutSection.jsx';
import FutureWorksSection from './sections/FutureWorksSection.jsx';
import DomainsSection from './sections/DomainsSection.jsx';
import FooterSection from './sections/FooterSection.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';

const Home = () => {
  const [isHeroInView, setIsHeroInView] = React.useState(true);
  const [isWhiteIntroInView, setIsWhiteIntroInView] = React.useState(true);
  const heroRef = React.useRef(null);
  const introRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setIsHeroInView(rect.top <= 64 && rect.bottom > 64);
      }
      if (introRef.current) {
        const rect = introRef.current.getBoundingClientRect();
        // If any part of WhiteIntroSection is visible in viewport
        setIsWhiteIntroInView(rect.bottom > 0 && rect.top < window.innerHeight);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar isHero={isHeroInView} isWhiteIntro={isWhiteIntroInView} />
      <WhiteIntroSection ref={introRef} />
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

