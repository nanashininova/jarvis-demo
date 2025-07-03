import React from "react";
import styles from "./FutureWork.module.css";

// FutureWork component: full-width image, title, and subtitle
const FutureWork = ({ image, title, subtitle }) => (
  <div className={styles.futureWork}>
    <img src={image} alt={title} className={styles.image} />
    <div className={styles.textBlock}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  </div>
);

export default FutureWork;
