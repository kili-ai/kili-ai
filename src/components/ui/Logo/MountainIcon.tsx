import React from 'react';
import { Mountain } from 'lucide-react';

const MountainIcon = () => {
  return (
    <div className="relative">
      <Mountain 
        size={32} 
        strokeWidth={1.5}
        className="text-orange-primary"
      />
    </div>
  );
};

export default MountainIcon;