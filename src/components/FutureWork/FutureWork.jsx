import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./FutureWork.module.css";

// FutureWork component: full-width image, title, and subtitle
// Accepts: image1, image2, title, subtitle
const FutureWork = ({ image1, image2, title, subtitle }) => {
  const navigate = useNavigate();
  const ref = useRef();
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      // If top of component is above 50% from bottom, show image1
      // If center of component is at center of viewport, show image2
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

  // Helper to create hyphen-separated, lower-case slug from title
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const handleClick = () => {
    navigate(`/projects/${slug}`);
  };

  return (
    <div className={styles.futureWork} ref={ref} onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img
        src={showSecond ? image2 : image1}
        alt={title}
        className={styles.image}
        style={{ transition: 'opacity 0.5s' }}
      />
      <div className={styles.textBlock}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default FutureWork;
