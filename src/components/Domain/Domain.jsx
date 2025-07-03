import React from "react";
import styles from "./Domain.module.css";

const Domain = ({ title, points = [] }) => (
  <div className={styles.domain}>
    <h3 className={styles.title}>{title}</h3>
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

export default Domain;
