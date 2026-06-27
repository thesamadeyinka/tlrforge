import { Rocket, Network, BadgeDollarSign, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const scrollTo = (i: number) => emblaApi?.scrollTo(i);

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
              The Luminary Rise is a dynamic ecosystem where emerging leaders, professionals, businesses, and organisations access the knowledge, tools, and support needed to thrive in today's fast-changing world.
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

        {/* Glassmorphism Carousel */}
        <ScrollReveal delay={0.15}>
          <div className="relative max-w-2xl mx-auto mb-10">
            {/* Ambient glow behind card */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-40 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-primary/20 to-accent/10 rounded-full" />
            </div>

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {pillars.map((p, i) => (
                  <div key={p.title} className="flex-[0_0_100%] min-w-0 px-2">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selected === i ? `active-${i}` : `idle-${i}`}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                      >
                        <Link
                          to={p.link}
                          className="block relative rounded-2xl p-10 md:p-12 min-h-[320px] group overflow-hidden
                            bg-gradient-to-br from-card/60 via-card/40 to-card/20
                            backdrop-blur-xl border border-accent/20
                            shadow-[0_8px_40px_-12px_hsl(var(--accent)/0.25)]
                            hover:border-accent/40 hover:shadow-[0_12px_60px_-12px_hsl(var(--accent)/0.4)]
                            transition-all duration-700"
                        >
                          {/* Inner glow */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/[0.03] to-accent/[0.06] pointer-events-none" />
                          {/* Top hairline */}
                          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

                          <div className="relative z-10">
                            <div className="w-14 h-14 rounded-xl bg-accent/10 backdrop-blur-sm border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-500">
                              <p.icon className="w-6 h-6 text-accent" />
                            </div>
                            <div className="editorial-label mb-3">Pillar {String(i + 1).padStart(2, "0")}</div>
                            <h4 className="font-heading font-bold text-foreground mb-4 text-2xl md:text-3xl">{p.title}</h4>
                            <p className="text-[16px] text-muted-foreground leading-[1.8] max-w-md">{p.desc}</p>
                            <div className="mt-6 inline-flex items-center gap-2 text-accent text-sm font-sans font-semibold tracking-wide">
                              Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows */}
            <button
              aria-label="Previous pillar"
              onClick={scrollPrev}
              className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full
                bg-card/70 backdrop-blur-md border border-accent/20 text-foreground
                flex items-center justify-center hover:bg-accent/10 hover:border-accent/40 transition-all duration-300 z-20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              aria-label="Next pillar"
              onClick={scrollNext}
              className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full
                bg-card/70 backdrop-blur-md border border-accent/20 text-foreground
                flex items-center justify-center hover:bg-accent/10 hover:border-accent/40 transition-all duration-300 z-20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {pillars.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to pillar ${i + 1}`}
                  onClick={() => scrollTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-400 ${
                    selected === i ? "w-8 bg-accent" : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

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
