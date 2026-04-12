import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import evolveBg1 from "@/assets/evolve-bg-1.jpg";
import evolveBg2 from "@/assets/evolve-bg-2.jpg";
import evolveBg3 from "@/assets/evolve-bg-3.jpg";
import evolveLogoWhite from "@/assets/evolve-logo-white.png";

const backgrounds = [evolveBg1, evolveBg2, evolveBg3];

const EvolveFeatureSection = () => {
  const [currentBg, setCurrentBg] = useState(0);

  const nextBg = useCallback(() => {
    setCurrentBg((prev) => (prev + 1) % backgrounds.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextBg, 6000);
    return () => clearInterval(interval);
  }, [nextBg]);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Rotating backgrounds */}
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentBg}
          src={backgrounds[currentBg]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 bg-[hsl(224,50%,10%)] opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(224,50%,8%)]/60 via-transparent to-[hsl(224,50%,8%)]/90" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 py-24 relative z-10 max-w-3xl text-center">
        <ScrollReveal>
          <img src={evolveLogoWhite} alt="EVOLVE" className="h-16 md:h-20 mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-8 leading-[1.15]">
            Master The Art of{" "}
            <span className="text-gradient-gold">Transformational Growth</span>
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mb-8" />
          <p className="text-white/70 text-[17px] md:text-lg leading-[1.8] max-w-xl mx-auto mb-10">
            It is never too late to begin (again). You can become the best version of yourself with TLR's Transformational Growth Framework.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans font-semibold text-sm px-8 rounded-md tracking-wide">
            <Link to="/apply">
              Apply to EVOLVE <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EvolveFeatureSection;
