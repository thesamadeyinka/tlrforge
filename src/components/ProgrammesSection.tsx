import { Button } from "@/components/ui/button";
import { TrendingUp, Brain, Heart, Wallet, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import evolveLogo from "@/assets/evolve-logo.png";
import ScrollReveal from "@/components/ScrollReveal";

const modules = [
  { title: "Growth & Transformation", icon: TrendingUp },
  { title: "Decisions & Effectiveness", icon: Brain },
  { title: "Relationships & EQ", icon: Heart },
  { title: "Finance & Career", icon: Wallet },
];

const ProgrammesSection = () => {
  return (
    <section id="programmes" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Structured Learning.{" "}
              <span className="text-gradient-gold">Lasting Impact.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transformation is a process, not an event.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="gradient-radiant rounded-3xl p-8 md:p-12 text-primary-foreground max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/10 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-sky/10 blur-[60px] pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-block bg-accent/20 rounded-full px-4 py-1 text-sm font-semibold text-accent mb-6 border border-accent/30">
                Flagship Programme
              </div>

              {/* EVOLVE logo — white version for dark gradient bg */}
              <img src={evolveLogo} alt="EVOLVE" className="h-10 md:h-12 mb-2 brightness-0 invert" />
              <h3 className="font-heading text-xl md:text-2xl font-semibold mb-6 text-primary-foreground/80">
                Growth Mentorship Programme
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {modules.map((m) => (
                  <div key={m.title} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                      <m.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-sm font-medium">{m.title}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold text-base px-8 shadow-lg shadow-accent/25">
                <Link to="/apply">
                  Apply to EVOLVE <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProgrammesSection;
