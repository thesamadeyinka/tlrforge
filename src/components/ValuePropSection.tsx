import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import StaggeredText from "@/components/StaggeredText";
import ScrollReveal from "@/components/ScrollReveal";

const ValuePropSection = () => {
  return (
    <section className="py-28 md:py-36 relative overflow-hidden bg-[hsl(28,40%,12%)]">
      {/* Seamless top fade from navy */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[hsl(220,45%,14%)] to-transparent pointer-events-none z-10" />

      {/* Massive ambient gold glow — lit from within */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(40 65% 50% / 0.22) 0%, hsl(40 65% 50% / 0.08) 35%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Inner brighter core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/20 blur-[120px] pointer-events-none" />

      {/* Floating ember particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-accent/60 pointer-events-none"
          style={{ left: `${15 + Math.random() * 70}%`, top: `${20 + Math.random() * 60}%` }}
          animate={{ y: [0, -40, 0], opacity: [0, 0.8, 0] }}
          transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 4, ease: "easeInOut" }}
        />
      ))}

      <div className="container mx-auto px-6 max-w-2xl text-center relative z-10">
        <ScrollReveal>
          <h3 className="editorial-label text-accent/70 mb-6">Our Promise</h3>
        </ScrollReveal>
        <StaggeredText
          text="Stop Aspiring. Start Becoming."
          className="font-heading text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1] drop-shadow-[0_0_40px_hsl(40_65%_50%_/_0.35)]"
          delay={0.15}
        />
        <ScrollReveal delay={0.4}>
          <div className="w-16 h-px mx-auto mb-8 bg-accent" />
          <p className="text-white/70 text-[17px] md:text-lg mb-12 max-w-lg mx-auto leading-[1.8]">
            Guided learning, customized change frameworks, structured mentorship, and transformational accountability so you can rise with clarity, competence, and character.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans font-semibold text-sm px-10 py-7 rounded-md tracking-wide transition-all duration-500 shadow-[0_0_40px_hsl(40_65%_50%_/_0.4)] hover:shadow-[0_0_60px_hsl(40_65%_50%_/_0.7)] hover:scale-[1.03]"
          >
            <a href="/contact">
              Schedule a Discovery Call <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </ScrollReveal>
      </div>

      {/* Seamless bottom fade into footer */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[hsl(224,50%,8%)] pointer-events-none z-10" />
    </section>
  );
};

export default ValuePropSection;
