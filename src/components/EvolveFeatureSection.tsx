import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import heroBg from "@/assets/hero-bg.jpg";

const EvolveFeatureSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background with motion */}
      <div className="absolute inset-0">
        <motion.img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 bg-[hsl(224,50%,10%)] opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(224,50%,8%)]/60 via-transparent to-[hsl(224,50%,8%)]/90" />
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 py-24 relative z-10 max-w-3xl text-center">
        <ScrollReveal>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-accent mb-6">EVOLVE</h3>
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
