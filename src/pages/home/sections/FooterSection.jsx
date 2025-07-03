import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./FooterSection.module.css";
import Footer from "../../../components/Footer/Footer.jsx";

const FooterSection = () => (
  <footer className={styles.footerSection}>
    <div className={styles.centerBlock}>
      <hr className={styles.hr} />
      <h2 className={styles.title}>JARVIS</h2>
      <hr className={styles.hr} />
      <div className={styles.subtitle}>
        <div>TURNING IMAGINATION</div>
        <div>INTO REALITY</div>
      </div>
      <button className={styles.joinBtn}>
        <span>Join us</span>
        <span className={styles.arrow}>&rarr;</span>
      </button>

      <div className={styles.marqueeWrapper}>
        <Marquee gradient={false} speed={40} pauseOnHover={false} direction="right">
          {["about-section-1.png", "about-section-2.png", "about-section-3.png", "about-section-1.png", "about-section-2.png", "about-section-3.png"].map((img, idx) => (
            <div className={styles.marqueeCard} key={idx}>
              <img src={`/${img}`} alt="footer slide" className={styles.marqueeImg} />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Info Columns */}
      <Footer />
    </div>
  </footer>
);

export default FooterSection;
