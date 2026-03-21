import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ValuePropSection = () => {
  return (
    <section className="py-24 gradient-gold relative overflow-hidden">
      <div className="absolute inset-0 grain" />
      <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
        <ScrollReveal>
          <p className="font-heading text-xs font-semibold tracking-wider uppercase text-accent-foreground/60 mb-4">Our Promise</p>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-accent-foreground mb-6 leading-tight tracking-tight">
            Stop Aspiring. Start Becoming.
          </h2>
          <p className="text-accent-foreground/70 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Guided learning, customized change frameworks, structured mentorship, and transformational accountability — so you can rise with clarity, character, and competence.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold text-sm px-8 py-6 rounded-xl shadow-lg"
          >
            <a href="/contact">
              Schedule a Discovery Call <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ValuePropSection;
