import React from 'react';
import styles from './TeamMember.module.css';

const TeamMember = ({ image, name, position }) => (
  <div className={styles.memberCard}>
    <img src={image} alt={name} className={styles.memberImage} />
    <div className={styles.memberName}>{name}</div>
    <div className={styles.memberPosition}>{position}</div>
  </div>
);

export default TeamMember;
