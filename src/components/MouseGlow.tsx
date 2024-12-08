import React from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

const MouseGlow = () => {
  const { x, y } = useMousePosition();
  
  return (
    <>
      {/* Outer glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `
            radial-gradient(200px at ${x}px ${y}px, 
              rgba(252, 106, 10, 0.03),
              rgba(255, 138, 61, 0.02),
              rgba(231, 69, 4, 0.01),
              transparent 70%
            )
          `
        }}
      />
      {/* Inner glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `
            radial-gradient(60px at ${x}px ${y}px, 
              rgba(252, 106, 10, 0.06),
              rgba(255, 138, 61, 0.04),
              rgba(231, 69, 4, 0.02),
              transparent 70%
            )
          `
        }}
      />
    </>
  );
};

export default MouseGlow;