import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import StaggeredText from "@/components/StaggeredText";
import ScrollReveal from "@/components/ScrollReveal";

const ValuePropSection = () => {
  return (
    <section className="pt-20 pb-20 md:pt-28 md:pb-28 relative overflow-hidden bg-[#0a0e1a]">
      {/* Top divider — gold hairline */}
      <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-80" />
        <div className="h-20 w-full bg-gradient-to-b from-white/[0.03] to-transparent" />
      </div>

      {/* Concentrated warm gold glow behind headline */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[700px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,168,76,0.38) 0%, rgba(201,168,76,0.20) 25%, rgba(201,168,76,0.06) 50%, transparent 75%)",
          filter: "blur(40px)",
        }}
        animate={{ scale: [1, 1.06, 1], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,168,76,0.32) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Slow drifting light particles */}
      {Array.from({ length: 16 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[3px] h-[3px] rounded-full pointer-events-none"
          style={{
            left: `${(i * 53) % 95 + 2}%`,
            top: `${(i * 37) % 90 + 5}%`,
            background: "rgba(201,168,76,0.7)",
            boxShadow: "0 0 8px rgba(201,168,76,0.6)",
          }}
          animate={{ y: [0, -50, 0], opacity: [0, 0.9, 0] }}
          transition={{
            duration: 7 + (i % 4),
            repeat: Infinity,
            delay: (i % 6) * 0.8,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-6 max-w-2xl text-center relative z-10">
        <ScrollReveal>
          <h3 className="editorial-label text-[#E8C76A] mb-6 opacity-100">Our Promise</h3>
        </ScrollReveal>
        <StaggeredText
          text="Stop Aspiring Start Becoming."
          className="font-heading text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.05] tracking-tight drop-shadow-[0_0_50px_rgba(201,168,76,0.5)]"
          delay={0.15}
        />
        <ScrollReveal delay={0.4}>
          <div className="w-16 h-px mx-auto mb-8 bg-[#C9A84C]" />
          <p className="text-[#CBD5E1] text-[17px] md:text-lg mb-12 max-w-lg mx-auto leading-[1.8]">
            Guided learning, customized change frameworks, structured mentorship, and transformational accountability so you can rise with clarity, competence, and character.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#C9A84C] text-[#0a0e1a] hover:bg-[#d9b85c] font-sans font-bold text-base px-12 py-8 rounded-md tracking-wide transition-all duration-500 shadow-[0_0_50px_rgba(201,168,76,0.45)] hover:shadow-[0_0_80px_rgba(201,168,76,0.85)] hover:scale-[1.04]"
          >
            <a href="/contact">
              Schedule a Discovery Call <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </ScrollReveal>
      </div>

      {/* Bottom fade into footer */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[hsl(224,50%,8%)] pointer-events-none z-10" />
    </section>
  );
};

export default ValuePropSection;
