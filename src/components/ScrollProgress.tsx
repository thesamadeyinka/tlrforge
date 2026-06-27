import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });

  return (
    <div className="fixed top-24 right-4 md:right-6 bottom-12 w-[2px] z-40 pointer-events-none hidden sm:block">
      <div className="absolute inset-0 bg-white/5 rounded-full" />
      <motion.div
        className="absolute top-0 left-0 right-0 origin-top rounded-full"
        style={{
          scaleY,
          height: "100%",
          background: "linear-gradient(to bottom, hsl(40 65% 55%), hsl(40 65% 45%))",
          boxShadow: "0 0 12px hsl(40 65% 50% / 0.6)",
        }}
      />
    </div>
  );
};

export default ScrollProgress;
