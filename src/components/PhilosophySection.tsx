import { Brain, Heart, Flame, BarChart3, Users, Wallet, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const pillars = [
  { label: "Mental Clarity", icon: Brain, desc: "Sharpened focus & strategic thinking", detail: "Sharpened focus, critical thinking, and strategic decision-making. We train the mind to operate with precision under pressure." },
  { label: "Spiritual Alignment", icon: Flame, desc: "Purpose-driven conviction", detail: "Finding your core purpose and operating from conviction. Alignment creates consistency even when motivation fades." },
  { label: "Emotional Resilience", icon: Heart, desc: "Strength through adversity", detail: "Developing the emotional intelligence to navigate relationships, setbacks, and leadership challenges with composure." },
  { label: "Strategic Thinking", icon: BarChart3, desc: "Systems for smart decisions", detail: "Systems-level thinking that turns insight into execution. Moving from reactive decision-making to intentional strategy." },
  { label: "Relational Intelligence", icon: Users, desc: "Building meaningful connections", detail: "Building the relational capital that accelerates growth. Great leaders are great connectors." },
  { label: "Financial Wisdom", icon: Wallet, desc: "Stewardship & abundance", detail: "Mastering the principles of wealth creation, stewardship, and strategic resource allocation." },
];

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-28 bg-muted relative grain">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-accent font-heading font-semibold text-sm tracking-wider uppercase mb-4">Our Philosophy</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-5 leading-tight tracking-tight">
              Growth Precedes{" "}
              <span className="text-gradient-gold">Transformation</span>
            </h2>
            <div className="w-16 h-0.5 gradient-gold rounded-full mx-auto mb-6" />
            <p className="text-muted-foreground text-base leading-relaxed">
              Real change is designed — built around structure, frameworks, and accountability systems.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center mb-8">
            <h3 className="font-heading text-base font-semibold text-foreground tracking-tight">The Whole Person Integration</h3>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.label} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="bg-background rounded-2xl p-6 text-left border border-border card-glow group cursor-default h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center mb-4 group-hover:from-accent/25 transition-all duration-300">
                  <p.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm font-bold text-foreground font-heading block mb-1.5 tracking-tight">{p.label}</span>
                <span className="text-xs text-muted-foreground hidden md:block md:group-hover:hidden leading-relaxed">{p.desc}</span>
                <span className="text-xs text-muted-foreground block md:hidden md:group-hover:block leading-relaxed">{p.detail}</span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.25}>
          <div className="text-center">
            <Button asChild variant="outline" className="font-heading font-semibold text-sm rounded-xl">
              <Link to="/philosophy">Explore Our Philosophy <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PhilosophySection;
