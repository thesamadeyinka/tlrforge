import { Target, Compass, Lightbulb, Shield, Users, Award, Gem, ArrowRight, Eye, Flag } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const values = [
  { label: "Intentionality", icon: Target },
  { label: "Innovation", icon: Lightbulb },
  { label: "Integrity", icon: Shield },
  { label: "Excellence", icon: Award },
  { label: "Mentorship", icon: Compass },
  { label: "Community", icon: Users },
  { label: "Legacy", icon: Gem },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden bg-[hsl(224,55%,6%)]">
      {/* Ambient gold glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-accent/[0.04] blur-[160px] pointer-events-none" />

      {/* Top + bottom seamless fades */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[hsl(224,55%,5%)] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[hsl(224,55%,6%)] to-transparent pointer-events-none z-10" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-accent mb-4">Who We Are</h3>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-5 leading-[1.15]">
              More Than a School, We Are An Ecosystem
            </h2>
            <div className="editorial-line mx-auto mb-5" />
            <p className="text-white/60 text-[17px] leading-[1.8] max-w-lg mx-auto">
              The Luminary Rise is a dynamic ecosystem where emerging leaders, professionals, businesses, and organisations access the knowledge, tools, and support needed to thrive in today's fast-changing world.
            </p>
          </div>
        </ScrollReveal>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-px bg-white/[0.06] rounded-lg overflow-hidden mb-16">
          <ScrollReveal delay={0.1}>
            <div className="bg-white/[0.03] backdrop-blur-sm p-8 md:p-10 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-md bg-accent/15 flex items-center justify-center shrink-0">
                  <Eye className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-accent">Vision</h3>
              </div>
              <p className="text-white/75 leading-[1.8] text-[17px] pl-[52px]">
                To shape a future where transformational leaders and resilient institutions drive sustainable prosperity and generational impact across nations.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="bg-white/[0.03] backdrop-blur-sm p-8 md:p-10 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-md bg-accent/15 flex items-center justify-center shrink-0">
                  <Flag className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-accent">Mission</h3>
              </div>
              <p className="text-white/75 leading-[1.8] text-[17px] pl-[52px]">
                To build and steward an integrated, high-impact growth ecosystem that cultivates transformative leadership, strengthens institutions, and mobilizes strategic capital.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Core Values */}
        <ScrollReveal delay={0.15}>
          <div className="text-center">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-accent mb-3">Core Values</h3>
            <h4 className="font-heading text-xl font-bold text-white mb-6">What Guides Us</h4>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {values.map((v) => (
                <div
                  key={v.label}
                  className="inline-flex items-center gap-2.5 bg-white/[0.04] rounded-md px-5 py-2.5 border border-white/10 hover:border-accent/40 transition-all duration-400"
                >
                  <v.icon className="w-3.5 h-3.5 text-accent" />
                  <span className="text-sm font-medium text-white/85">{v.label}</span>
                </div>
              ))}
            </div>
            <Button asChild variant="outline" className="font-sans font-semibold text-sm rounded-md tracking-wide bg-transparent border-white/20 text-white hover:bg-accent hover:text-accent-foreground hover:border-accent">
              <Link to="/about">Learn More About Us <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
