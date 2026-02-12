
import React, { useEffect, useRef } from 'react';
import { Particle } from '../types';

const FallingParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 40;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const colors = [
      '#d97706', // Amber
      '#b91c1c', // Red
      '#92400e', // Brown
      '#fbbf24', // Yellow
      '#fecaca', // Light Pink flower
      '#fca5a5', // Rose flower
    ];

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      size: Math.random() * 15 + 10,
      speedX: Math.random() * 2 - 1,
      speedY: Math.random() * 1 + 1.5,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 2 - 1,
      type: Math.random() > 0.6 ? 'flower' : 'leaf',
      color: colors[Math.floor(Math.random() * colors.length)],
    });

    const init = () => {
      particles = Array.from({ length: particleCount }, createParticle);
    };

    const drawLeaf = (ctx: CanvasRenderingContext2D, p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      // Simple maple leaf-ish shape
      ctx.moveTo(0, -p.size);
      ctx.lineTo(p.size / 2, -p.size / 2);
      ctx.lineTo(p.size, -p.size / 3);
      ctx.lineTo(p.size / 2, 0);
      ctx.lineTo(p.size * 0.8, p.size / 2);
      ctx.lineTo(0, p.size / 4);
      ctx.lineTo(-p.size * 0.8, p.size / 2);
      ctx.lineTo(-p.size / 2, 0);
      ctx.lineTo(-p.size, -p.size / 3);
      ctx.lineTo(-p.size / 2, -p.size / 2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const drawFlower = (ctx: CanvasRenderingContext2D, p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.ellipse(0, p.size / 2, p.size / 3, p.size / 2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.rotate((Math.PI * 2) / 5);
      }
      // Center
      ctx.beginPath();
      ctx.arc(0, 0, p.size / 4, 0, Math.PI * 2);
      ctx.fillStyle = '#fef3c7';
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y / 50);
        p.rotation += p.rotationSpeed;

        if (p.type === 'leaf') drawLeaf(ctx, p);
        else drawFlower(ctx, p);

        if (p.y > canvas.height + 50) {
          particles[i] = createParticle();
          particles[i].y = -20;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ mixBlendMode: 'multiply', opacity: 0.8 }}
    />
  );
};

export default FallingParticles;
