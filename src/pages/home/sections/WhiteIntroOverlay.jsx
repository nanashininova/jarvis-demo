import React, { useRef, useEffect, useState } from 'react';

const OVERLAY_SLIDE_PX = 1000;

const WhiteIntroOverlay = ({ progress = 0 }) => {
  // Responsive: detect mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  let leftStyle, rightStyle, overlayStyle;
  if (isMobile) {
    // Mobile: horizontal split (top/bottom), slide sideways
    overlayStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 1000,
      display: progress >= 1 ? 'none' : 'flex',
      flexDirection: 'column',
      pointerEvents: progress >= 1 ? 'none' : 'auto',
      background: 'transparent',
    };
    leftStyle = {
      width: '100vw',
      height: '50vh',
      overflow: 'hidden',
      transform: `translateX(-${progress * 100}vw)`,
      transition: 'transform 0.5s cubic-bezier(.77,0,.18,1)',
      zIndex: 1001,
      pointerEvents: 'none',
      position: 'relative',
    };
    rightStyle = {
      width: '100vw',
      height: '50vh',
      overflow: 'hidden',
      transform: `translateX(${progress * 100}vw)`,
      transition: 'transform 0.5s cubic-bezier(.77,0,.18,1)',
      zIndex: 1001,
      pointerEvents: 'none',
      position: 'relative',
    };
  } else {
    // Desktop: left/right split, slide sideways
    overlayStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 1000,
      display: progress >= 1 ? 'none' : 'block',
      pointerEvents: progress >= 1 ? 'none' : 'auto',
      background: 'transparent',
    };
    leftStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '51vw',
      height: '100vh',
      overflow: 'hidden',
      transform: `translateX(-${progress * 50}vw)`,
      transition: 'transform 0.5s cubic-bezier(.77,0,.18,1)',
      zIndex: 1001,
      pointerEvents: 'none',
    };
    rightStyle = {
      position: 'fixed',
      top: 0,
      left: '49vw',
      width: '51vw',
      height: '100vh',
      overflow: 'hidden',
      transform: `translateX(${progress * 50}vw)`,
      transition: 'transform 0.5s cubic-bezier(.77,0,.18,1)',
      zIndex: 1001,
      pointerEvents: 'none',
    };
  }

  // Image cycling logic
  // Use public URL for images for compatibility
  const publicUrl = import.meta.env.BASE_URL || '/';
  const leftImages = [
    `${publicUrl}left-overlay-1.png`,
    `${publicUrl}left-overlay-2.png`,
    `${publicUrl}left-overlay-3.png`,
  ];
  const rightImages = [
    `${publicUrl}right-overlay-1.png`,
    `${publicUrl}right-overlay-2.png`,
    `${publicUrl}right-overlay-3.png`,
  ];

  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  useEffect(() => {
    const leftInterval = setInterval(() => {
      setLeftIndex((prev) => (prev + 1) % leftImages.length);
    }, 2000);
    return () => clearInterval(leftInterval);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const rightInterval = setInterval(() => {
      setRightIndex((prev) => (prev + 1) % rightImages.length);
    }, 2000);
    return () => clearInterval(rightInterval);
    // eslint-disable-next-line
  }, []);

  return (
    <div style={overlayStyle}>
      <div style={leftStyle}>
        <img
          src={leftImages[leftIndex]}
          alt={`Overlay Left ${leftIndex + 1}`}
          style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.5s' }}
        />
      </div>
      <div style={rightStyle}>
        <img
          src={rightImages[rightIndex]}
          alt={`Overlay Right ${rightIndex + 1}`}
          style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.5s' }}
        />
      </div>
    </div>
  );
};

export default WhiteIntroOverlay;
