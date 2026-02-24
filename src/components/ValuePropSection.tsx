import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ValuePropSection = () => {
  return (
    <section className="py-20 gradient-gold relative overflow-hidden">
      <div className="absolute inset-0 bg-black/5" />
      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-accent-foreground mb-6 leading-tight">
          Stop Aspiring. Start Becoming.
        </h2>
        <p className="text-accent-foreground/80 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          The Luminary Rise provides emerging leaders and organisations with structured growth frameworks, expert mentorship, and transformational accountability systems — so they can become clearer in purpose, stronger in character, sharper in execution, and deliberate in impact.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold text-base px-8 py-6"
        >
          <a href="#contact">
            Schedule a Discovery Call <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ValuePropSection;
