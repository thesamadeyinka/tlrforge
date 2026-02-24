import { motion } from "framer-motion";
import { forwardRef, ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = forwardRef<HTMLDivElement, PageTransitionProps>(({ children }, ref) => (
  <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.35, ease: "easeOut" }}
  >
    {children}
  </motion.div>
));

PageTransition.displayName = "PageTransition";

export default PageTransition;
