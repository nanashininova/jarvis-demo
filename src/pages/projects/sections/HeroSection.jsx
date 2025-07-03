import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => (
  <section className={styles.heroSection}>
    <div className={styles.centerBlock}>
      <h1 className={styles.title}>FEATURED WORKS</h1>
      <p className={styles.subtitle}>
        A showcase of our finest creations—where creativity meets impact. From bold branding to immersive digital experiences, each project reflects our passion for design and innovation. Explore how we bring ideas to life through thoughtful execution and striking visuals.
      </p>
    </div>
  </section>
);

export default HeroSection;
