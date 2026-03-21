import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <motion.img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover scale-105"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 bg-primary/85 mix-blend-multiply" />
        <div className="absolute inset-0 gradient-radiant opacity-70" />
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/8 blur-[150px] animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-sky/10 blur-[120px] animate-glow-pulse pointer-events-none" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-4 py-20 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-md rounded-full px-5 py-2 mb-10 border border-white/10"
        >
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          <span className="text-xs font-medium text-primary-foreground/80 tracking-wide uppercase">Transformational Growth</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-8 leading-[1.05] tracking-tight"
        >
          Illuminate. Transform.{" "}
          <span className="text-gradient-gold">Rise.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-base md:text-lg text-primary-foreground/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          A premier platform for transformational growth — where emerging leaders, professionals, businesses, and organisations access the knowledge, people, tools, and support needed to thrive in today's world and rise with clarity, character, and competence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold text-sm px-8 py-6 shadow-lg shadow-accent/20 rounded-xl">
            <Link to="/apply">
              Begin Your Transformation <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button asChild size="lg" className="border border-white/20 bg-white/5 backdrop-blur-sm text-primary-foreground hover:bg-white/10 font-heading font-semibold text-sm px-8 py-6 rounded-xl">
            <a href="#programmes">Explore EVOLVE</a>
          </Button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
