import React, { useRef, useEffect, useState } from 'react';

const OVERLAY_SLIDE_PX = 1000;

const WhiteIntroOverlay = ({ progress = 0 }) => {
  // progress: 0 (overlay fully covers), 1 (overlay fully gone)
  // Each container covers exactly half the screen and slides outwards
  // Use 50vw for both width and left to ensure pixel-perfect split
  // Even less overlap: use 51vw for each, left at 0, right at 49vw
  const leftStyle = {
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
  const rightStyle = {
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
  const overlayStyle = {
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

  return (
    <div style={overlayStyle}>
      <div style={leftStyle}>
        <img src="about-section-1.png" alt="Overlay Left" style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={rightStyle}>
        <img src="about-section-2.png" alt="Overlay Right" style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </div>
  );
};

export default WhiteIntroOverlay;
