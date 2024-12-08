import React from 'react';

interface SectionTransitionProps {
  from: 'jet' | 'jet-light';
  to: 'jet' | 'jet-light';
  direction?: 'top' | 'bottom';
}

const SectionTransition: React.FC<SectionTransitionProps> = ({ 
  from, 
  to, 
  direction = 'bottom'
}) => {
  const colors = {
    'jet': '#1A1A1A',
    'jet-light': '#292929'
  };

  return (
    <div 
      className={`absolute left-0 right-0 h-32 ${direction === 'bottom' ? '-bottom-16' : '-top-16'}`}
      style={{
        background: `linear-gradient(to ${direction}, ${colors[from]}, ${colors[to]})`,
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
      }}
    />
  );
};

export default SectionTransition;