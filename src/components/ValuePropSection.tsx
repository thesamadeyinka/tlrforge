import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ValuePropSection = () => {
  return (
    <section className="py-20 gradient-gold relative overflow-hidden">
      <div className="absolute inset-0 bg-black/5" />
      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-accent-foreground mb-6 leading-tight">
            Stop Aspiring. Start Becoming.
          </h2>
          <p className="text-accent-foreground/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Structured growth frameworks, expert mentorship, and transformational accountability — so you can rise with clarity and purpose.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold text-base px-8 py-6"
          >
            <a href="/contact">
              Schedule a Discovery Call <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ValuePropSection;
