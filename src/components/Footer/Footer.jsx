import React from "react";
import styles from "./Footer.module.css";

const Footer = () => (
  <div className={styles.footerRow}>
    <div className={styles.infoColumns}>
      <div className={styles.infoCol}>
        <div className={styles.infoHeading}>About</div>
        <div className={styles.infoRow}>Works</div>
        <div className={styles.infoRow}>About</div>
        <div className={styles.infoRow}>Contact</div>
      </div>
      <div className={styles.infoCol}>
        <div className={styles.infoHeading}>Socials</div>
        <div className={styles.infoRow}>Instagram</div>
        <div className={styles.infoRow}>Linkedin</div>
        <div className={styles.infoRow}>Twitter</div>
      </div>
    </div>
    <div className={styles.copyright}>
      <span>&copy;</span> 2025 Jarvis
    </div>
  </div>
);

export default Footer;
