import React from 'react';
import MountainIcon from './MountainIcon';
import LogoText from './LogoText';

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <MountainIcon />
      <LogoText />
    </div>
  );
};

export default Logo;