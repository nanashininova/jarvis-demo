import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import styles from './NotFound.module.css';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className={styles.notFoundPage}>
    <Navbar />
    <div className={styles.centerContent}>
      <div className={styles.code}>404</div>
      <div className={styles.message}>PAGE NOT FOUND</div>
      <Link to="/" className={styles.homeLink}>Back to Home</Link>
    </div>
    <Footer />
  </div>
);

export default NotFound;
