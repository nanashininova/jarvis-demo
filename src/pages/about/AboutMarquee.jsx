import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./AboutMarquee.module.css";

const MARQUEE_IMAGES = [1, 2, 3, 4, 5, 6];

const AboutMarquee = () => (
  <div className={styles.marqueeWrapper} style={{ position: "relative" }}>
    <div className={styles.footerMarqueeBlurLeft} />
    <Marquee gradient={false} speed={40} pauseOnHover={false} direction="right">
      {MARQUEE_IMAGES.map((num) => (
        <div className={styles.marqueeCard} key={num}>
          <img
            src={`/jarvis-demo/marquee-${num}.png`}
            alt={`footer slide ${num}`}
            className={styles.marqueeImg}
          />
        </div>
      ))}
    </Marquee>
    <div className={styles.footerMarqueeBlurRight} />
  </div>
);

export default AboutMarquee;
