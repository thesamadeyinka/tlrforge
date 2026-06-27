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
import visionBg from "@/assets/vision-bg.jpg";
import missionBg from "@/assets/mission-bg.jpg";
import samuelPortrait from "@/assets/samuel-omenka.jpg.asset.json";
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
  { label: "Repeat Better", desc: "Refine, iterate, and compound, every action better than the last." },
];

const commitments = [
  { num: "01", title: "Clarity", desc: "Clarity for emerging leaders — see the path before walking it." },
  { num: "02", title: "Structure", desc: "Structure for sustainable, repeatable transformation." },
  { num: "03", title: "Momentum", desc: "Momentum for personal, professional, and corporate growth." },
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
// Core Values auto-advancing carousel with shimmer, indicators, and prominent gold arrows
const ValuesCarousel = ({
  values,
}: {
  values: { label: string; icon: typeof Target; desc: string }[];
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const autoplay = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  useEffect(() => {
    if (!api) return;
    setSnaps(api.scrollSnapList());
    setSelected(api.selectedScrollSnap());
    const onSelect = () => setSelected(api.selectedScrollSnap());
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="relative">
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[autoplay.current]}
        setApi={setApi}
        className="w-full"
        aria-label="Core values carousel"
      >
        <CarouselContent className="-ml-4">
          {values.map((v, i) => (
            <CarouselItem key={v.label} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: (i % 3) * 0.12, ease: [0.23, 1, 0.32, 1] }}
                className="relative h-full group rounded-2xl p-8 min-h-[260px] overflow-hidden
                  bg-gradient-to-br from-primary/[0.04] via-white to-accent/[0.05]
                  backdrop-blur-xl border border-primary/10
                  shadow-[0_8px_40px_-18px_hsl(var(--primary)/0.25)]
                  hover:-translate-y-1.5 hover:shadow-[0_22px_55px_-12px_rgba(212,175,55,0.45)]
                  hover:border-accent/60 transition-all duration-500"
              >
                {/* Gold top border + shimmer */}
                <span className="absolute top-0 left-0 right-0 h-[2px] bg-accent" />
                <motion.span
                  aria-hidden="true"
                  className="absolute top-0 left-0 h-[2px] w-1/3 bg-gradient-to-r from-transparent via-white/90 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "400%" }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "linear", delay: i * 0.4 }}
                />
                <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(212,175,55,0.25)]">
                  <v.icon className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-heading font-bold text-primary mb-3 text-lg">{v.label}</h4>
                <p className="text-[14px] text-primary/65 leading-[1.7]">{v.desc}</p>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="-left-2 md:-left-6 h-11 w-11 rounded-full bg-accent border-accent text-white hover:bg-accent/90 hover:text-white shadow-[0_8px_24px_-6px_rgba(212,175,55,0.55)] opacity-100"
        >
          <ChevronLeft className="h-5 w-5" />
        </CarouselPrevious>
        <CarouselNext
          className="-right-2 md:-right-6 h-11 w-11 rounded-full bg-accent border-accent text-white hover:bg-accent/90 hover:text-white shadow-[0_8px_24px_-6px_rgba(212,175,55,0.55)] opacity-100"
        >
          <ChevronRight className="h-5 w-5" />
        </CarouselNext>
      </Carousel>

      {/* Gold dash indicators */}
      <div className="flex items-center justify-center gap-2 mt-8" role="tablist" aria-label="Carousel position">
        {snaps.map((_, i) => {
          const active = i === selected;
          return (
            <button
              key={i}
              type="button"
              onClick={() => api?.scrollTo(i)}
              aria-label={`Go to value ${i + 1}`}
              aria-selected={active}
              role="tab"
              className={`h-[3px] rounded-full transition-all duration-500 ${
                active ? "w-8 bg-accent shadow-[0_0_10px_rgba(212,175,55,0.7)]" : "w-4 bg-accent/30 hover:bg-accent/60"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

// Auto-rotating highlight grid for Core Values — premium TLR card system
const ValuesGrid = ({
  values,
}: {
  values: { label: string; icon: typeof Target; desc: string }[];
}) => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const hoverIdx = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % values.length);
    }, 3000);
    return () => clearInterval(id);
  }, [paused, values.length]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
      {values.map((v, i) => {
        const isActive = i === active;
        return (
          <motion.div
            key={v.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            onMouseEnter={() => {
              hoverIdx.current = i;
              setActive(i);
              setPaused(true);
            }}
            onMouseLeave={() => {
              hoverIdx.current = null;
              setPaused(false);
            }}
            animate={{
              y: isActive ? -6 : 0,
              boxShadow: isActive
                ? "0 24px 50px -18px rgba(212,175,55,0.45), 0 0 0 1px rgba(212,175,55,0.6)"
                : "0 8px 24px -16px rgba(10,14,26,0.12)",
              backgroundColor: isActive ? "rgba(212,175,55,0.06)" : "rgba(255,255,255,1)",
            }}
            transition={{ duration: 0.55, delay: i * 0.06, ease: [0.23, 1, 0.32, 1] }}
            className="relative overflow-hidden rounded-2xl p-7 md:p-8 border border-primary/10 cursor-pointer"
          >
            {/* Gold top border */}
            <span
              className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-500 ${
                isActive ? "bg-accent shadow-[0_0_12px_rgba(212,175,55,0.7)]" : "bg-accent/40"
              }`}
            />
            {/* Faint corner number */}
            <span
              className={`absolute top-4 right-5 font-heading font-bold leading-none text-5xl md:text-6xl transition-all duration-500 ${
                isActive ? "text-accent/90" : "text-accent/15"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div
              className={`w-11 h-11 rounded-lg border flex items-center justify-center mb-5 transition-all duration-500 ${
                isActive
                  ? "bg-accent/20 border-accent/60 shadow-[0_0_18px_rgba(212,175,55,0.45)]"
                  : "bg-accent/10 border-accent/25"
              }`}
            >
              <v.icon className="w-5 h-5 text-accent" />
            </div>
            <h4 className="font-heading font-bold text-primary mb-2.5 text-lg md:text-xl">{v.label}</h4>
            <p className="text-[14.5px] text-primary/65 leading-[1.7] pr-10">{v.desc}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

// ============= Core Values Wheel — interactive circular dial =============
// Order matches `values` array: Intentionality, Innovation, Integrity, Excellence, Mentorship, Community, Legacy
const WHEEL_SEGMENTS = [
  { fill: "#0a1e3f", stroke: "#0a0e1a", text: "#ffffff" }, // Intentionality — deep navy
  { fill: "#0aa5b8", stroke: "#0a0e1a", text: "#ffffff" }, // Innovation — electric teal
  { fill: "#ffffff", stroke: "#d4af37", text: "#0a0e1a" }, // Integrity — white w/ gold border
  { fill: "#d4a017", stroke: "#0a0e1a", text: "#0a0e1a" }, // Excellence — rich gold/amber
  { fill: "#a0612c", stroke: "#0a0e1a", text: "#ffffff" }, // Mentorship — warm copper
  { fill: "#3a7d5c", stroke: "#0a0e1a", text: "#ffffff" }, // Community — soft forest green
  { fill: "#5b1a3a", stroke: "#0a0e1a", text: "#ffffff" }, // Legacy — deep burgundy
];

const polar = (cx: number, cy: number, r: number, deg: number) => {
  const a = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
};

const sectorPath = (
  cx: number,
  cy: number,
  rO: number,
  rI: number,
  a1: number,
  a2: number
) => {
  const p1 = polar(cx, cy, rO, a1);
  const p2 = polar(cx, cy, rO, a2);
  const p3 = polar(cx, cy, rI, a2);
  const p4 = polar(cx, cy, rI, a1);
  const large = a2 - a1 > 180 ? 1 : 0;
  return `M${p1.x} ${p1.y} A${rO} ${rO} 0 ${large} 1 ${p2.x} ${p2.y} L${p3.x} ${p3.y} A${rI} ${rI} 0 ${large} 0 ${p4.x} ${p4.y} Z`;
};


const ValuesWheel = ({
  values,
}: {
  values: { label: string; icon: typeof Target; desc: string }[];
}) => {
  const n = values.length;
  const step = 360 / n;
  const [rotation, setRotation] = useState(0);
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const introDone = useRef(false);

  // Dramatic intro: one full rotation, then settle
  useEffect(() => {
    if (introDone.current) return;
    introDone.current = true;
    const id = window.setTimeout(() => setRotation(360), 50);
    return () => window.clearTimeout(id);
  }, []);

  const lockTo = (i: number) => {
    setActive(i);
    const targetBase = -i * step; // bring segment i center to top
    // pick nearest equivalent to current rotation
    const cur = rotation;
    const diff = ((((targetBase - cur) % 360) + 540) % 360) - 180;
    setRotation(cur + diff);
  };

  const display = hover !== null ? hover : active;
  const cx = 300;
  const cy = 300;
  const rO = 285;
  const rI = 165;
  const rLabel = 248;

  return (
    <div className="relative w-full">
      {/* Desktop: SVG wheel */}
      <div className="hidden md:flex relative items-center justify-center mx-auto" style={{ maxWidth: 640 }}>
        {/* gold ambience */}
        <div aria-hidden className="absolute inset-0 -m-12 rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.14),transparent_65%)] blur-2xl pointer-events-none" />
        <motion.svg
          viewBox="0 0 600 600"
          width="100%"
          className="relative drop-shadow-[0_30px_60px_rgba(10,14,26,0.25)]"
          style={{ maxWidth: 600 }}
        >
          <motion.g
            animate={{ rotate: rotation }}
            transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "300px 300px" }}
          >
            {values.map((v, i) => {
              const a1 = i * step - step / 2;
              const a2 = i * step + step / 2;
              const isActive = i === display;
              const seg = WHEEL_SEGMENTS[i % WHEEL_SEGMENTS.length];
              const labelPos = polar(cx, cy, rLabel, i * step);
              return (
                <g key={v.label}>
                  <motion.path
                    d={sectorPath(cx, cy, rO, rI, a1, a2)}
                    fill={seg.fill}
                    stroke={seg.stroke}
                    strokeWidth={seg.stroke === "#d4af37" ? 3 : 2}
                    style={{ cursor: "pointer", transformOrigin: "300px 300px" }}
                    animate={{
                      opacity: isActive ? 1 : 0.78,
                      scale: isActive ? 1.035 : 1,
                      filter: isActive
                        ? "drop-shadow(0 0 18px rgba(212,175,55,0.7)) brightness(1.1)"
                        : "drop-shadow(0 0 0 rgba(0,0,0,0))",
                    }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => lockTo(i)}
                  />
                  {/* Counter-rotated upright label — always reads correctly */}
                  <motion.text
                    x={labelPos.x}
                    y={labelPos.y}
                    fill={seg.text}
                    fontSize={13}
                    fontWeight={700}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="font-heading"
                    animate={{ rotate: -rotation }}
                    transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      transformOrigin: `${labelPos.x}px ${labelPos.y}px`,
                      pointerEvents: "none",
                      textTransform: "uppercase",
                      letterSpacing: "0.22em",
                    }}
                  >
                    {v.label}
                  </motion.text>
                </g>
              );
            })}
            {/* outer hairline */}
            <circle cx={cx} cy={cy} r={rO + 4} fill="none" stroke="rgba(212,175,55,0.45)" strokeWidth={1} />
            <circle cx={cx} cy={cy} r={rI - 4} fill="none" stroke="rgba(212,175,55,0.45)" strokeWidth={1} />
            {/* tick marker at top to signal locked segment */}
            <circle cx={cx} cy={cy - rO - 16} r={5} fill="#d4af37" />
          </motion.g>
          {/* inner disc (does not rotate) */}
          <circle cx={cx} cy={cy} r={rI - 8} fill="#0a0e1a" />
          <circle cx={cx} cy={cy} r={rI - 8} fill="none" stroke="rgba(212,175,55,0.5)" strokeWidth={1} />
        </motion.svg>
        {/* Center living lens — absolutely positioned over inner disc */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center px-10 max-w-[260px]">
            <motion.div
              key={display}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <p className="editorial-label text-accent mb-3 text-[10px] tracking-[0.3em]">VALUE {String(display + 1).padStart(2, "0")}</p>
              <h3 className="font-heading text-2xl lg:text-[28px] text-white mb-3 leading-[1.1]">
                {values[display].label}
              </h3>
              <p className="text-[12.5px] text-white/70 leading-[1.55]">
                {values[display].desc}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile: stacked interactive list */}
      <div className="md:hidden space-y-2.5">
        {values.map((v, i) => {
          const isActive = i === active;
          const seg = WHEEL_SEGMENTS[i % WHEEL_SEGMENTS.length];
          const bg = seg.fill;
          const accentBar = seg.fill === "#ffffff" ? "#d4af37" : seg.fill;
          return (
            <motion.button
              key={v.label}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="w-full text-left rounded-xl overflow-hidden border border-primary/10 bg-white"
              style={{ boxShadow: isActive ? `0 12px 32px -14px ${accentBar}66` : undefined }}
            >
              <div className="flex items-stretch">
                <div
                  className="w-1.5 shrink-0"
                  style={{ background: accentBar, boxShadow: isActive ? `0 0 14px ${accentBar}` : undefined }}
                />
                <div className="flex-1 px-5 py-4">
                  <p
                    className="editorial-label text-[10px] tracking-[0.3em] mb-1"
                    style={{ color: accentBar }}
                  >
                    VALUE {String(i + 1).padStart(2, "0")}
                  </p>
                  <h4 className="font-heading text-primary text-lg leading-tight font-bold">{v.label}</h4>
                  <motion.div
                    initial={false}
                    animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <p className="text-[13px] text-primary/70 leading-[1.6] pt-2">{v.desc}</p>
                  </motion.div>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

// ============= Architectural Pillar — 3D column with tooltip on hover =============
type StrategicPillar = (typeof strategicPillars)[number];
const ArchPillar = ({
  pillar,
  index,
  height,
}: {
  pillar: StrategicPillar;
  index: number;
  height: number;
}) => {
  const [hover, setHover] = useState(false);
  const Icon = pillar.icon;
  const shaftHeight = height - 90; // capital + base reserved
  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, delay: index * 0.25, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative flex flex-col items-center"
      style={{ width: 200 }}
    >
      {/* Floating tooltip card on hover */}
      <motion.div
        initial={false}
        animate={{
          opacity: hover ? 1 : 0,
          y: hover ? 0 : 10,
          pointerEvents: hover ? "auto" : "none",
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full w-[280px] z-30 rounded-xl bg-[#0a0e1a]/95 backdrop-blur border border-accent/40 shadow-[0_24px_60px_-20px_rgba(212,175,55,0.6)] p-5"
      >
        <p className="text-[13px] text-white/80 leading-[1.65] mb-3">{pillar.desc}</p>
        <Link
          to={pillar.link}
          className="inline-flex items-center gap-1.5 text-accent text-[13px] font-bold tracking-wide hover:text-accent/80 transition-colors"
        >
          {pillar.linkLabel} <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <span aria-hidden className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 rotate-45 bg-[#0a0e1a]/95 border-r border-b border-accent/40" />
      </motion.div>

      {/* Floating icon */}
      <motion.div
        animate={{ y: hover ? -4 : 0 }}
        transition={{ duration: 0.5 }}
        className="w-12 h-12 rounded-full bg-accent/15 border border-accent/50 flex items-center justify-center mb-4 shadow-[0_0_18px_rgba(212,175,55,0.35)]"
      >
        <Icon className="w-5 h-5 text-accent" />
      </motion.div>

      {/* Pillar name — inscription above capital */}
      <h3 className="font-heading font-bold text-accent text-[13px] lg:text-[14px] tracking-[0.32em] uppercase text-center mb-3 whitespace-nowrap drop-shadow-[0_0_10px_rgba(212,175,55,0.35)]">
        {pillar.title}
      </h3>

      {/* Column structure */}
      <div
        className="relative cursor-pointer"
        style={{ height, width: 160 }}
      >
        {/* Inner glow on hover */}
        <motion.div
          aria-hidden
          initial={false}
          animate={{ opacity: hover ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-x-2 inset-y-6 bg-[radial-gradient(ellipse_at_center,rgba(255,225,150,0.55),transparent_70%)] blur-2xl pointer-events-none"
        />

        {/* Capital (top) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[170px] h-[42px]">
          {/* abacus slab */}
          <div className="absolute top-0 left-0 right-0 h-3 rounded-sm bg-gradient-to-b from-[#f1e2b6] via-[#d4af37] to-[#a07d1f] shadow-[0_2px_0_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.4)]" />
          {/* echinus — decorative ornament */}
          <div className="absolute top-3 left-2 right-2 h-7 rounded-b-md bg-gradient-to-b from-[#d4b878] via-[#b89a3d] to-[#7a5a18] shadow-[inset_0_2px_4px_rgba(255,255,255,0.25),inset_0_-3px_6px_rgba(0,0,0,0.35)]">
            {/* fluting hint */}
            <div className="absolute inset-x-3 top-1 bottom-1 flex items-center justify-around">
              {Array.from({ length: 5 }).map((_, k) => (
                <span key={k} className="w-px h-full bg-black/25" />
              ))}
            </div>
          </div>
          {/* echinus to shaft taper */}
          <div className="absolute top-10 left-4 right-4 h-1.5 bg-gradient-to-b from-[#8a6a18] to-[#5a4012]" />
        </div>

        {/* Shaft */}
        <motion.div
          animate={{
            filter: hover
              ? "brightness(1.18) drop-shadow(0 0 24px rgba(212,175,55,0.55))"
              : "brightness(1) drop-shadow(0 0 0 rgba(0,0,0,0))",
          }}
          transition={{ duration: 0.5 }}
          className="absolute left-1/2 -translate-x-1/2 rounded-sm overflow-hidden"
          style={{
            top: 42,
            width: 130,
            height: shaftHeight,
            background:
              "linear-gradient(90deg, #5a4012 0%, #8a6a18 18%, #c9a961 38%, #ecd9a0 50%, #c9a961 62%, #8a6a18 82%, #4a3410 100%)",
            boxShadow:
              "inset 0 0 30px rgba(0,0,0,0.5), 0 30px 60px -25px rgba(0,0,0,0.7)",
          }}
        >
          {/* Vertical fluting */}
          <div className="absolute inset-y-0 inset-x-3 flex items-stretch justify-around">
            {Array.from({ length: 9 }).map((_, k) => (
              <span
                key={k}
                className="w-px"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, rgba(0,0,0,0.45) 8%, rgba(0,0,0,0.55) 92%, transparent)",
                }}
              />
            ))}
          </div>
          {/* Subtle highlight stripe */}
          <div
            aria-hidden
            className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[3px]"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(255,245,210,0.55), transparent)",
            }}
          />
        </motion.div>

        {/* Base/plinth */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180px]">
          {/* torus */}
          <div className="absolute bottom-6 left-3 right-3 h-3 rounded-md bg-gradient-to-b from-[#d4b878] via-[#b89a3d] to-[#7a5a18] shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_2px_4px_rgba(0,0,0,0.5)]" />
          {/* plinth slab */}
          <div className="relative h-8 rounded-sm bg-gradient-to-b from-[#c9a961] via-[#a07d1f] to-[#5a4012] shadow-[0_8px_16px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] flex items-center justify-center">
            <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-[#1a1206] truncate px-3">
              {pillar.linkLabel.replace("Explore ", "")}
            </span>
          </div>
          {/* contact shadow on ground */}
          <div aria-hidden className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[200px] h-3 bg-black/60 blur-md rounded-full" />
        </div>
      </div>
    </motion.div>
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

        {/* HERO → WHO WE ARE transition */}
        <div aria-hidden className="h-10 bg-gradient-to-b from-[#0a0e1a] to-white" />

        {/* WHO WE ARE — pure white + gold particle shimmer */}
        <section className="relative py-16 md:py-20 bg-white overflow-hidden">
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
                    <p className="editorial-label text-accent mb-4 tracking-[0.2em] text-base font-black">{c.label}</p>
                    <p className="text-primary/75 text-[15px] leading-[1.8]">{c.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* WHITE → DARK transition */}
        <div aria-hidden className="h-10 bg-gradient-to-b from-white to-[#0a0e1a]" />

        {/* VISION & MISSION — stacked horizontal bands */}
        <section className="relative bg-[#0a0e1a] py-16 md:py-20 overflow-hidden">
          <AmbientParticles count={10} className="opacity-40" />
          <div className="container mx-auto px-6 max-w-6xl relative space-y-16 md:space-y-20">
            {/* MISSION band — slides from left */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl bg-gradient-to-r from-[#0d1430] to-[#0a0e1a] border border-white/5 px-8 md:px-14 py-12 md:py-16"
            >
              <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-14 items-center">
                <div className="max-w-2xl">
                  <p className="editorial-label text-accent mb-5 tracking-[0.32em] text-[13px] font-bold relative -top-0.5">MISSION</p>
                  <p className="font-heading text-[17px] md:text-[22px] lg:text-[26px] text-white leading-[1.45] font-medium">
                    To build and steward an integrated, high-impact growth ecosystem that cultivates transformative leadership, strengthens institutions, and mobilises strategic capital.
                  </p>
                </div>
                {/* Circular image — floats right, overlaps band edge */}
                <div className="relative justify-self-center md:justify-self-end md:-mr-10 lg:-mr-20">
                  <div className="relative w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden ring-[3px] ring-accent shadow-[0_30px_60px_-15px_rgba(212,175,55,0.45),0_0_0_8px_rgba(10,14,26,1),0_0_0_9px_rgba(212,175,55,0.25)]">
                    <motion.img
                      src={missionBg}
                      alt="People in collaboration"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 6, ease: "easeOut" }}
                    />
                  </div>
                  <div aria-hidden className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.25),transparent_65%)] -m-6 blur-2xl pointer-events-none" />
                </div>
              </div>
            </motion.div>

            {/* Gold hairline divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "center" }}
              className="h-px max-w-3xl mx-auto bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_12px_rgba(212,175,55,0.35)]"
            />

            {/* VISION band — slides from right */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl bg-gradient-to-l from-[#0d1430] to-[#0a0e1a] border border-white/5 px-8 md:px-14 py-12 md:py-16"
            >
              <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-center">
                {/* Circular image — floats left, overlaps band edge */}
                <div className="relative justify-self-center md:justify-self-start md:-ml-10 lg:-ml-20 order-2 md:order-1">
                  <div className="relative w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden ring-[3px] ring-accent shadow-[0_30px_60px_-15px_rgba(212,175,55,0.45),0_0_0_8px_rgba(10,14,26,1),0_0_0_9px_rgba(212,175,55,0.25)]">
                    <motion.img
                      src={visionBg}
                      alt="Aerial cityscape at dawn"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 6, ease: "easeOut" }}
                    />
                  </div>
                  <div aria-hidden className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.25),transparent_65%)] -m-6 blur-2xl pointer-events-none" />
                </div>
                <div className="max-w-2xl order-1 md:order-2 md:text-right">
                  <p className="editorial-label text-accent mb-5 tracking-[0.32em] text-[13px] font-bold relative -top-0.5">VISION</p>
                  <p className="font-heading text-[17px] md:text-[22px] lg:text-[26px] text-white leading-[1.45] font-medium">
                    To shape a future where transformational leaders and resilient institutions drive sustainable prosperity and generational impact across nations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* DARK → WHITE transition into Core Values */}
        <div aria-hidden className="h-10 bg-gradient-to-b from-[#0a0e1a] to-white" />

        {/* CORE VALUES — interactive circular wheel on white */}
        <section className="relative py-16 md:py-20 bg-white overflow-hidden">
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06),transparent_65%)] pointer-events-none" />
          <div className="container mx-auto px-6 max-w-6xl relative">
            <ScrollReveal>
              <div className="text-center mb-14 md:mb-16">
                <p className="editorial-label text-accent mb-5 tracking-[0.3em] text-sm font-semibold">WHAT GUIDES US</p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-[1.1]">
                  Our <span className="text-gradient-gold">Core Values</span>
                </h2>
              </div>
            </ScrollReveal>
            <ValuesWheel values={values} />
          </div>
        </section>

        {/* WHITE → DARK transition */}
        <div aria-hidden className="h-10 bg-gradient-to-b from-white to-[#0a0e1a]" />



        {/* STRATEGIC PILLARS — accordion-style expandable layout */}
        <section className={`relative ${NAVY} py-16 md:py-20 overflow-hidden`}>
          <div aria-hidden className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.06] blur-[160px] pointer-events-none" />
          <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-14">
                <p className="editorial-label text-accent mb-5 tracking-[0.3em] text-sm font-semibold">OUR ARCHITECTURE</p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-gold leading-[1.05] tracking-[0.02em]">
                  The Strategic Pillars
                </h2>
                <p className="text-white/65 text-[16px] max-w-2xl mx-auto leading-[1.7] mt-5">
                  Three integrated pillars — a complete ecosystem for strategic growth.
                </p>
              </div>
            </ScrollReveal>

            <Accordion type="single" collapsible defaultValue="pillar-0" className="space-y-4">
              {strategicPillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <AccordionItem
                    key={p.title}
                    value={`pillar-${i}`}
                    className="group relative rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] data-[state=open]:bg-white/[0.06] data-[state=open]:border-accent/40 transition-all duration-500 overflow-hidden"
                  >
                    {/* Gold left accent bar — only when expanded */}
                    <span
                      aria-hidden
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent origin-top scale-y-0 group-data-[state=open]:scale-y-100 transition-transform duration-500 shadow-[0_0_18px_rgba(212,175,55,0.6)]"
                    />
                    <AccordionTrigger className="px-6 md:px-8 py-5 hover:no-underline">
                      <div className="flex items-center gap-5 text-left">
                        <div className="w-12 h-12 rounded-lg bg-accent/15 border border-accent/40 flex items-center justify-center shrink-0 group-data-[state=open]:bg-accent/25 transition-colors">
                          <Icon className="w-5 h-5 text-accent" />
                        </div>
                        <h3 className="font-heading text-xl md:text-2xl font-bold text-white tracking-tight">
                          {p.title}
                        </h3>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 md:px-8 pb-7">
                      <div className="md:pl-[68px]">
                        <p className="text-white/75 text-[15.5px] md:text-[16px] leading-[1.8] mb-6">
                          {p.desc}
                        </p>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="bg-transparent border-accent/50 text-accent hover:bg-accent hover:text-[#0a0e1a] hover:border-accent"
                        >
                          <Link to={p.link}>
                            {p.linkLabel} <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                          </Link>
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </section>



        {/* COMMITMENT & AKA-RB — redesigned columns */}
        <section className={`relative ${NAVY} py-14 md:py-20 overflow-hidden border-t border-white/5`}>
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.06] blur-[160px] pointer-events-none" />
          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              {/* Left: Commitment numbered cards */}
              <div>
                <ScrollReveal>
                  <p className="editorial-label text-accent mb-5 tracking-[0.2em] text-sm font-semibold">OUR COMMITMENT</p>
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-10 leading-[1.15]">
                    Built for clarity, structure, and momentum.
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
                    A framework that turn insights into desired outcomes
                  </h3>
                </ScrollReveal>
                <AkaTimeline steps={akaSteps} />
              </div>
            </div>
          </div>
        </section>


        {/* WHO IT'S FOR — staggered cards */}
        <section className={`relative ${NAVY} py-14 md:py-20 border-t border-white/5`}>
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
        <section className="py-16 md:py-20 bg-white">
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
                    <div className="w-full h-full rounded-full bg-primary/5 border-4 border-white" />
                  </motion.div>
                  <div className="absolute inset-[7px] rounded-full overflow-hidden border-4 border-white">
                    <img src={samuelPortrait.url} alt="Portrait of Dr Samuel Omenka" loading="lazy" decoding="async" className="w-full h-full object-cover object-top" />
                  </div>

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
        <section className={`relative ${NAVY} py-16 md:py-20 overflow-hidden`}>
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
        <section className={`relative ${NAVY} py-16 md:py-20 overflow-hidden border-t border-white/5`}>
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
