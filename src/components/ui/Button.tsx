import React from 'react';
import { cn } from '../../utils/cn';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, href, ...props }, ref) => {
    const scrollToSection = useSmoothScroll();
    
    const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-500 overflow-hidden group";
    
    const variants = {
      primary: `
        bg-orange-primary text-white hover:bg-orange-secondary
        shadow-lg hover:shadow-orange-primary/20
        transition-all duration-500
      `,
      secondary: `
        bg-transparent border border-orange-primary/20
        hover:border-orange-primary/60
        text-orange-primary
        shadow-lg shadow-transparent hover:shadow-orange-primary/10
        hover:bg-orange-primary/10
        after:absolute after:inset-0 after:rounded-full after:shadow-[0_0_10px_rgba(252,106,10,0.15)]
      `
    };

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (href?.startsWith('#')) {
        e.preventDefault();
        scrollToSection(href.slice(1));
      }
    };

    const Component = href ? 'a' : 'button';
    
    return (
      <Component
        className={cn(baseStyles, variants[variant], className)}
        ref={ref as any}
        href={href}
        onClick={href?.startsWith('#') ? handleClick : undefined}
        {...props}
      >
        <span className="relative z-10 flex items-center">
          {children}
        </span>
        {/* Hover glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-primary/20 via-orange-tertiary/20 to-orange-secondary/20" />
        </div>
      </Component>
    );
  }
);

Button.displayName = 'Button';

export default Button;