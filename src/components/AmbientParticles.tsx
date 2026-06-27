import { motion, useInView, useReducedMotion } from "framer-motion";
import { useMemo, useRef } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const AmbientParticles = ({ count = 20, className = "" }: { count?: number; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "200px" });
  const prefersReducedMotion = useReducedMotion();

  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.05,
    }));
  }, [count]);

  const shouldAnimate = inView && !prefersReducedMotion;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent will-change-transform"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
          }}
          animate={
            shouldAnimate
              ? {
                  y: [0, -30, 0, 20, 0],
                  x: [0, 15, -10, 5, 0],
                  opacity: [p.opacity, p.opacity * 1.5, p.opacity, p.opacity * 0.5, p.opacity],
                }
              : { y: 0, x: 0, opacity: p.opacity }
          }
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: shouldAnimate ? Infinity : 0,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AmbientParticles;
