import { Rocket, Network, BadgeDollarSign, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import StaggeredText from "@/components/StaggeredText";
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
    title: "The Luminaries Network",
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
    <section className="pt-16 pb-10 md:pt-20 md:pb-12 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <StaggeredText
            text="More Than a School, We Are An Ecosystem"
            className="font-heading text-3xl md:text-5xl font-bold text-primary mb-5 leading-[1.15]"
          />
          <ScrollReveal delay={0.3}>
            <div className="editorial-line mx-auto mb-5" />
            <p className="text-primary/70 text-[17px] leading-[1.8] max-w-lg mx-auto">
              The Luminary Rise is a dynamic ecosystem where emerging leaders, professionals, businesses, and organisations access the knowledge, tools, and support needed to thrive in today's fast-changing world.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-3 gap-4 mb-12 max-w-md mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <CountUp
                  target={s.value}
                  suffix={s.suffix}
                  className="font-heading text-2xl md:text-3xl font-bold text-accent block"
                />
                <span className="text-[11px] text-primary/60 tracking-wide uppercase mt-1 block">{s.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-accent mb-3">Our Pillars</h3>
            <h4 className="font-heading text-xl md:text-2xl font-bold text-primary leading-[1.2]">
              Three Integrated Pillars
            </h4>
          </div>
        </ScrollReveal>

        {/* Three-up glassmorphism grid */}
        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-8">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              >
                <Link
                  to={p.link}
                  className="block relative h-full rounded-2xl p-7 md:p-8 min-h-[340px] group overflow-hidden
                    bg-gradient-to-br from-primary/[0.04] via-white to-accent/[0.05]
                    backdrop-blur-xl border border-primary/10
                    shadow-[0_8px_40px_-18px_hsl(var(--primary)/0.28)]
                    hover:border-accent/45 hover:shadow-[0_12px_56px_-18px_hsl(var(--accent)/0.35)]
                    hover:-translate-y-1 transition-all duration-700"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/[0.04] to-accent/[0.08] pointer-events-none" />
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-14 h-14 rounded-xl bg-accent/20 backdrop-blur-sm border border-accent/40 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors duration-500">
                      <p.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="editorial-label mb-3 text-accent">Pillar {String(i + 1).padStart(2, "0")}</div>
                    <h4 className="font-heading font-bold text-primary mb-4 text-xl md:text-2xl">{p.title}</h4>
                    <p className="text-[15px] text-primary/70 leading-[1.75] flex-1">{p.desc}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-accent text-sm font-sans font-semibold tracking-wide">
                      Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-center">
            <Button asChild variant="outline" className="font-sans font-semibold text-sm rounded-md tracking-wide bg-transparent border-primary/30 text-primary hover:bg-accent hover:border-accent hover:text-accent-foreground">
              <Link to="/about">Learn More About Us <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PillarsSection;
