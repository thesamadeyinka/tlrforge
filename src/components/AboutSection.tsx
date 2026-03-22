import { Target, Compass, Lightbulb, Shield, Users, Award, Gem, ArrowRight, Rocket, Network, BadgeDollarSign, Eye, Goal } from "lucide-react";
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

const pillars = [
  {
    title: "EVOLVE",
    icon: Rocket,
    desc: "The structured development engine, a high-impact mentorship and learning platform built on the AKA-RB framework.",
    link: "/programmes",
  },
  {
    title: "The Luminaries Hub",
    icon: Network,
    desc: "An invitation-only community of high-capacity leaders fostering strategic collaboration and peer-to-peer accountability.",
    link: "/luminaries-hub",
  },
  {
    title: "Amplify Impact Fund",
    icon: BadgeDollarSign,
    desc: "The catalytic capital arm providing structured access to growth-enabling capital through grants, venture support, and strategic loans.",
    link: "/amplify-fund",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background relative">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-accent mb-4">Who We Are</h3>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-5 leading-[1.15]">
              More Than a School, We Are An Ecosystem
            </h2>
            <div className="editorial-line mx-auto mb-5" />
            <p className="text-muted-foreground text-[17px] leading-[1.8] max-w-lg mx-auto">
              A dynamic ecosystem where emerging leaders, professionals, businesses, and organisations access the knowledge, tools, and support needed to thrive in today's fast-changing world.
            </p>
          </div>
        </ScrollReveal>




        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden mb-16">
          <ScrollReveal delay={0.1}>
            <div className="bg-card p-8 md:p-10 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                  <Eye className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-accent">Vision</h3>
              </div>
              <p className="text-foreground/80 leading-[1.8] text-[17px] pl-[52px]">
                To shape a future where transformational leaders and resilient institutions drive sustainable prosperity and generational impact across nations.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="bg-card p-8 md:p-10 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                  <Goal className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-accent">Mission</h3>
              </div>
              <p className="text-foreground/80 leading-[1.8] text-[17px] pl-[52px]">
                To build and steward an integrated, high-impact growth ecosystem that cultivates transformative leadership, strengthens institutions, and mobilizes strategic capital.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Strategic Pillars */}
        <ScrollReveal delay={0.1}>
          <div className="text-center mb-10">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-accent mb-3">Our Pillars</h3>
            <h4 className="font-heading text-xl md:text-2xl font-bold text-foreground leading-[1.2]">
              Three Integrated Pillars
            </h4>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1}>
              <Link to={p.link} className="block bg-card rounded-lg border border-border p-8 h-full group card-glow">
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors duration-500">
                  <p.icon className="w-4.5 h-4.5 text-accent" />
                </div>
                <h4 className="font-heading font-bold text-foreground mb-2 text-lg">{p.title}</h4>
                <p className="text-[15px] text-muted-foreground leading-[1.8]">{p.desc}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Core Values */}
        <ScrollReveal delay={0.15}>
          <div className="text-center">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-accent mb-3">Core Values</h3>
            <h4 className="font-heading text-xl font-bold text-foreground mb-6">What Guides Us</h4>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {values.map((v) => (
                <div
                  key={v.label}
                  className="inline-flex items-center gap-2.5 bg-card rounded-md px-5 py-2.5 border border-border hover:border-accent/20 transition-all duration-400"
                >
                  <v.icon className="w-3.5 h-3.5 text-accent" />
                  <span className="text-sm font-medium text-foreground">{v.label}</span>
                </div>
              ))}
            </div>
            <Button asChild variant="outline" className="font-sans font-semibold text-sm rounded-md tracking-wide">
              <Link to="/about">Learn More About Us <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
