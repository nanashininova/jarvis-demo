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
      <button
        className={styles.joinBtn}
        onClick={() => window.open('https://docs.google.com/forms/d/1EWxVoFPi_kHb06HrmCuyrPE2xo_0KPEMyS_D5nOZkRU', '_blank', 'noopener noreferrer')}
      >
        <span>Join us</span>
        <span className={styles.arrow}>&rarr;</span>
      </button>

      {/* Two line spaces before marquee */}
      <div style={{ height: '2.5em' }} />

      <div className={styles.marqueeWrapper} style={{ position: 'relative' }}>
        <div className={styles.footerMarqueeBlurLeft} />
        <Marquee gradient={false} speed={40} pauseOnHover={false} direction="right">
          {[1,2,3,4,5,6].map((num) => (
            <div className={styles.marqueeCard} key={num}>
              <img src={`/jarvis-demo/marquee-${num}.png`} alt={`footer slide ${num}`} className={styles.marqueeImg} />
            </div>
          ))}
        </Marquee>
        <div className={styles.footerMarqueeBlurRight} />
      </div>
      <div className={styles.marqueeFooterSpacer} />

      {/* Info Columns */}
      <Footer />
    </div>
  </footer>
);

export default FooterSection;
