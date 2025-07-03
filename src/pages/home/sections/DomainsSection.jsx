import React from "react";
import styles from "./DomainsSection.module.css";
import Domain from "../../../components/Domain/Domain.jsx";

const domains = [
  {
    title: "Electronics & IoT",
    points: [
      [
        "Embedded Systems",
        "Wireless Communication",
        "Automation and Control Systems"
      ],
      [
        "Sensor Networks",
        "Hardware Prototyping"
      ]
    ]
  },
  {
    title: "Cyber Forensics & Blockchain",
    points: [
      [
        "Digital Forensics",
        "Cybersecurity",
        "Blockchain Technologies"
      ]
    ]
  },
  {
    title: "Game Development & Designing",
    points: [
      [
        "Game Programming",
        "Game Art & Design",
        "Storytelling & Narrative"
      ]
    ]
  },
  {
    title: "Informatics",
    points: [
      [
        "Data Analysis",
        "Data Visualization",
        "Decision Support Systems"
      ]
    ]
  }
];

const DomainsSection = () => (
  <section className={styles.domainsSection}>
    <h2 className={styles.heading}>OUR DOMAINS</h2>
    <div className={styles.domainsList}>
      {domains.map((domain, idx) => (
        <React.Fragment key={idx}>
          <Domain title={domain.title} points={domain.points} />
          {idx !== domains.length - 1 && <hr className={styles.divider} />}
        </React.Fragment>
      ))}
    </div>
  </section>
);

export default DomainsSection;
