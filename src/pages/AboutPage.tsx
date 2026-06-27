import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import StaggeredText from "@/components/StaggeredText";
import AmbientParticles from "@/components/AmbientParticles";
import {
  Target,
  Compass,
  Lightbulb,
  Shield,
  Users,
  Award,
  Gem,
  ArrowRight,
  Rocket,
  Network,
  BadgeDollarSign,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import type { CarouselApi } from "@/components/ui/carousel";
import aboutHero from "@/assets/about-hero.jpg";
import evolveBg1 from "@/assets/evolve-bg-1.jpg";
import evolveBg2 from "@/assets/evolve-bg-2.jpg";
import evolveBg3 from "@/assets/evolve-bg-3.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const values = [
  { label: "Intentionality", icon: Target, desc: "Nothing is accidental; every change is designed." },
  { label: "Innovation", icon: Lightbulb, desc: "We cultivate adaptive thinking and creative solutions that anticipate change and position our leaders and organisations ahead of the curve." },
  { label: "Integrity", icon: Shield, desc: "We remain steadfast in truth, choosing what is right over what is convenient in every sphere of influence." },
  { label: "Excellence", icon: Award, desc: "We commit to superior standards in thought, character, execution, and outcomes — making excellence not an aspiration but our operational baseline." },
  { label: "Mentorship", icon: Compass, desc: "We accelerate growth through guided wisdom, structured accountability, and the transfer of insight from experience to emerging potential." },
  { label: "Community", icon: Users, desc: "We build ecosystems of collaboration, shared learning, and mutual accountability where collective growth strengthens individual success." },
  { label: "Legacy", icon: Gem, desc: "We pursue impact that transcends the present, building systems, values, and leaders that endure across generations." },
];

const strategicPillars = [
  {
    title: "EVOLVE",
    icon: Rocket,
    bg: evolveBg1,
    desc: "EVOLVE is the structured development engine of The Luminary Rise — a high-impact mentorship and learning platform designed to cultivate clarity, discipline, resilience, and strategic competence in emerging leaders, executives, entrepreneurs, and organisations. Built on the proprietary Awareness–Knowledge–Action–Repeat Better (AKA-RB) framework, EVOLVE transforms potential into measurable progress through guided learning, accountability systems, and practical execution.",
    link: "/programmes",
    linkLabel: "Explore EVOLVE",
  },
  {
    title: "The Luminaries Network",
    icon: Network,
    bg: evolveBg2,
    desc: "The Luminaries Network is the relational and influence ecosystem of TLR — an invitation-only community of high-capacity leaders, professionals, founders, executives, policy influencers, and value-driven organisations committed to growth with integrity and excellence. The Network fosters strategic collaboration, curated partnerships, executive roundtables, thought leadership forums, and peer-to-peer accountability.",
    link: "/luminaries-hub",
    linkLabel: "Explore The Network",
  },
  {
    title: "Amplify Impact Fund",
    icon: BadgeDollarSign,
    bg: evolveBg3,
    desc: "Amplify Impact Fund (AIF) is the catalytic capital arm of The Luminary Rise. AIF is designed to support vision with resources, providing structured access to growth-enabling capital through grants, venture support, development funding, and strategic business loans. It exists to ensure that clarity and competence are not limited by a lack of capital.",
    link: "/amplify-fund",
    linkLabel: "Explore AIF",
  },
];

const akaSteps = [
  { label: "Awareness", desc: "Recognise the gap between where you are and where you're called to be." },
  { label: "Knowledge", desc: "Gain the frameworks, insight, and wisdom that close that gap." },
  { label: "Action", desc: "Translate knowledge into decisive, structured execution." },
  { label: "Repeat Better", desc: "Refine, iterate, and compound — every cycle sharper than the last." },
];

const commitments = [
  { num: "01", title: "Clarity", desc: "Clarity for emerging leaders — see the path before walking it." },
  { num: "02", title: "Momentum", desc: "Momentum for personal, professional, and corporate growth." },
  { num: "03", title: "Structure", desc: "Structure for sustainable, repeatable transformation." },
];

