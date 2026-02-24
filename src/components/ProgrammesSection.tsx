import { Button } from "@/components/ui/button";
import { TrendingUp, Brain, Heart, Wallet, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import evolveLogo from "@/assets/evolve-logo.png";

const modules = [
  { title: "Growth & Transformation", icon: TrendingUp },
  { title: "Decisions & Personal Effectiveness", icon: Brain },
  { title: "Relationships & Emotional Intelligence", icon: Heart },
  { title: "Finance & Career", icon: Wallet },
];

const ProgrammesSection = () => {
  return (
    <section id="programmes" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Structured Learning. Strategic Frameworks.{" "}
            <span className="text-gradient-gold">Lasting Transformation.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every programme is designed with a single conviction: transformation is a process, not an event.
          </p>
        </div>

        <div className="gradient-radiant rounded-2xl p-8 md:p-12 text-primary-foreground max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/10 blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-block bg-accent/20 rounded-full px-4 py-1 text-sm font-semibold text-accent mb-6 border border-accent/30">
              Flagship Programme
            </div>

            <img src={evolveLogo} alt="EVOLVE" className="h-10 md:h-12 mb-2 brightness-0 invert" />
            <h3 className="font-heading text-xl md:text-2xl font-semibold mb-4 text-primary-foreground/80">
              Growth Mentorship Programme
            </h3>

            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl leading-relaxed">
              A 4-month immersive mentorship experience for individuals committed to whole-person transformation. EVOLVE is not a course. It is a covenant — a structured commitment to becoming the best version of yourself.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {modules.map((m) => (
                <div key={m.title} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="w-9 h-9 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                    <m.icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium">{m.title}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/5 rounded-lg p-4 border border-white/10 mb-8">
              <p className="text-sm text-primary-foreground/70">
                <strong className="text-primary-foreground">Who It's For:</strong> Emerging leaders, young professionals, entrepreneurs, and individuals ready for a structured season of intentional transformation.
              </p>
            </div>

            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold text-base px-8 shadow-lg shadow-accent/25">
              <Link to="/apply">
                Apply to EVOLVE <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammesSection;
