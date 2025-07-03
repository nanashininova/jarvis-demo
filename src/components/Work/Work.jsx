
import React from 'react';
import styles from './Work.module.css';
// ...existing code...

import { useRef, useEffect, useState } from 'react';

const Work = ({ image1, image2, title, subtitle }) => {
  const ref = useRef();
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const compTop = rect.top;
      const compCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      if (compCenter <= viewportCenter) {
        setShowSecond(true);
      } else if (compTop > windowHeight * 0.5) {
        setShowSecond(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.work} ref={ref}>
      <img
        src={showSecond ? image2 : image1}
        alt={title}
        className={styles.image}
        style={{ transition: 'opacity 0.5s' }}
      />
      <div className={styles.textContent}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default Work;

