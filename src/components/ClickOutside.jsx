'use client';

import React, { useRef, useEffect } from 'react';

const ClickOutside = ({ children, exceptionRef, onClick, className }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickListener = (event) => {
      // Check if the click happened outside the wrapper or exceptionRef (if provided)
      const clickedInside =
        wrapperRef.current && wrapperRef.current.contains(event.target);

      const clickedException =
        exceptionRef &&
        exceptionRef.current &&
        exceptionRef.current.contains(event.target);

      // If clicked outside the wrapper and exceptionRef, execute the onClick callback
      if (!clickedInside && !clickedException && onClick) {
        onClick();
      }
    };

    document.addEventListener('mousedown', handleClickListener);

    return () => {
      document.removeEventListener('mousedown', handleClickListener);
    };
  }, [exceptionRef, onClick]);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
};

export default ClickOutside;
