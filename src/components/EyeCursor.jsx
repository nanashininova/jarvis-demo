import React, { useEffect, useRef } from 'react';
import { FaRegEye } from 'react-icons/fa';
import './EyeCursor.css';

const EyeCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
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
    <div ref={cursorRef} className="eye-cursor">
      <FaRegEye size={28} color="#222" />
    </div>
  );
};

export default EyeCursor;
