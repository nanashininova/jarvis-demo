import React from "react";
import styles from "./Domain.module.css";

const Domain = ({ title, points = [] }) => {
  const ref = React.useRef();
  React.useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const center = windowHeight / 2;
      // Distance from center of element to center of viewport
      const elemCenter = rect.top + rect.height / 2;
      const dist = Math.abs(center - elemCenter);
      // 0 when at center, 1 when far (>= windowHeight/2)
      let ratio = 1 - Math.min(1, dist / (windowHeight / 2));
      // Opacity: 0.3 when far, 1 when at center
      const opacity = 0.3 + 0.7 * ratio;
      if (ref.current) {
        ref.current.querySelectorAll(`.${styles.title}, .${styles.point}`).forEach(el => {
          el.style.opacity = opacity;
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={styles.domain} ref={ref}>
      <h3 className={styles.title}>{title}</h3>
      <hr />
      <div className={styles.pointsGrid}>
        {points.map((col, colIdx) => (
          <ul className={styles.pointsCol} key={colIdx}>
            {col.map((point, idx) => (
              <li className={styles.point} key={idx}>{point}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Domain;
