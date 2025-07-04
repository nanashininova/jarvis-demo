import React from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import styles from './index.module.css';
import HeroSection from './sections/HeroSection.jsx';
import Work from '../../components/Work/Work.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const Projects = () => {
  React.useEffect(() => {
    window.dispatchEvent(new Event('futureworks-cursor-enter'));
    return () => {
      window.dispatchEvent(new Event('futureworks-cursor-leave'));
    };
  }, []);
  return (
    <div className={styles.projectsPage}>
      <Navbar isHero={false} />
      <HeroSection />
      <Work
        image1="/future-work-1.png"
        image2="/future-work-2.png"
        title="VR BASED PHOBIA THERAPY"
        subtitle="VR + PSYCHOLOGY"
      />
      <Work
        image1="/future-work-3.png"
        image2="/future-work-4.png"
        title="CYBER INTRUSION PATTERN IDENTIFIER"
        subtitle="PROJECT"
      />
      <Work
        image1="/future-work-5.png"
        image2="/future-work-6.png"
        title="DEEPFAKE DETECTION SUITE"
        subtitle="PROJECT"
      />
      <Work
        image1="/future-work-7.png"
        image2="/future-work-8.png"
        title="AI- BASED NPC EMOTION ENGINE"
        subtitle="GAME DEV + AFFECTIVE COMPUTING"
      />
      <Work
        image1="/future-work-9.png"
        image2="/future-work-10.png"
        title="AR Telemedicine Diagnostic Tool"
        subtitle="AR + Healthcare"
      />
      <Work
        image1="/future-work-11.png"
        image2="/future-work-12.png"
        title="CryptoBio"
        subtitle="Blockchain + Bioinformatics"
      />
      <Footer />
    </div>
  );
};

export default Projects;
