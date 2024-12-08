import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
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

    class FloatingElement {
      x: number;
      y: number;
      size: number;
      angle: number;
      speed: number;
      amplitude: number;
      originalY: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.originalY = y;
        this.size = Math.random() * 2 + 1;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = 0.02 + Math.random() * 0.01;
        this.amplitude = 20 + Math.random() * 20;
      }

      update() {
        this.angle += this.speed;
        this.y = this.originalY + Math.sin(this.angle) * this.amplitude;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 2
        );
        gradient.addColorStop(0, 'rgba(252, 106, 10, 0.15)');
        gradient.addColorStop(1, 'rgba(231, 69, 4, 0)');

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    const elements: FloatingElement[] = [];
    const numberOfElements = Math.floor((canvas.width * canvas.height) / 25000);

    for (let i = 0; i < numberOfElements; i++) {
      elements.push(
        new FloatingElement(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        )
      );
    }

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      elements.forEach(element => {
        element.update();
        element.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-40"
      style={{ zIndex: 0 }}
    />
  );
};

export default AnimatedBackground;