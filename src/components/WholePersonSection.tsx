import { Brain, Heart, Flame, BarChart3, Users, Wallet, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NAVY = "hsl(224,55%,12%)";

const pillars = [
  { label: "Mental Clarity", icon: Brain, desc: "Sharpened focus & strategic thinking" },
  { label: "Spiritual Alignment", icon: Flame, desc: "Purpose-driven conviction" },
  { label: "Emotional Resilience", icon: Heart, desc: "Strength through adversity" },
  { label: "Strategic Thinking", icon: BarChart3, desc: "Systems for smart decisions" },
  { label: "Relational Intelligence", icon: Users, desc: "Building meaningful connections" },
  { label: "Financial Wisdom", icon: Wallet, desc: "Stewardship & abundance" },
];

const WholePersonSection = () => {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-white">
      {/* Subtle radial warmth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, hsl(40 70% 55% / 0.10), transparent 60%)",
        }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <span className="text-[11px] font-sans font-semibold tracking-[0.22em] uppercase text-accent">
                Our Approach
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-[1.1]" style={{ color: NAVY }}>
              The Whole Person{" "}
              <span className="relative inline-block">
                <span
                  aria-hidden
                  className="absolute inset-0 -z-10 blur-2xl opacity-60"
                  style={{ background: "radial-gradient(ellipse, hsl(var(--accent) / 0.6), transparent 70%)" }}
                />
                <span className="relative text-gradient-gold">Integration</span>
                <motion.span
                  aria-hidden
                  className="absolute left-0 right-0 -bottom-1 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, hsl(var(--accent)), transparent)",
                  }}
                  animate={{ opacity: [0.3, 1, 0.3], scaleX: [0.6, 1, 0.6] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </span>
            </h2>
            <p className="text-[17px] leading-[1.8] max-w-xl mx-auto" style={{ color: "hsl(224,30%,30%)" }}>
              Real change is designed, built around structure, frameworks, and accountability systems. We develop every dimension of who you are.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto mb-12">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -6 }}
              className="relative group"
            >
              <div
                className="relative h-full rounded-2xl p-7 overflow-hidden bg-[hsl(40,40%,98%)] border border-accent/25
                  transition-all duration-500
                  group-hover:border-accent/60
                  group-hover:shadow-[0_20px_50px_-15px_hsl(var(--accent)/0.35)]"
              >
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

                <div className="relative z-10">
                  <div className="relative w-12 h-12 mb-5">
                    <div
                      aria-hidden
                      className="absolute inset-0 rounded-xl blur-xl opacity-70"
                      style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.55), transparent 70%)" }}
                    />
                    <div className="relative w-12 h-12 rounded-xl bg-accent/15 border border-accent/40 flex items-center justify-center group-hover:bg-accent/25 transition-colors duration-500">
                      <p.icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>

                  <h4 className="text-[17px] font-bold font-heading mb-2" style={{ color: NAVY }}>{p.label}</h4>
                  <p className="text-[14px] leading-[1.7]" style={{ color: "hsl(224,25%,32%)" }}>{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="text-center">
            <Button
              asChild
              variant="outline"
              className="font-sans font-semibold text-sm rounded-md tracking-wide border-accent/60 hover:bg-accent/10 hover:border-accent"
              style={{ color: NAVY }}
            >
              <Link to="/philosophy">Explore Our Philosophy <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WholePersonSection;
