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
    <section id="programmes" className="py-20 md:py-28 bg-background relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="editorial-label text-accent mb-4">Our Flagship Programme</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 leading-[1.15]">
              Structured Learning.{" "}
              <span className="text-gradient-gold italic">Lasting Impact.</span>
            </h2>
            <div className="editorial-line mx-auto mb-5" />
            <p className="text-muted-foreground text-[16px] max-w-md mx-auto leading-[1.8]">
              Transformation is a process, not an event.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bg-[hsl(224,50%,12%)] rounded-lg p-8 md:p-12 text-white max-w-4xl mx-auto relative overflow-hidden">
            {/* Subtle ambient */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-sky/5 blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <p className="editorial-label text-accent mb-6">Flagship Programme</p>

              <img src={evolveLogo} alt="EVOLVE" className="h-10 md:h-12 mb-2 brightness-0 invert" />
              <h3 className="font-heading text-lg md:text-xl font-medium mb-8 text-white/60">
                Growth Mentorship Programme
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
                {modules.map((m) => (
                  <div key={m.title} className="flex items-start gap-3 bg-white/[0.04] rounded-md p-4 border border-white/[0.06] hover:bg-white/[0.07] transition-colors duration-400">
                    <div className="w-8 h-8 rounded-md bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <m.icon className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold font-sans block text-white/90">{m.title}</span>
                      <span className="text-[12px] text-white/50 block mt-1 leading-relaxed">{m.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans font-semibold text-sm px-8 rounded-md tracking-wide">
                  <Link to="/apply">
                    Apply to EVOLVE <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/15 text-white/70 hover:text-white hover:bg-white/5 font-sans font-semibold text-sm rounded-md tracking-wide">
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
