import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ValuePropSection = () => {
  return (
    <section className="py-20 md:py-28 bg-accent relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-2xl text-center relative z-10">
        <ScrollReveal>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-accent-foreground/60 mb-6">Our Promise</h3>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-accent-foreground mb-6 leading-[1.2]">
            Stop Aspiring. Start Becoming.
          </h2>
          <div className="editorial-line mx-auto mb-6 !bg-accent-foreground/20" />
          <p className="text-accent-foreground/80 text-[17px] md:text-lg mb-10 max-w-lg mx-auto leading-[1.8]">
            Guided learning, customized change frameworks, structured mentorship, and transformational accountability so you can rise with clarity, competence, and character.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans font-semibold text-sm px-8 py-6 rounded-md tracking-wide shadow-lg"
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
