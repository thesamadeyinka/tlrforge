import { Brain, Heart, Flame, BarChart3, Users, Wallet } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const pillars = [
  { label: "Mental Clarity", icon: Brain, desc: "Sharpened focus & strategic thinking" },
  { label: "Spiritual Alignment", icon: Flame, desc: "Purpose-driven conviction" },
  { label: "Emotional Resilience", icon: Heart, desc: "Strength through adversity" },
  { label: "Strategic Thinking", icon: BarChart3, desc: "Systems for smart decisions" },
  { label: "Relational Intelligence", icon: Users, desc: "Building meaningful connections" },
  { label: "Financial Wisdom", icon: Wallet, desc: "Stewardship & abundance" },
];

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-24 bg-muted">
      <div className="container mx-auto px-4 max-w-6xl">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Growth Precedes{" "}
              <span className="text-gradient-gold">Transformation</span>
            </h2>
            <div className="w-20 h-1 gradient-gold rounded-full mx-auto mb-6" />
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Real change is designed — built around structure, frameworks, and accountability systems that produce measurable transformation.
            </p>
          </div>
        </ScrollReveal>

        {/* Whole Person Pillars */}
        <ScrollReveal>
          <div className="text-center mb-8">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-1">The Whole Person Integration</h3>
            <p className="text-sm text-muted-foreground">Six interconnected pillars of transformation.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.label} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-background rounded-2xl p-6 text-center border border-border hover:border-accent/40 transition-colors group cursor-default h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <p.icon className="w-6 h-6 text-accent" />
                </div>
                <span className="text-sm font-bold text-foreground font-heading block mb-1">{p.label}</span>
                <span className="text-xs text-muted-foreground">{p.desc}</span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
