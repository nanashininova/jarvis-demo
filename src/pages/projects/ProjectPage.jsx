import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import styles from './ProjectPage.module.css';

const PROJECTS = {
  'vr-based-phobia-therapy': {
    title: 'VR BASED PHOBIA THERAPY',
    subtitle: 'VR + PSYCHOLOGY',
    images: ['/future-work-1.png', '/future-work-2.png'],
    industry: 'Speakeasy Bar',
    year: '2025',
    client: 'experimental concept',
    description: 'VR-Based Phobia Therapy is a virtual reality system designed to help individuals gradually overcome their fears in a controlled, immersive environment. By simulating realistic, customizable scenarios related to specific phobias (like heights, spiders, or public speaking), this therapy allows users to face their fears step by step while feeling safe. The system combines exposure therapy with interactive VR experiences to reduce anxiety and build resilience over time. It can be adapted for different phobias and personalized to each user’s comfort level and progress.'
  },
  'cyber-intrusion-pattern-identifier': {
    title: 'CYBER INTRUSION PATTERN IDENTIFIER',
    subtitle: 'PROJECT',
    images: ['/future-work-3.png', '/future-work-4.png'],
    industry: 'Cybersecurity',
    year: '2024',
    client: 'Tech Defense Inc.',
    description: 'The Cyber Intrusion Pattern Identifier is a security system designed to detect, analyze, and predict patterns of cyber-attacks within a network. By monitoring system logs, network traffic, and user behavior, it identifies unusual activities that may signal potential intrusions. Using machine learning and pattern recognition, the system can uncover both known and emerging threats, helping organizations respond quickly and prevent security breaches. It aims to improve real-time threat detection and enhance cybersecurity defenses.'
  },
  'deepfake-detection-suite': {
    title: 'DEEPFAKE DETECTION SUITE',
    subtitle: 'PROJECT',
    images: ['/future-work-5.png', '/future-work-6.png'],
    industry: 'Media Forensics',
    year: '2025',
    client: 'OpenAI Research',
    description: 'The Deepfake Detection Suite is an advanced toolset designed to identify and flag manipulated media, including fake images, videos, and audio. By leveraging machine learning, facial movement analysis, texture inconsistencies, and audio-visual mismatches, the system can accurately detect deepfakes in real time. This suite aims to protect individuals and organizations from misinformation, identity fraud, and digital manipulation by providing reliable and accessible deepfake verification solutions.'
  },
  'ai-based-npc-emotion-engine': {
    title: 'AI- BASED NPC EMOTION ENGINE',
    subtitle: 'GAME DEV + AFFECTIVE COMPUTING',
    images: ['/future-work-7.png', '/future-work-8.png'],
    industry: 'Gaming',
    year: '2023',
    client: 'NextGen Games',
    description: 'The AI-Based NPC Emotion Engine is a system designed to make non-player characters (NPCs) in games and simulations more realistic and emotionally responsive. By using AI algorithms to simulate emotions based on player actions, in-game events, and environmental factors, the engine allows NPCs to display dynamic behaviors like happiness, fear, anger, or trust. This creates more engaging, lifelike interactions and enhances the storytelling experience in virtual worlds.'
  },
  'ar-telemedicine-diagnostic-tool': {
    title: 'AR Telemedicine Diagnostic Tool',
    subtitle: 'AR + Healthcare',
    images: ['/future-work-9.png', '/future-work-10.png'],
    industry: 'Healthcare',
    year: '2025',
    client: 'MedTech Labs',
    description: 'Yet to confirm'
  },
  'cryptobio': {
    title: 'CryptoBio',
    subtitle: 'Blockchain + Bioinformatics',
    images: ['/future-work-11.png', '/future-work-12.png'],
    industry: 'Bioinformatics',
    year: '2025',
    client: 'GenomeChain',
    description: 'CryptoBio is an innovative system that integrates cryptography with biological data to ensure secure storage, sharing, and analysis of sensitive genomic and biomedical information. It aims to protect personal health data using encryption, blockchain, and privacy-preserving techniques, enabling secure collaboration in bioinformatics, genetic research, and personalized medicine. CryptoBio ensures that biological data remains tamper-proof, traceable, and accessible only to authorized parties.'
  },
};

const ProjectPage = () => {
  const { projectName } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS[projectName];

  if (!project) {
    return (
      <div className={styles.notFound}>Project not found.</div>
    );
  }

  return (
    <div className={styles.projectPage}>
      <Navbar isHero={false} />
      <div className={styles.content}>
        <div className={styles.subtitle}>{project.subtitle}</div>
        <h1 className={styles.title}>{project.title}</h1>
        <div className={styles.images}>
          {project.images.map((img, idx) => (
            <img key={idx} src={img} alt={project.title + ' ' + (idx+1)} className={styles.image} />
          ))}
        </div>
        <div className={styles.projectMetaWrapper}>
          <div className={styles.projectMetaRow}>
            <div className={styles.projectMetaCol}>
              <div className={styles.projectMetaHeader}>Industry</div>
              <div className={styles.projectMetaValue}>{project.industry}</div>
            </div>
            <div className={styles.projectMetaCol}>
              <div className={styles.projectMetaHeader}>Year</div>
              <div className={styles.projectMetaValue}>{project.year}</div>
            </div>
            <div className={styles.projectMetaCol}>
              <div className={styles.projectMetaHeader}>Client</div>
              <div className={styles.projectMetaValue}>{project.client}</div>
            </div>
          </div>
        </div>
        <p className={styles.description}>{project.description}</p>

        {/* More Projects Section */}
        <div className={styles.moreProjectsSection}>
          <h2 className={styles.moreProjectsHeading}>More Projects</h2>
          <div className={styles.moreProjectsList}>
            {(() => {
              const keys = Object.keys(PROJECTS);
              const currentIdx = keys.indexOf(projectName);
              // Get next two project keys, wrap around if needed
              const nextProjects = [
                keys[(currentIdx + 1) % keys.length],
                keys[(currentIdx + 2) % keys.length]
              ];
              return nextProjects.map((key) => {
                const proj = PROJECTS[key];
                return (
                  <div
                    key={key}
                    className={styles.moreProjectCard}
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigate(`/projects/${key}`)}
                  >
                    <img src={proj.images[0]} alt={proj.title} className={styles.moreProjectImg} />
                    <div className={styles.moreProjectTitle}>{proj.title}</div>
                  </div>
                );
              });
            })()}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
