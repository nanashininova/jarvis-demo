import React from "react";
import styles from "./AboutSection.module.css";

// AboutSection: Deep navy blue background, sticky heading and text
const AboutSection = () => (
  <section className={styles.aboutSection}>
    {/* Overlapping images absolutely positioned */}
    <div className={styles.imagesOverlapWrapper}>
      <img src="/jarvis-demo/about-section-1.png" alt="About section 1" className={`${styles.aboutImg} ${styles.leftImg} ${styles.img1}`} />
      <img src="/jarvis-demo/about-section-2.png" alt="About section 2" className={`${styles.aboutImg} ${styles.rightImg} ${styles.img2}`} />
      <img src="/jarvis-demo/about-section-3.png" alt="About section 3" className={`${styles.aboutImg} ${styles.leftImg} ${styles.img3}`} />
    </div>
    {/* Sticky clipped text content, always above images */}
    <div className={styles.stickyContent}>
      <div className={styles.left}><h2 className={styles.heading}>WHO WE ARE</h2></div>
      <div className={styles.right}>
        <p className={styles.text}>
          At JARVIS, we are a team of passionate creatives dedicated to craft our unique journeys to empower and unite students interested in Artificial Intelligence, Robotics, Programming, Innovation, and System Design, fostering collaboration, research, practical skill-building, and interdisciplinary innovation among students of the IITM BS program.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
