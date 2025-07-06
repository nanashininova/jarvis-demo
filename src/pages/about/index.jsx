import React, { Suspense, lazy } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import TeamMember from '../../components/TeamMember/TeamMember';
import styles from './index.module.css';

const ABOUT_IMAGES = [
  '/jarvis-demo/about-page-1.png',
  '/jarvis-demo/about-page-2.png',
  '/jarvis-demo/about-page-3.png'
];

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <Navbar isWhiteIntro={false} />
      <div className={styles.heroSection}>
        <div className={styles.headingBlock}>
          <h1 className={styles.heading}>WHO WE ARE</h1>
        </div>
        <div className={styles.textBlock}>
          <p className={styles.text}>
            At JARVIS, we are a team of passionate creatives dedicated to crafting innovation at the core in domains specific to Cyberforensics, Informatics, Electronics, and Game development.
          </p>
        </div>
      </div>
      <div className={styles.aboutImagesSection}>
        {ABOUT_IMAGES.map((img, idx) => (
          <div
            key={idx}
            className={
              styles.aboutImageRow + ' ' + (idx % 2 === 0 ? styles.left : styles.right)
            }
          >
            <img src={img} alt={`About ${idx + 1}`} className={styles.aboutImage} />
          </div>
        ))}
      </div>
      <hr className={styles.sectionDivider} />
      <div className={styles.teamSection}>
        <h2 className={styles.teamHeading}>DREAM.CREATE.REPEAT</h2>
        <div className={styles.teamSubheading}>MEET THE TEAM</div>
        <div className={styles.teamGrid}>
          <TeamMember image="/jarvis-demo/team-member-1.png" name="XXX" position="Secretary" />
          <TeamMember image="/jarvis-demo/team-member-2.png" name="XXX" position="Advisor" />
          <TeamMember image="/jarvis-demo/team-member-3.png" name="XXX" position="Dep Sec" />
          <TeamMember image="/jarvis-demo/team-member-4.png" name="XXX" position="Legal Advisor" />
        </div>
      </div>
      <hr className={styles.sectionDivider} />
      <div className={styles.marqueeSection}>
        <div className={styles.marqueeTextBlock}>
          <span>TURNING IMAGINATION</span>
          <span>INTO REALITY</span>
        </div>
        <button
          className={styles.aboutJoinBtn}
          onClick={() => window.open('https://docs.google.com/forms/d/1EWxVoFPi_kHb06HrmCuyrPE2xo_0KPEMyS_D5nOZkRU', '_blank', 'noopener noreferrer')}
        >
          <span>Join us</span>
          <span className={styles.aboutArrow}>&rarr;</span>
        </button>
        {/* Marquee */}
        <Suspense fallback={null}>
          <AboutMarquee />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};


const AboutMarquee = lazy(() => import('./AboutMarquee.jsx'));
export default About;
