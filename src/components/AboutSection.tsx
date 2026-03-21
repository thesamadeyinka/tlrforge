import { Target, Compass, Lightbulb, Shield, Users, Award, Gem, ArrowRight, Rocket, Network, BadgeDollarSign } from "lucide-react";
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
    desc: "The structured development engine — a high-impact mentorship and learning platform built on the AKA-RB framework.",
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
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground text-center mb-6 leading-tight">
            More Than a School.{" "}
            <span className="text-gradient-gold">An Ecosystem.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-center mb-12">
            A dynamic ecosystem where emerging leaders, professionals, businesses, and organisations access the knowledge, tools, and support needed to thrive in today's fast-changing world.
          </p>
        </ScrollReveal>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <ScrollReveal delay={0.1}>
            <div className="bg-secondary rounded-2xl p-8 border border-border h-full group hover:border-accent/30 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-accent/10">
                <Compass className="w-7 h-7 text-accent drop-shadow-sm" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To shape a future where transformational leaders and resilient institutions drive sustainable prosperity and generational impact across nations.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="bg-secondary rounded-2xl p-8 border border-border h-full group hover:border-accent/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To build and steward an integrated, high-impact growth ecosystem that cultivates transformative leadership, strengthens institutions, and mobilizes strategic capital to advance societies and create enduring economic value.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Strategic Pillars */}
        <ScrollReveal delay={0.1}>
          <div className="text-center mb-6">
            <h3 className="font-heading text-lg font-semibold text-foreground">Strategic Pillars</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.08}>
                <div className="bg-secondary rounded-2xl p-6 border border-border h-full group hover:border-accent/30 transition-colors text-center">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <p.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-heading font-bold text-foreground mb-2">{p.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* Core Values */}
        <ScrollReveal delay={0.15}>
          <div className="text-center mb-8">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-6">Core Values</h3>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {values.map((v) => (
                <div
                  key={v.label}
                  className="inline-flex items-center gap-2 bg-muted rounded-full px-5 py-2.5 border border-border hover:border-accent/40 transition-colors"
                >
                  <v.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">{v.label}</span>
                </div>
              ))}
            </div>
            <Button asChild variant="outline" className="font-heading font-semibold">
              <Link to="/about">Learn More About Us <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
