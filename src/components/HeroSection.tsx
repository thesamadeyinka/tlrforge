import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0">
        <motion.img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 bg-[hsl(224,50%,10%)] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(224,50%,8%)]/60 via-transparent to-[hsl(224,50%,8%)]/90" />
      </div>

      {/* Single soft ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 py-24 relative z-10 max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="editorial-label text-white/60 mb-8 tracking-[0.25em]"
        >
          Transformational Growth
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white mb-8 leading-[1.05]"
        >
          Illuminate.
          <br />
          Transform.{" "}
          <span className="text-gradient-gold">Rise.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="editorial-line mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-base md:text-lg text-white/70 mb-12 max-w-xl leading-relaxed"
        >
          A premier platform for transformational growth — where emerging leaders, professionals, and organisations access the knowledge, tools, and support needed to rise with clarity, character, and competence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans font-semibold text-sm px-8 py-6 rounded-md tracking-wide">
            <Link to="/apply">
              Begin Your Transformation <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button asChild size="lg" className="border border-white/15 bg-transparent text-white/70 hover:text-white hover:bg-white/5 font-sans font-semibold text-sm px-8 py-6 rounded-md tracking-wide">
            <a href="#programmes">Explore EVOLVE</a>
          </Button>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
