import React from "react";
import { Link } from 'react-router-dom';
import styles from "./Footer.module.css";

const Footer = () => {
  // Fire custom events on mouse enter/leave
  const handleMouseEnter = () => {
    window.dispatchEvent(new Event('futureworks-cursor-leave'));
  };
  const handleMouseLeave = () => {
    window.dispatchEvent(new Event('futureworks-cursor-enter'));
  };
  return (
    <div className={styles.footerRow} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={styles.infoColumns}>
        <div className={styles.infoCol}>
          <div className={styles.infoHeading}>About</div>
          <Link
            to="/projects"
            className={styles.infoRow}
            tabIndex={0}
            role="button"
          >Works</Link>
          <Link
            to="/about"
            className={styles.infoRow}
            tabIndex={0}
            role="button"
          >About</Link>
          <Link
            to="/contact"
            className={styles.infoRow}
            tabIndex={0}
            role="button"
          >Contact</Link>
        </div>
        <div className={styles.infoCol}>
          <div className={styles.infoHeading}>Socials</div>
          <div className={styles.infoRow}>Instagram</div>
          <div className={styles.infoRow}>Linkedin</div>
          <div className={styles.infoRow}>Twitter</div>
        </div>
      </div>
      <div className={styles.copyrightMobile}>
        <span>&copy;</span> 2025 Jarvis
      </div>
      <div className={styles.copyright}>
        <span>&copy;</span> 2025 Jarvis
      </div>
    </div>
  );
};

export default Footer;
