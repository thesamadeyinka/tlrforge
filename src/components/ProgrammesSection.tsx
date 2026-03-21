import { Button } from "@/components/ui/button";
import { TrendingUp, Brain, Heart, Users, Wallet, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import evolveLogo from "@/assets/evolve-logo.png";
import ScrollReveal from "@/components/ScrollReveal";

const modules = [
  { title: "Growth & Transformation", icon: TrendingUp, desc: "Build growth systems and design your transformation journey." },
  { title: "Decisions & Effectiveness", icon: Brain, desc: "Master decision frameworks and strategic priorities." },
  { title: "Relationships", icon: Heart, desc: "Communication, conflict resolution, and mentorship." },
  { title: "Career & Business", icon: Users, desc: "Professional development, entrepreneurship, and business strategy." },
  { title: "Financial Intelligence", icon: Wallet, desc: "Wealth creation, money management, and investment strategies." },
];

const ProgrammesSection = () => {
  return (
    <section id="programmes" className="py-28 bg-background relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent font-heading font-semibold text-sm tracking-wider uppercase mb-4">Our Flagship Programme</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight tracking-tight">
              Structured Learning.{" "}
              <span className="text-gradient-gold">Lasting Impact.</span>
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              Transformation is a process, not an event.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="gradient-radiant rounded-3xl p-8 md:p-12 text-primary-foreground max-w-4xl mx-auto relative overflow-hidden">
            {/* Ambient effects */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent/8 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-sky/8 blur-[80px] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-semibold text-accent mb-6 border border-white/10">
                Flagship Programme
              </div>

              <img src={evolveLogo} alt="EVOLVE" className="h-10 md:h-12 mb-2 brightness-0 invert" />
              <h3 className="font-heading text-lg md:text-xl font-semibold mb-8 text-primary-foreground/70">
                Growth Mentorship Programme
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
                {modules.map((m) => (
                  <div key={m.title} className="flex items-center gap-3 bg-white/[0.06] backdrop-blur-sm rounded-xl p-4 border border-white/[0.06] hover:bg-white/[0.1] transition-colors duration-300">
                    <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                      <m.icon className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold block">{m.title}</span>
                      <span className="text-[10px] text-white/50 block mt-0.5 leading-tight">{m.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold text-sm px-8 shadow-lg shadow-accent/20 rounded-xl">
                  <Link to="/apply">
                    Apply to EVOLVE <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 text-primary-foreground hover:bg-white/10 font-heading font-semibold text-sm rounded-xl">
                  <Link to="/programmes">View Full Programme</Link>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProgrammesSection;
