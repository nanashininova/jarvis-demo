import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { FaArrowRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ isHero }) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    let hideTimeout;
    let isHovering = false;
    const nav = document.getElementById('main-navbar');

    const handleScroll = () => {
      setVisible(true);
      clearTimeout(hideTimeout);
      if (!isHovering) {
        hideTimeout = setTimeout(() => setVisible(false), 1200);
      }
    };
    const handleMouseEnter = () => {
      isHovering = true;
      setVisible(true);
      clearTimeout(hideTimeout);
    };
    const handleMouseLeave = () => {
      isHovering = false;
      hideTimeout = setTimeout(() => setVisible(false), 1200);
    };

    window.addEventListener('scroll', handleScroll);
    if (nav) {
      nav.addEventListener('mouseenter', handleMouseEnter);
      nav.addEventListener('mouseleave', handleMouseLeave);
    }
    hideTimeout = setTimeout(() => setVisible(false), 1200);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (nav) {
        nav.removeEventListener('mouseenter', handleMouseEnter);
        nav.removeEventListener('mouseleave', handleMouseLeave);
      }
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <nav
      id="main-navbar"
      className={styles.navbar}
      style={{
        '--navbar-text': isHero ? '#23243b' : '#fff',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.4s cubic-bezier(.4,0,.2,1)'
      }}
    >
      <Link to="/" className={styles.left}>JARVIS</Link>
      <div className={styles.center}>
        <Link to="/projects" className={styles.link}>Works</Link>
        <Link to="/" className={styles.link}>About</Link>
        <Link to="/contact" className={styles.link}>Contact</Link>
      </div>
      <a href="#join" className={styles.joinBtn}>
        <span>Join Us</span>
        <span className={styles.arrow}><FaArrowRight /></span>
      </a>
    </nav>
  );
};

export default Navbar;
