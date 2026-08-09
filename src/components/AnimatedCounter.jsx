import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedCounter({ 
  value, 
  prefix = '', 
  suffix = '', 
  duration = 1.8,
  decimals = 0 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    // Parse numeric part from string if needed (e.g., "25", "40", "1500", "100")
    const numericStr = String(value).replace(/[^0-9.]/g, '');
    const target = parseFloat(numericStr);

    if (isNaN(target)) {
      setDisplayValue(String(value));
      return;
    }

    let startTime = null;
    let animationFrameId;

    const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easedProgress = easeOutExpo(progress);
      const current = easedProgress * target;

      if (decimals > 0) {
        setDisplayValue(current.toFixed(decimals));
      } else if (target >= 1000) {
        setDisplayValue(Math.floor(current).toLocaleString());
      } else {
        setDisplayValue(Math.floor(current).toString());
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(numericStr.includes('.') ? target.toFixed(decimals) : target >= 1000 ? target.toLocaleString() : target.toString());
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, value, duration, decimals]);

  return (
    <span ref={ref} className="inline-block tabular-nums">
      {prefix}{displayValue}{suffix}
    </span>
  );
}
