import { motion } from "framer-motion";

const AnimatedGradientBg = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Slow-moving gradient orb 1 */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-accent/[0.04] blur-[120px]"
        animate={{
          x: ["-10%", "60%", "20%", "-10%"],
          y: ["10%", "50%", "70%", "10%"],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Slow-moving gradient orb 2 */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-sky/[0.03] blur-[100px]"
        animate={{
          x: ["80%", "20%", "50%", "80%"],
          y: ["60%", "10%", "40%", "60%"],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default AnimatedGradientBg;
