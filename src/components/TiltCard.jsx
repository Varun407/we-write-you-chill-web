import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function TiltCard({ 
  children, 
  className = '', 
  tiltStrength = 10,
  glare = true,
  ...props 
}) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -tiltStrength;
    const rY = ((x - centerX) / centerX) * tiltStrength;

    setRotateX(rX);
    setRotateY(rY);

    if (glare) {
      setGlarePos({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 0.15
      });
    }
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
        transformPerspective: 1000
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.5 }}
      className={`relative transform-gpu ${className}`}
      {...props}
    >
      {glare && (
        <div 
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-30"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle 200px at ${glarePos.x}% ${glarePos.y}%, rgba(38, 80, 168, 0.4), transparent 80%)`
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
