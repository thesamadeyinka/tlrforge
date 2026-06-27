import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from "framer-motion";

interface ChapterProps {
  id: string;
  children: ReactNode | ((p: { progress: MotionValue<number> }) => ReactNode);
  className?: string;
}

/**
 * Wraps a section as a "chapter". Provides scroll-progress driven
 * fade + lift for headline content, and exposes the section's scroll
 * progress (0 → 1 across the viewport) for any inner scroll-synced
 * effects. Respects prefers-reduced-motion.
 */
const Chapter = ({ id, children, className = "" }: ChapterProps) => {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Subtle entrance + exit using section's own scroll progress.
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], reduce ? [1, 1, 1, 1] : [0.35, 1, 1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], reduce ? [0, 0, 0, 0] : [40, 0, 0, -30]);

  return (
    <motion.section
      ref={ref as React.RefObject<HTMLElement>}
      id={id}
      style={{ opacity, y }}
      className={`relative scroll-mt-20 ${className}`}
    >
      {typeof children === "function" ? children({ progress: scrollYProgress }) : children}
    </motion.section>
  );
};

export default Chapter;
