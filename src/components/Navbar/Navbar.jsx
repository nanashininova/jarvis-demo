import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { FaArrowRight } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ isHero }) => {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
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

  // Always use small circle cursor in navbar
  const handleMouseEnter = () => {
    window.dispatchEvent(new Event('futureworks-cursor-leave'));
  };
  const handleMouseLeave = () => {
    window.dispatchEvent(new Event('futureworks-cursor-enter'));
  };
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to="/" className={styles.left}>JARVIS</Link>
      <div className={styles.desktopMenu}>
        <div className={styles.center}>
          <Link to="/projects" className={styles.link}>Works</Link>
          <Link to="/" className={styles.link}>About</Link>
          <Link to="/contact" className={styles.link}>Contact</Link>
        </div>
        <a
          href="https://docs.google.com/forms/d/1EWxVoFPi_kHb06HrmCuyrPE2xo_0KPEMyS_D5nOZkRU"
          className={styles.joinBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Join Us</span>
          <span className={styles.arrow}><FaArrowRight /></span>
        </a>
      </div>
      <button
        className={styles.burger + (menuOpen ? ' ' + styles.burgerOpen : '')}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={styles.burgerLines}></span>
        <span className={styles.burgerLines}></span>
      </button>
      {menuOpen && (
        <div className={styles.mobileMenu} onClick={() => setMenuOpen(false)}>
          <div className={styles.mobileMenuContent} onClick={e => e.stopPropagation()}>
            <Link to="/projects" className={styles.mobileLink}>Works</Link>
            <Link to="/" className={styles.mobileLink}>About</Link>
            <Link to="/contact" className={styles.mobileLink}>Contact</Link>
            <a
              href="https://docs.google.com/forms/d/1EWxVoFPi_kHb06HrmCuyrPE2xo_0KPEMyS_D5nOZkRU"
              className={styles.mobileJoinBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Join Us</span>
              <span className={styles.arrow}><FaArrowRight /></span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
