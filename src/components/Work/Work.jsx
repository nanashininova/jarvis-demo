
import React from 'react';
import styles from './Work.module.css';
// ...existing code...
const Work = ({ image, title, subtitle }) => {
  return (
    <div className={styles.work}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.textContent}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default Work;

