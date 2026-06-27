import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import careerImg from "@/assets/events/career-development.jpg";
import businessImg from "@/assets/events/business-mastery.jpg";
import financeImg from "@/assets/events/finance-academy.jpg";
import wealthImg from "@/assets/events/wealth-mastery.jpg";
import relationshipImg from "@/assets/events/relationship-mastery.jpg";
import leadershipImg from "@/assets/events/leadership-essentials.jpg";

const events = [
  { title: "TLR Career Development", desc: "Accelerate your professional trajectory with clarity and strategic positioning.", image: careerImg, slug: "career-development", tag: "Career" },
  { title: "TLR Business Mastery", desc: "Build, scale, and sustain impactful businesses with proven frameworks.", image: businessImg, slug: "business-mastery", tag: "Business" },
  { title: "TLR Finance Academy", desc: "Master financial intelligence, budgeting, and investment fundamentals.", image: financeImg, slug: "finance-academy", tag: "Finance" },
  { title: "TLR Wealth Mastery", desc: "Create generational wealth through strategic resource allocation.", image: wealthImg, slug: "wealth-mastery", tag: "Wealth" },
  { title: "TLR Relationship Mastery", desc: "Build the relational capital that accelerates personal and professional growth.", image: relationshipImg, slug: "relationship-mastery", tag: "Relationships" },
  { title: "TLR Leadership Essentials", desc: "Develop the core competencies every transformational leader needs.", image: leadershipImg, slug: "leadership-essentials", tag: "Leadership" },
];

const AUTOPLAY_MS = 4500;

const EventsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", containScroll: false });
  const [selected, setSelected] = useState(0);
  const [autoplayKey, setAutoplayKey] = useState(0);
  const [paused, setPaused] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi || paused) return;
    const id = setInterval(() => emblaApi.scrollNext(), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [emblaApi, paused, autoplayKey]);

  const resetTimer = () => setAutoplayKey((k) => k + 1);

  const prev = () => { emblaApi?.scrollPrev(); resetTimer(); };
  const next = () => { emblaApi?.scrollNext(); resetTimer(); };
  const goTo = (i: number) => { emblaApi?.scrollTo(i); resetTimer(); };

  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden bg-[hsl(224,55%,6%)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Seamless top + bottom fades */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[hsl(224,55%,6%)] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[hsl(224,55%,6%)] to-transparent pointer-events-none z-10" />

      {/* Stage spotlight glow from below */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[900px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, hsl(40 65% 50% / 0.18) 0%, transparent 65%)", filter: "blur(40px)" }}
      />

      <div className="relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div className="max-w-xl">
                <h3 className="editorial-label text-accent mb-4">Events</h3>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-5 leading-[1.15]">
                  Explore the Lineup
                </h2>
                <div className="editorial-line mb-5" />
                <p className="text-white/60 text-[17px] leading-[1.8]">
                  Events for Transformational Growth
                </p>
              </div>
              <div className="hidden md:flex items-center gap-3">
                <button
                  aria-label="Previous event"
                  onClick={prev}
                  className="w-11 h-11 rounded-full bg-white/[0.06] border border-white/15 text-white flex items-center justify-center hover:bg-accent/15 hover:border-accent/50 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  aria-label="Next event"
                  onClick={next}
                  className="w-11 h-11 rounded-full bg-white/[0.06] border border-white/15 text-white flex items-center justify-center hover:bg-accent/15 hover:border-accent/50 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Embla carousel — center-aligned with adjacent peeking cards */}
        <div className="overflow-hidden" ref={emblaRef} aria-roledescription="carousel" aria-label="Events">
          <div className="flex touch-pan-y">
            {events.map((event, i) => {
              const isActive = i === selected;
              return (
                <div
                  key={event.slug}
                  className="flex-[0_0_82%] sm:flex-[0_0_60%] md:flex-[0_0_48%] lg:flex-[0_0_42%] min-w-0 pl-4 sm:pl-6"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${events.length}: ${event.title}`}
                >
                  <motion.div
                    animate={{ scale: isActive ? 1 : 0.88, opacity: isActive ? 1 : 0.45 }}
                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    className="aspect-[3/4] rounded-3xl relative overflow-hidden border border-white/10"
                  >
                    <Link to={`/events/${event.slug}`} className="block w-full h-full" tabIndex={isActive ? 0 : -1}>
                      {/* Ken Burns only when active */}
                      <motion.div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${event.image})` }}
                        animate={isActive ? { scale: [1, 1.12], x: [0, -15] } : { scale: 1, x: 0 }}
                        transition={isActive ? { duration: 8, ease: "linear" } : { duration: 0.6 }}
                        aria-hidden
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(224,55%,4%)] via-[hsl(224,55%,4%)]/50 to-transparent" />

                      {/* Top availability pill — pulses on activation */}
                      <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={isActive ? "active" : "idle"}
                            initial={isActive ? { scale: 0.9, opacity: 0.6 } : false}
                            animate={isActive ? { scale: [0.9, 1.06, 1], opacity: 1 } : { opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
                          >
                            <Calendar className="w-3.5 h-3.5 text-white" />
                            <span className="text-[11px] font-sans font-semibold tracking-[0.18em] uppercase text-white">
                              {event.tag}
                            </span>
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      {/* Title + desc — slide up on activation */}
                      <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10 text-center">
                        <AnimatePresence mode="wait">
                          {isActive && (
                            <motion.div
                              key="content"
                              initial={{ y: 24, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: 12, opacity: 0 }}
                              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                            >
                              <h4 className="font-heading font-bold text-white mb-3 text-2xl md:text-[30px] leading-[1.15]">
                                {event.title}
                              </h4>
                              <p className="text-[14px] text-white/85 leading-[1.7] max-w-[92%] mx-auto text-center">
                                {event.desc}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Gold dash dot indicators */}
        <div className="flex justify-center items-center gap-2 mt-10" role="tablist" aria-label="Event slide indicators">
          {events.map((e, i) => {
            const isActive = i === selected;
            return (
              <button
                key={e.slug}
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to ${e.title}`}
                onClick={() => goTo(i)}
                className="h-[3px] rounded-full transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(224,55%,6%)]"
                style={{
                  width: isActive ? 32 : 16,
                  backgroundColor: isActive ? "hsl(40 65% 55%)" : "hsl(0 0% 100% / 0.2)",
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
