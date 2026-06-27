import { Brain, Heart, Flame, BarChart3, Users, Wallet, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
    <section className="relative py-24 md:py-32 overflow-hidden bg-[hsl(220,45%,14%)]">
      {/* Radial gradient atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, hsl(var(--accent) / 0.18), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 100%, hsl(220 70% 25% / 0.5), transparent 70%), radial-gradient(ellipse 70% 60% at 10% 80%, hsl(var(--accent) / 0.08), transparent 70%)",
        }}
      />

      {/* Constellation grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--accent) / 0.6) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent) / 0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent 80%)",
        }}
      />

      {/* Drifting orbs */}
      <motion.div
        aria-hidden
        className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.18), transparent 70%)" }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-1/4 -right-20 w-[28rem] h-[28rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(220 80% 50% / 0.18), transparent 70%)" }}
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent/70"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              boxShadow: "0 0 8px hsl(var(--accent) / 0.8)",
            }}
            animate={{
              opacity: [0.2, 0.9, 0.2],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6 + (i % 5),
              repeat: Infinity,
              delay: (i % 7) * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-md mb-6">
              <span className="text-[11px] font-sans font-semibold tracking-[0.22em] uppercase text-accent">
                Our Approach
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
              The Whole Person{" "}
              <span className="relative inline-block">
                {/* Ambient gold glow behind word */}
                <span
                  aria-hidden
                  className="absolute inset-0 -z-10 blur-2xl opacity-70"
                  style={{ background: "radial-gradient(ellipse, hsl(var(--accent) / 0.85), transparent 70%)" }}
                />
                <span className="relative text-gradient-gold">Integration</span>
                {/* Shimmer underline */}
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
            <p className="text-white/70 text-[17px] leading-[1.8] max-w-xl mx-auto">
              Real change is designed, built around structure, frameworks, and accountability systems. We develop every dimension of who you are.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto mb-14">
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
                className="relative h-full rounded-2xl p-7 overflow-hidden
                  bg-gradient-to-br from-white/[0.12] via-white/[0.07] to-white/[0.03]
                  backdrop-blur-xl border border-white/20
                  transition-all duration-500
                  group-hover:border-accent/60
                  group-hover:shadow-[0_20px_60px_-15px_hsl(var(--accent)/0.5)]"
              >
                {/* Hover glow sweep */}
                <div
                  className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, hsl(var(--accent) / 0.2), transparent 70%)",
                  }}
                />
                {/* Top hairline */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

                <div className="relative z-10">
                  {/* Icon with gold ambient glow */}
                  <div className="relative w-12 h-12 mb-5">
                    <div
                      aria-hidden
                      className="absolute inset-0 rounded-xl blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.6), transparent 70%)" }}
                    />
                    <div className="relative w-12 h-12 rounded-xl bg-accent/15 backdrop-blur-sm border border-accent/30 flex items-center justify-center group-hover:bg-accent/25 transition-colors duration-500">
                      <p.icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>

                  <h4 className="text-[17px] font-bold text-white font-heading mb-2">{p.label}</h4>
                  <p className="text-[14px] text-white/65 leading-[1.7]">{p.desc}</p>
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
              className="font-sans font-semibold text-sm rounded-md tracking-wide bg-white/5 border-white/20 text-white hover:bg-accent/10 hover:border-accent/40 hover:text-accent backdrop-blur-md"
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
