import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";

const events = [
  {
    title: "TLR Career Development",
    desc: "Accelerate your professional trajectory with clarity and strategic positioning.",
    gradient: "from-sky-500/30 via-sky-700/20 to-primary/40",
    accent: "from-sky-400/40 to-sky-600/10",
    slug: "career-development",
    tag: "Career",
  },
  {
    title: "TLR Business Mastery",
    desc: "Build, scale, and sustain impactful businesses with proven frameworks.",
    gradient: "from-amber-500/30 via-amber-700/20 to-primary/40",
    accent: "from-amber-400/40 to-amber-600/10",
    slug: "business-mastery",
    tag: "Business",
  },
  {
    title: "TLR Finance Academy",
    desc: "Master financial intelligence, budgeting, and investment fundamentals.",
    gradient: "from-emerald-500/30 via-emerald-700/20 to-primary/40",
    accent: "from-emerald-400/40 to-emerald-600/10",
    slug: "finance-academy",
    tag: "Finance",
  },
  {
    title: "TLR Wealth Mastery",
    desc: "Create generational wealth through strategic resource allocation.",
    gradient: "from-violet-500/30 via-violet-700/20 to-primary/40",
    accent: "from-violet-400/40 to-violet-600/10",
    slug: "wealth-mastery",
    tag: "Wealth",
  },
  {
    title: "TLR Relationship Mastery",
    desc: "Build the relational capital that accelerates personal and professional growth.",
    gradient: "from-rose-500/30 via-rose-700/20 to-primary/40",
    accent: "from-rose-400/40 to-rose-600/10",
    slug: "relationship-mastery",
    tag: "Relationships",
  },
  {
    title: "TLR Leadership Essentials",
    desc: "Develop the core competencies every transformational leader needs.",
    gradient: "from-blue-500/30 via-blue-700/20 to-primary/40",
    accent: "from-blue-400/40 to-blue-600/10",
    slug: "leadership-essentials",
    tag: "Leadership",
  },
];

const EventsSection = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? 360;
    el.scrollBy({ left: dir * (cardWidth + 24), behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 bg-secondary relative grain overflow-hidden">
      <div className="relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div className="max-w-xl">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-accent mb-4">Events</h3>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-5 leading-[1.15]">
                  Explore the Lineup
                </h2>
                <div className="editorial-line mb-5" />
                <p className="text-muted-foreground text-[17px] leading-[1.8]">
                  Events for Transformational Growth
                </p>
              </div>
              <div className="hidden md:flex items-center gap-3">
                <button
                  aria-label="Scroll left"
                  onClick={() => scrollBy(-1)}
                  className="w-11 h-11 rounded-full bg-card border border-border text-foreground flex items-center justify-center hover:bg-accent/10 hover:border-accent/40 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  aria-label="Scroll right"
                  onClick={() => scrollBy(1)}
                  className="w-11 h-11 rounded-full bg-card border border-border text-foreground flex items-center justify-center hover:bg-accent/10 hover:border-accent/40 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Horizontal momentum scroller */}
        <ScrollReveal delay={0.1}>
          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 md:px-[max(1.5rem,calc((100vw-64rem)/2))] pb-6"
            style={{
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <style>{`
              [data-events-scroller]::-webkit-scrollbar { display: none; }
            `}</style>
            {events.map((event) => (
              <Link
                key={event.title}
                to={`/events/${event.slug}`}
                data-card
                className="snap-start shrink-0 w-[78vw] sm:w-[420px] md:w-[460px] aspect-[3/4] rounded-3xl
                  relative overflow-hidden group
                  border border-border/60 hover:border-accent/40
                  transition-all duration-700 hover:-translate-y-1"
              >
                {/* Gradient base */}
                <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient}`} />
                {/* Accent glow */}
                <div className={`absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl bg-gradient-to-br ${event.accent} opacity-70 group-hover:opacity-100 transition-opacity duration-700`} />
                {/* Dark overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
                {/* Subtle grain */}
                <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                  }}
                />

                {/* Top tag */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/15 backdrop-blur-md border border-background/20">
                    <Calendar className="w-3.5 h-3.5 text-primary-foreground" />
                    <span className="text-[11px] font-sans font-semibold tracking-[0.18em] uppercase text-primary-foreground">
                      {event.tag}
                    </span>
                  </div>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">
                  <h4 className="font-heading font-bold text-primary-foreground mb-3 text-2xl md:text-[28px] leading-[1.15]">
                    {event.title}
                  </h4>
                  <p className="text-[14px] text-primary-foreground/80 leading-[1.7] mb-5 max-w-[90%]">
                    {event.desc}
                  </p>
                  <div className="inline-flex items-center gap-2 text-accent text-[13px] font-sans font-semibold tracking-wide">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
            {/* trailing spacer for edge breathing */}
            <div className="shrink-0 w-2" aria-hidden />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EventsSection;
