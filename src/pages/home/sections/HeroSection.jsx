import React from "react";
import Marquee from "react-fast-marquee";
import { FaWifi, FaEye, FaShieldAlt, FaCloud } from "react-icons/fa";
import styles from './HeroSection.module.css';


const HeroSection = () => {
  // Fire custom events on mouse enter/leave
  const handleMouseEnter = () => {
    window.dispatchEvent(new Event('herosection-cursor-enter'));
  };
  const handleMouseLeave = () => {
    window.dispatchEvent(new Event('herosection-cursor-leave'));
  };
  return (
    <section
      className={styles.hero}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className={styles.title}>JARVIS</h1>
      <div className={styles.subtexts}>
        <div className={styles.subtextLeft}>
          TECH SOCIETY<br />
          IIT'M
        </div>
        <div className={styles.subtextRight}>
          JOINT AI,RESEARCH,VIRTUAL<br />
          NETWORKS<br />
          IOT &amp; ELECTRONICS
        </div>
      </div>
      <div className={styles.iconMarqueeWrapper}>
        <div className={styles.iconMarqueeBlurLeft} />
        <Marquee gradient={false} speed={30} pauseOnHover={false} direction="right">
          <FaWifi className={styles.heroIcon} />
          <FaEye className={styles.heroIcon} />
          <FaShieldAlt className={styles.heroIcon} />
          <FaCloud className={styles.heroIcon} />
          <FaWifi className={styles.heroIcon} />
          <FaEye className={styles.heroIcon} />
          <FaShieldAlt className={styles.heroIcon} />
          <FaCloud className={styles.heroIcon} />
          <FaEye className={styles.heroIcon} />
        </Marquee>
        <div className={styles.iconMarqueeBlurRight} />
      </div>
    </section>
  );
};

export default HeroSection;
