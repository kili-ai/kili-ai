import React from 'react';

const LogoText = () => {
  return (
    <div className="flex items-baseline relative">
      <span 
        className="text-2xl font-bold bg-gradient-to-br from-orange-primary via-orange-tertiary to-orange-secondary bg-clip-text text-transparent"
        style={{
          textShadow: '0 0 20px rgba(252, 106, 10, 0.2)'
        }}
      >
        kili
      </span>
      <span 
        className="text-2xl font-light bg-gradient-to-br from-linen via-linen-dark to-linen bg-clip-text text-transparent ml-[1px]"
        style={{
          textShadow: '0 0 20px rgba(245, 236, 228, 0.2)'
        }}
      >
        -ai
      </span>
      <div 
        className="absolute -inset-4 bg-gradient-to-br from-orange-primary/5 via-orange-tertiary/5 to-orange-secondary/5 blur-xl opacity-50 rounded-full" 
      />
    </div>
  );
};

export default LogoText;