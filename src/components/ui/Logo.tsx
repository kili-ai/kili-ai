import React from 'react';
import { Mountain } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2.5 group cursor-pointer">
      <div className="relative">
        <Mountain 
          size={28} 
          strokeWidth={1.75}
          className="relative z-10 text-orange-primary"
          style={{ 
            filter: 'drop-shadow(0 0 8px rgba(252, 106, 10, 0.2))'
          }}
        />
      </div>
      
      <div className="flex items-baseline">
        <span 
          className="text-2xl font-bold text-orange-primary"
          style={{
            textShadow: '0 0 20px rgba(252, 106, 10, 0.15)'
          }}
        >
          kili
        </span>
        <span 
          className="text-2xl font-light text-linen ml-[1px]"
          style={{
            textShadow: '0 0 20px rgba(245, 236, 228, 0.15)'
          }}
        >
          -ai
        </span>
      </div>
    </div>
  );
};

export default Logo;