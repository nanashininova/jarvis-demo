
import React from 'react';

const CustomCursor = ({ type = 'circle' }) => {
  const cursorRef = React.useRef(null);

  React.useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${type}`}
    >
      {type === 'eye' && (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="14" cy="14" rx="12" ry="8" fill="#222" fillOpacity="0.7" />
          <circle cx="14" cy="14" r="3.5" fill="#fff" />
        </svg>
      )}
      {type === 'hello' && (
        <span style={{fontWeight:600, fontSize:'1.1rem', color:'#23243b', fontFamily:'Fira Mono, Menlo, Monaco, Consolas, monospace', letterSpacing:'0.04em'}}>HELLO</span>
      )}
    </div>
  );
};

export default CustomCursor;