const audiences = [
  "Individuals seeking personal excellence",
  "Entrepreneurs pursuing business growth",
  "Senior executives refining leadership capacity",
  "Organisations pursuing sustainable growth",
];

const NAVY = "bg-[#0a0e1a]";

// Word-by-word fade reveal used in the pull quote.
const WordReveal = ({ text, className = "" }: { text: string; className?: string }) => {
  const words = text.split(" ");
  return (
    <p className={className}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
        >
          {w}
        </motion.span>
      ))}
    </p>
  );
};

// AKA-RB animated scroll-tied timeline
const AkaTimeline = ({ steps }: { steps: { label: string; desc: string }[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [active, setActive] = useState<boolean[]>(() => steps.map(() => false));

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive((prev) => {
      const next = steps.map((_, i) => v >= (i + 0.5) / steps.length);
      return prev.every((p, i) => p === next[i]) ? prev : next;
    });
  });

  return (
    <div ref={ref} className="relative pl-14">
      {/* Track */}
      <div className="absolute left-[18px] top-2 bottom-2 w-[2px] bg-white/10 rounded-full" />
      {/* Animated draw */}
      <motion.div
        style={{ height: lineHeight }}
        className="absolute left-[18px] top-2 w-[2px] bg-gradient-to-b from-accent via-accent to-accent/40 rounded-full shadow-[0_0_12px_rgba(212,175,55,0.6)]"
      />
      <div className="space-y-10">
        {steps.map((step, i) => {
          const on = active[i];
          return (
            <div key={step.label} className="relative min-h-[60px]">
              {/* Node */}
              <motion.div
                animate={
                  on
                    ? {
                        scale: [0.7, 1.25, 1],
                        boxShadow: [
                          "0 0 0px rgba(212,175,55,0)",
                          "0 0 32px rgba(212,175,55,0.9)",
                          "0 0 14px rgba(212,175,55,0.5)",
                        ],
                      }
                    : { scale: 0.7, boxShadow: "0 0 0px rgba(212,175,55,0)" }
                }
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="absolute -left-14 top-1 w-9 h-9 rounded-full bg-accent flex items-center justify-center"
              >
                <span className="block w-3 h-3 rounded-full bg-[#0a0e1a] ring-2 ring-accent/80" />
              </motion.div>
              {/* Title */}
              <motion.h4
                initial={false}
                animate={on ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
                transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
                className="font-heading text-xl md:text-2xl font-bold text-white mb-2"
              >
                {step.label}
              </motion.h4>
              {/* Desc */}
              <motion.p
                initial={false}
                animate={on ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
                transition={{ duration: 0.55, delay: 0.18, ease: [0.23, 1, 0.32, 1] }}
                className="text-white/65 text-[15.5px] leading-[1.75] max-w-md"
              >
                {step.desc}
              </motion.p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const AboutPage = () => {
  const [bioVisible, setBioVisible] = useState(false);
  const bioLines = [
    "Dr Samuel Omenka is a senior economist, trusted advisor, visionary leader, and kingdom strategist whose life and work are defined by the dual call to transform economies and amplify Jesus Christ.",
    "He brings together deep technical expertise in macroeconomic frameworks, public financial management systems, fiscal reforms, and development policy analysis with a mission-driven commitment to advancing kingdom values.",
    "As a trusted policy advisor, Samuel has successfully provided incisive economic strategies and secured consensus for critical fiscal and governance reforms.",
    "Beyond economics, Samuel is a visionary investor, entrepreneur, and mentor who builds businesses, strategic investment platforms, and growth mentorship programmes — all rooted in integrity, excellence, and stewardship.",
    "Through initiatives such as The Luminary Rise, he empowers leaders through transformational growth and creates opportunities that inspire hope, foster growth, and enable abundant living.",
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Header />

        {/* HERO — cinematic full-bleed */}
        <section className="relative pt-16">
          <div className="relative h-[78vh] min-h-[560px] flex items-center justify-center overflow-hidden">
            <img
              src={aboutHero}
              alt="City skyline at dawn"
              className="absolute inset-0 w-full h-full object-cover"
              width={1920}
              height={1024}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/85 via-[#0a0e1a]/70 to-[#0a0e1a]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a]/80 via-transparent to-[#0a0e1a]/40" />
            <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/15 blur-[180px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl px-6 text-center">
              <ScrollReveal>
                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight md:whitespace-nowrap">
                  About <span className="text-gradient-gold">The Luminary Rise</span>
                </h1>
                <div className="editorial-line mx-auto mb-8" />
                <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-[1.7]">
                  More than a school — a dynamic ecosystem for strategic growth and intentional transformation.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* WHO WE ARE — pure white + gold particle shimmer */}
        <section className="relative py-24 md:py-28 bg-white overflow-hidden">
          <AmbientParticles count={12} className="opacity-60" />
          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-start">
              <div className="md:col-span-3">
                <ScrollReveal>
                  <p className="editorial-label text-accent mb-5 tracking-[0.2em] text-sm font-semibold">WHO WE ARE</p>
                </ScrollReveal>
                <StaggeredText
                  text="A Premier Platform for Transformational Growth"
                  className="font-heading text-4xl md:text-5xl font-bold text-primary mb-8 leading-[1.1]"
                />
                <div className="space-y-6 text-primary/75 leading-[1.85] text-[17px]">
                  {[
                    "The Luminary Rise (TLR) is a premier platform for transformational growth. More than a school, TLR is a dynamic ecosystem where emerging leaders, mid- to senior professionals, businesses, and corporate organisations access the knowledge, people, tools, and support needed to thrive in today's world.",
                    "At TLR, we believe growth precedes transformation, and some levels of growth depend on transformation. Our programmes are designed to foster structured learning, mindset shifts, and actionable practice that create lasting impact across personal and professional spheres.",
                    "Led by Dr Samuel Omenka alongside a faculty of seasoned experts, TLR functions as both a training hub and mentorship community — equipping leaders and enterprises to rise with clarity, character, and competence.",
                  ].map((p, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.7, delay: 0.2 + i * 0.2, ease: [0.23, 1, 0.32, 1] }}
                    >
                      {p}
                    </motion.p>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2 space-y-6" style={{ perspective: 1200 }}>
                {[
                  {
                    label: "THE PROBLEM",
                    body: "People desire and aspire to live a better life, often accompanied by great expectations — yet are disappointed by realities that deviate from those dreams, due to the absence of balanced, purpose-driven action for a life of fulfilment.",
                  },
                  {
                    label: "OUR BELIEF",
                    body: "Anyone can be great and live a fulfilling life if they engage early the things they would otherwise learn later — and if they have and utilise opportunities for learning and growth on time.",
                  },
                ].map((c, i) => (
                  <motion.div
                    key={c.label}
                    initial={{ opacity: 0, rotateX: -18, rotateY: 14, y: 30 }}
                    whileInView={{ opacity: 1, rotateX: 0, rotateY: 0, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.9, delay: i * 0.18, ease: [0.23, 1, 0.32, 1] }}
                    className="relative bg-white rounded-lg p-8 border border-primary/10 border-l-4 border-l-accent shadow-[0_10px_40px_-12px_rgba(10,14,26,0.12)] hover:shadow-[0_20px_50px_-12px_rgba(10,14,26,0.18)] transition-shadow duration-500"
                  >
                    <p className="editorial-label text-accent mb-4 tracking-[0.2em] text-base font-bold">{c.label}</p>
                    <p className="text-primary/85 text-[18px] leading-[1.8]">{c.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* COMMITMENT & AKA-RB — redesigned columns */}
        <section className={`relative ${NAVY} py-20 md:py-24 overflow-hidden`}>
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.06] blur-[160px] pointer-events-none" />
          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              {/* Left: Commitment numbered cards */}
              <div>
                <ScrollReveal>
                  <p className="editorial-label text-accent mb-5 tracking-[0.2em] text-sm font-semibold">OUR COMMITMENT</p>
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-10 leading-[1.15]">
                    Built for clarity, momentum, and structure.
                  </h3>
                </ScrollReveal>
                <div className="space-y-5">
                  {commitments.map((c, i) => (
                    <motion.div
                      key={c.num}
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.7, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] }}
                      className="relative rounded-xl p-7 bg-white/[0.04] border border-white/10 hover:border-accent/40 hover:bg-white/[0.07] transition-all duration-500 overflow-hidden"
                    >
                      <div className="flex items-start gap-6">
                        <span className="font-heading text-5xl md:text-6xl font-bold text-accent leading-none shrink-0">{c.num}</span>
                        <div>
                          <h4 className="font-heading text-xl md:text-2xl font-bold text-white mb-2">{c.title}</h4>
                          <p className="text-white/70 text-[15px] leading-[1.7]">{c.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: AKA-RB vertical timeline */}
              <div>
                <ScrollReveal>
                  <p className="editorial-label text-accent mb-5 tracking-[0.2em] text-sm font-semibold">THE AKA-RB METHOD</p>
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-10 leading-[1.15]">
                    A framework that turns insight into outcome.
                  </h3>
                </ScrollReveal>
                <AkaTimeline steps={akaSteps} />
              </div>
            </div>
          </div>
        </section>

        {/* VISION & MISSION — full-bleed cinematic */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <img
            src={aboutHero}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#0a0e1a]/[0.78]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/40 via-transparent to-[#0a0e1a]/60" />
          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="grid md:grid-cols-2 gap-12 md:gap-0 relative items-stretch">
              {/* Vertical gold divider drawing down */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.4, ease: [0.23, 1, 0.32, 1] }}
                style={{ transformOrigin: "top" }}
                className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent to-transparent"
              />
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
                className="md:pr-16"
              >
                <div className="bg-white/[0.04] backdrop-blur-md border border-white/10 border-t-2 border-t-accent rounded-lg p-8 md:p-10 h-full">
                  <p className="editorial-label text-accent mb-5 tracking-[0.25em] text-sm font-bold">VISION</p>
                  <p className="font-heading text-2xl md:text-3xl text-white leading-[1.4] font-medium">
                    To shape a future where transformational leaders and resilient institutions drive sustainable prosperity and generational impact across nations.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
                className="md:pl-16"
              >
                <div className="bg-white/[0.04] backdrop-blur-md border border-white/10 border-t-2 border-t-accent rounded-lg p-8 md:p-10 h-full">
                  <p className="editorial-label text-accent mb-5 tracking-[0.25em] text-sm font-bold">MISSION</p>
                  <p className="font-heading text-2xl md:text-3xl text-white leading-[1.4] font-medium">
                    To build and steward an integrated, high-impact growth ecosystem that cultivates transformative leadership, strengthens institutions, and mobilises strategic capital.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CORE VALUES — glassmorphism carousel */}
        <section className="py-24 md:py-28 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="editorial-label text-accent mb-5 tracking-[0.2em] text-sm font-semibold">WHAT GUIDES US</p>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary leading-[1.1]">
                  Our <span className="text-gradient-gold">Core Values</span>
                </h2>
              </div>
            </ScrollReveal>
            <Carousel opts={{ align: "start", loop: true }} className="w-full" aria-label="Core values carousel">
              <CarouselContent className="-ml-4">
                {values.map((v, i) => (
                  <CarouselItem key={v.label} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.7, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
                      className="h-full group rounded-2xl p-8 min-h-[260px]
                        bg-gradient-to-br from-primary/[0.04] via-white to-accent/[0.05]
                        backdrop-blur-xl border border-primary/10 border-t-2 border-t-accent
                        shadow-[0_8px_40px_-18px_hsl(var(--primary)/0.25)]
                        hover:-translate-y-1 hover:shadow-[0_18px_50px_-12px_rgba(212,175,55,0.35)]
                        hover:border-accent/50 transition-all duration-500"
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(212,175,55,0.25)]">
                        <v.icon className="w-5 h-5 text-accent" />
                      </div>
                      <h4 className="font-heading font-bold text-primary mb-3 text-lg">{v.label}</h4>
                      <p className="text-[14px] text-primary/65 leading-[1.7]">{v.desc}</p>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-accent/40 text-accent hover:bg-accent hover:text-[#0a0e1a]">
                <ChevronLeft />
              </CarouselPrevious>
              <CarouselNext className="border-accent/40 text-accent hover:bg-accent hover:text-[#0a0e1a]">
                <ChevronRight />
              </CarouselNext>
            </Carousel>
          </div>
        </section>

        {/* STRATEGIC PILLARS — accordion */}
        <section className={`relative ${NAVY} py-20 md:py-24 overflow-hidden`}>
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-accent/[0.05] blur-[160px] pointer-events-none" />
          <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="editorial-label text-accent mb-5 tracking-[0.2em] text-sm font-semibold">OUR ARCHITECTURE</p>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.1]">
                  The <span className="text-gradient-gold">Strategic Pillars</span>
                </h2>
                <p className="text-white/70 text-[17px] max-w-2xl mx-auto leading-[1.7]">
                  Three integrated pillars designed to move leaders and organisations forward — forming a complete ecosystem for strategic growth.
                </p>
              </div>
            </ScrollReveal>

            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
              {strategicPillars.map((p, i) => (
                <AccordionItem
                  key={p.title}
                  value={`item-${i}`}
                  className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] data-[state=open]:bg-white/[0.06] data-[state=open]:border-accent/40 transition-all duration-500"
                >
                  {/* Gold left accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/40 group-data-[state=open]:bg-accent group-data-[state=open]:shadow-[0_0_18px_rgba(212,175,55,0.7)] transition-all duration-500" />
                  {/* Background image (visible when open) */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-0 group-data-[state=open]:opacity-[0.12] transition-opacity duration-700"
                    style={{ backgroundImage: `url(${p.bg})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a] via-[#0a0e1a]/85 to-transparent pointer-events-none" />

                  <AccordionTrigger className="relative z-10 px-6 md:px-8 py-6 hover:no-underline text-accent [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-accent">
                    <div className="flex items-center gap-5 text-left">
                      <div className="w-12 h-12 rounded-md bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">
                        <p.icon className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-white">{p.title}</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="relative z-10 px-6 md:px-8 pb-8 pl-[88px] md:pl-[100px]">
                    <p className="text-[16px] text-white/75 leading-[1.85] mb-6 max-w-3xl">{p.desc}</p>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="font-sans font-semibold text-sm rounded-md tracking-wide bg-transparent border-accent/50 text-accent hover:bg-accent hover:text-[#0a0e1a]"
                    >
                      <Link to={p.link}>
                        {p.linkLabel} <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                      </Link>
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* WHO IT'S FOR — staggered cards */}
        <section className={`relative ${NAVY} py-20 md:py-24 border-t border-white/5`}>
          <div className="container mx-auto px-6 max-w-5xl">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="editorial-label text-accent mb-5 tracking-[0.2em] text-sm font-semibold">OUR AUDIENCE</p>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-[1.1]">
                  Who TLR Is <span className="text-gradient-gold">For</span>
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 gap-5">
              {audiences.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] }}
                  className="group flex items-center gap-4 bg-white/[0.04] rounded-lg p-6 border border-white/10 hover:border-accent/40 hover:bg-white/[0.07] hover:-translate-y-1 hover:shadow-[0_10px_30px_-12px_rgba(212,175,55,0.3)] transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded-md bg-accent/15 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-500">
                    <ArrowRight className="w-4 h-4 text-accent group-hover:text-[#0a0e1a] group-hover:translate-x-0.5 transition-all duration-500" />
                  </div>
                  <span className="text-[17px] font-medium text-white">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* LEADERSHIP — gold halo + line-by-line bio */}
        <section className="py-24 md:py-28 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <ScrollReveal>
              <p className="editorial-label text-accent text-center mb-5 tracking-[0.2em] text-sm font-semibold">LEADERSHIP</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary text-center mb-14 leading-[1.1]">
                The Team Behind <span className="text-gradient-gold">TLR</span>
              </h2>
            </ScrollReveal>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
              onViewportEnter={() => setBioVisible(true)}
              className="grid md:grid-cols-[260px_1fr] gap-10 md:gap-14 items-start"
            >
              <div className="mx-auto md:mx-0">
                <div className="relative w-[220px] h-[220px] md:w-[260px] md:h-[260px]">
                  <motion.div
                    animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.08, 1] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -inset-3 rounded-full bg-accent/30 blur-2xl"
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-br from-accent via-accent/40 to-accent"
                  >
                    <div className="w-full h-full rounded-full overflow-hidden bg-primary/5 border-4 border-white">
                      <img src="/placeholder.svg" alt="Portrait of Dr Samuel Omenka" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                    </div>
                  </motion.div>
                </div>
              </div>
              <div>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">Dr Samuel Omenka</h3>
                <p className="editorial-label text-accent mb-6 tracking-[0.2em] text-sm font-bold">PRESIDENT & LEAD COACH</p>
                <div className="space-y-4 text-primary/75 leading-[1.9] text-[17px] text-left">
                  {bioLines.map((line, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 14 }}
                      animate={bioVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.7, delay: 0.2 + i * 0.18, ease: [0.23, 1, 0.32, 1] }}
                    >
                      {line}
                    </motion.p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PULL QUOTE — deep navy, scaled quote icon, word reveal, gold glow */}
        <section className={`relative ${NAVY} py-24 md:py-28 overflow-hidden`}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/[0.08] blur-[160px] pointer-events-none" />
          <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
            <motion.div
              initial={{ scale: 0.3, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            >
              <Quote aria-hidden="true" className="w-16 h-16 md:w-20 md:h-20 text-accent/70 mx-auto mb-10" />
            </motion.div>
            <WordReveal
              text={'"At Luminary Rise, we don\'t just adapt to change — we lead it, inspire it, and rise with it."'}
              className="font-heading text-2xl md:text-4xl text-white italic leading-[1.5] font-medium"
            />
          </div>
        </section>

        {/* CTA — deep navy with gold glow + pulsing button */}
        <section className={`relative ${NAVY} py-24 md:py-28 overflow-hidden border-t border-white/5`}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.18] blur-[180px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/[0.12] blur-[100px] pointer-events-none" />
          <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
            <ScrollReveal>
              <p className="editorial-label text-accent mb-6 tracking-[0.2em] text-sm font-bold">START TODAY</p>
            </ScrollReveal>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
              className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1]"
            >
              Ready to Begin Your Journey?
            </motion.h2>
            <div className="editorial-line mx-auto mb-8 !bg-accent/40" />
            <ScrollReveal delay={0.2}>
              <p className="text-white/70 text-lg mb-12 leading-[1.8] max-w-xl mx-auto">
                Join a community of intentional leaders committed to strategic transformation.
              </p>
            </ScrollReveal>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{
                opacity: 1,
                scale: [0.9, 1.05, 1],
                boxShadow: [
                  "0 0 0px rgba(212,175,55,0)",
                  "0 0 60px rgba(212,175,55,0.7)",
                  "0 0 25px rgba(212,175,55,0.35)",
                ],
              }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.4, ease: [0.23, 1, 0.32, 1] }}
              className="inline-block rounded-md"
            >
              <Button
                asChild
                size="lg"
                className="bg-accent text-[#0a0e1a] hover:bg-accent hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] font-sans font-bold text-base px-10 py-7 rounded-md tracking-wide transition-shadow duration-500"
              >
                <Link to="/apply">Apply to EVOLVE <ArrowRight className="w-5 h-5 ml-2" /></Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default AboutPage;
