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
    title: "CYBER FORENSICS & BLOCKCHAIN",
    points: [
      [
        "NETWORK FORENSICS",
        "DIGITAL EVIDENCE RECOVERY",
        "BLOCKCHAIN SECURITY & AUDITING"
      ],
      [
        "MALWARE ANALYSIS",
        "SMART CONTRACT DEVELOPMENT",
        "BLOCKCHAIN FORENSICS"
      ]
    ]
  },
  {
    title: "Game Development & Designing",
    points: [
      [
        "Game Art & Animation",
        "Sound Design & Music Production",
        "Game Storytelling"
      ],
      [
        "Level Design",
        "UI/UX Design for Games",
        "Narrative Design"
      ]
    ]
  },
  {
    title: "Informatics",
    points: [
      [
        "Bioinformatics",
        "Business Informatics",
        "Educational Informatics"
      ],
      [
        "Health Informatics",
        "Data Science & AnalyticsGI Integration",
        "Environmental Informatics"
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
