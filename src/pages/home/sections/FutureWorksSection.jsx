import React from "react";
import styles from "./FutureWorksSection.module.css";
import FutureWork from "../../../components/FutureWork/FutureWork.jsx";

const works = [
  {
    image: "/about-section-1.png",
    title: "AI-powered Campus Navigation",
    subtitle: "A smart navigation system for the IITM BS campus using computer vision and NLP to help new students and visitors find their way efficiently."
  },
  {
    image: "/about-section-2.png",
    title: "Collaborative Robotics Lab",
    subtitle: "A hands-on robotics lab for students to build, test, and collaborate on real-world robotics projects, fostering innovation and teamwork."
  },
  {
    image: "/about-section-3.png",
    title: "Interdisciplinary Hackathons",
    subtitle: "Annual hackathons bringing together students from AI, programming, electronics, and design to solve impactful challenges."
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
        <FutureWork key={idx} image={work.image} title={work.title} subtitle={work.subtitle} />
      ))}
      <button className={styles.moreWorksBtn}>
        <span>More Works</span>
        <span className={styles.arrow}>&rarr;</span>
      </button>
    </section>
  );
};

export default FutureWorksSection;
