import React from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import styles from './index.module.css';
import HeroSection from './sections/HeroSection.jsx';
import Work from '../../components/Work/Work.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const Projects = () => {
  return (
    <div className={styles.projectsPage}>
      <Navbar isHero={false} />
      <HeroSection />
      <Work
        image="/about-section-1.png"
        title="AI-Powered Virtual Assistant"
        subtitle="A smart assistant that leverages natural language processing and machine learning to help users automate tasks, answer questions, and manage schedules with ease."
      />
      <Work
        image="/about-section-2.png"
        title="Smart Home Controller"
        subtitle="Control and automate your smart home devices with intuitive voice commands and personalized routines."
      />
      <Work
        image="/about-section-3.png"
        title="Collaborative Workspace Bot"
        subtitle="A virtual assistant that helps teams manage projects, schedule meetings, and streamline communication."
      />
      <Work
        image="/about-section-4.png"
        title="Health & Wellness Tracker"
        subtitle="Track your daily habits, set wellness goals, and receive AI-powered health insights."
      />
      <Work
        image="/about-section-5.png"
        title="Learning Companion"
        subtitle="An AI tutor that adapts to your learning style, provides resources, and tracks your progress."
      />
      <Work
        image="/about-section-6.png"
        title="Personal Finance Advisor"
        subtitle="Manage your expenses, set budgets, and get smart financial advice tailored to your needs."
      />
      <Footer />
    </div>
  );
};

export default Projects;
