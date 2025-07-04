import React from "react";
import styles from "./FutureWorksSection.module.css";
import FutureWork from "../../../components/FutureWork/FutureWork.jsx";

const works = [
  {
    image1: "/jarvis-demo/future-work-1.png",
    image2: "/jarvis-demo/future-work-2.png",
    title: "VR BASED PHOBIA THERAPY",
    subtitle: "VR + PSYCHOLOGY"
  },
  {
    image1: "/jarvis-demo/future-work-3.png",
    image2: "/jarvis-demo/future-work-4.png",
    title: "CYBER INTRUSION PATTERN IDENTIFIER",
    subtitle: "PROJECT"
  },
  {
    image1: "/jarvis-demo/future-work-5.png",
    image2: "/jarvis-demo/future-work-6.png",
    title: "DEEPFAKE DETECTION SUITE",
    subtitle: "PROJECT"
  },
  {
    image1: "/jarvis-demo/future-work-7.png",
    image2: "/jarvis-demo/future-work-8.png",
    title: "AI- BASED NPC EMOTION ENGINE",
    subtitle: "GAME DEV + AFFECTIVE COMPUTING"
  }
];


const FutureWorksSection = () => {
  // Fire custom events on mouse enter/leave
  const handleMouseEnter = () => {
    window.dispatchEvent(new Event('futureworks-cursor-enter'));
  };
  const handleMouseLeave = () => {
    window.dispatchEvent(new Event('futureworks-cursor-leave'));
  };
  return (
    <section
      className={styles.futureWorksSection}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className={styles.heading}>FUTURE WORKS</h2>
      {works.map((work, idx) => (
        <FutureWork
          key={idx}
          image1={work.image1}
          image2={work.image2}
          title={work.title}
          subtitle={work.subtitle}
        />
      ))}
      <button
        className={styles.moreWorksBtn}
        onClick={() => window.location.href = '/projects'}
      >
        <span>More Works</span>
        <span className={styles.arrow}>&rarr;</span>
      </button>
    </section>
  );
};

export default FutureWorksSection;
