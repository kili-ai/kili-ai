import React, { useEffect, useRef } from 'react';

const HeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      life: number;
      opacity: number;
    }

    const particles: Particle[] = [];
    const particleCount = 50;

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      life: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.2
    });

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }

    const drawParticle = (particle: Particle) => {
      const gradient = ctx.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        particle.size * 2
      );

      gradient.addColorStop(0, `rgba(252, 106, 10, ${particle.opacity * 0.5})`);
      gradient.addColorStop(0.5, `rgba(231, 69, 4, ${particle.opacity * 0.3})`);
      gradient.addColorStop(1, 'rgba(231, 69, 4, 0)');

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw base gradient
      const baseGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 1.5
      );
      baseGradient.addColorStop(0, 'rgba(252, 106, 10, 0.05)');
      baseGradient.addColorStop(0.5, 'rgba(231, 69, 4, 0.03)');
      baseGradient.addColorStop(1, 'rgba(231, 69, 4, 0)');
      
      ctx.fillStyle = baseGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.life -= 0.1;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        if (particle.life < 0) {
          particles[index] = createParticle();
        }

        drawParticle(particle);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/5 via-transparent to-orange-secondary/5" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />
    </>
  );
};

export default HeroBackground;