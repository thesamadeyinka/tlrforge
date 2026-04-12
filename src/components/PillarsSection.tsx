import { Rocket, Network, BadgeDollarSign, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import StaggeredText from "@/components/StaggeredText";
import SlideIn from "@/components/SlideIn";
import CountUp from "@/components/CountUp";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

const stats = [
  { value: 500, suffix: "+", label: "Leaders Transformed" },
  { value: 12, suffix: "", label: "Countries Reached" },
  { value: 95, suffix: "%", label: "Programme Satisfaction" },
];

const PillarsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <StaggeredText
            text="More Than a School, We Are An Ecosystem"
            className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-5 leading-[1.15]"
          />
          <ScrollReveal delay={0.3}>
            <div className="editorial-line mx-auto mb-5" />
            <p className="text-muted-foreground text-[17px] leading-[1.8] max-w-lg mx-auto">
              A dynamic ecosystem where emerging leaders, professionals, businesses, and organisations access the knowledge, tools, and support needed to thrive in today's fast-changing world.
            </p>
          </ScrollReveal>
        </div>

        {/* Stats counter row */}
        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-3 gap-4 mb-14 max-w-md mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <CountUp
                  target={s.value}
                  suffix={s.suffix}
                  className="font-heading text-2xl md:text-3xl font-bold text-accent block"
                />
                <span className="text-[11px] text-muted-foreground tracking-wide uppercase mt-1 block">{s.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="text-center mb-10">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-accent mb-3">Our Pillars</h3>
            <h4 className="font-heading text-xl md:text-2xl font-bold text-foreground leading-[1.2]">
              Three Integrated Pillars
            </h4>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {pillars.map((p, i) => (
            <SlideIn key={p.title} direction={i === 0 ? "left" : i === 2 ? "right" : "up"} delay={i * 0.12}>
              <Link to={p.link} className="block bg-card rounded-lg border border-border p-8 h-full group card-glow">
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors duration-500">
                  <p.icon className="w-4.5 h-4.5 text-accent" />
                </div>
                <h4 className="font-heading font-bold text-foreground mb-2 text-lg">{p.title}</h4>
                <p className="text-[15px] text-muted-foreground leading-[1.8]">{p.desc}</p>
              </Link>
            </SlideIn>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="text-center">
            <Button asChild variant="outline" className="font-sans font-semibold text-sm rounded-md tracking-wide">
              <Link to="/about">Learn More About Us <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PillarsSection;
