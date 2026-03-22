import { Brain, Heart, Flame, BarChart3, Users, Wallet, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
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
    <section id="philosophy" className="py-20 md:py-28 bg-secondary relative grain">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-accent mb-4">Our Philosophy</h3>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-5 leading-[1.15]">
              Growth Precedes{" "}
              <span className="text-gradient-gold">Transformation</span>
            </h2>
            <div className="editorial-line mx-auto mb-5" />
            <p className="text-muted-foreground text-[16px] leading-[1.8] max-w-lg mx-auto">
              Real change is designed, built around structure, frameworks, and accountability systems.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h4 className="font-heading text-lg font-bold text-center text-foreground mb-8">The Whole Person Integration</h4>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden max-w-4xl mx-auto mb-10">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.label} delay={i * 0.05}>
              <div className="bg-card p-7 h-full group">
                <div className="w-9 h-9 rounded-md bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors duration-500">
                  <p.icon className="w-4 h-4 text-accent" />
                </div>
                <h4 className="text-[16px] font-bold text-foreground font-heading mb-2">{p.label}</h4>
                <p className="text-[14px] text-muted-foreground hidden md:block md:group-hover:hidden leading-[1.7]">{p.desc}</p>
                <p className="text-[14px] text-muted-foreground block md:hidden md:group-hover:block leading-[1.7]">{p.detail}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="text-center">
            <Button asChild variant="outline" className="font-sans font-semibold text-sm rounded-md tracking-wide">
              <Link to="/philosophy">Explore Our Philosophy <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PhilosophySection;
