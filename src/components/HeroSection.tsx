import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-radiant overflow-hidden pt-16">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px] animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-sky/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 py-20 relative z-10 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8 border border-white/15">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-primary-foreground/90">Strategic Growth & Transformation</span>
        </div>

        <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Illuminate. Transform.{" "}
          <span className="text-gradient-gold">Rise.</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/85 mb-4 max-w-3xl mx-auto font-light leading-relaxed">
          The Luminary Rise is a premier platform for strategic growth and intentional transformation — where emerging leaders, executives, and organisations access the knowledge, people, frameworks, and accountability needed to rise with clarity, character, and competence.
        </p>

        <p className="text-sm md:text-base text-primary-foreground/60 mb-10 max-w-2xl mx-auto italic">
          This is not a motivational platform. This is a structured developmental ecosystem — built on the conviction that real transformation is intentional, disciplined, and systematic.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold text-base px-8 py-6 shadow-lg shadow-accent/25">
            <Link to="/apply">
              Begin Your Transformation <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 text-primary-foreground hover:bg-white/10 font-heading font-semibold text-base px-8 py-6">
            <a href="#programmes">Explore EVOLVE</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
