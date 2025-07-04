import React, { useState, useEffect } from 'react';
import WhiteIntroOverlay from './WhiteIntroOverlay';


const OVERLAY_SLIDE_PX = 1000;

const WhiteIntroSection = React.forwardRef((props, ref) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref?.current) return;
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress: 0 (overlay fully covers), 1 (overlay fully gone)
      let p = 0;
      if (rect.top < vh && rect.bottom > 0) {
        const sectionHeight = rect.height || (rect.bottom - rect.top);
        const visible = Math.min(vh, rect.bottom) - Math.max(0, rect.top);
        p = 1 - visible / Math.min(sectionHeight, vh);
        p = Math.max(0, Math.min(1, p));
      } else if (rect.top >= vh) {
        p = 0;
      } else if (rect.bottom <= 0) {
        p = 1;
      }
      setProgress(p);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return (
    <section
      ref={ref}
      style={{
        width: '100vw',
        minHeight: '100vh',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      <WhiteIntroOverlay progress={progress} />
      {/* Add any intro content here if needed */}
    </section>
  );
});

export default WhiteIntroSection;
