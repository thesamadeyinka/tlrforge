import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
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

const AUTO_MS = 4500;

const EventsSection = () => {
  const [active, setActive] = useState(0);
  const timerRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const advance = useCallback((dir: 1 | -1) => {
    setActive((i) => (i + dir + events.length) % events.length);
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setActive((i) => (i + 1) % events.length);
    }, AUTO_MS);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const go = (dir: 1 | -1) => {
    advance(dir);
    resetTimer();
  };

  const jump = (i: number) => {
    setActive(i);
    resetTimer();
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  // Visible neighbours
  const getOffset = (i: number) => {
    const n = events.length;
    let d = i - active;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  return (
    <section className="pt-10 pb-14 md:pt-12 md:pb-20 relative overflow-hidden bg-[hsl(224,55%,6%)]">
      {/* Seamless fades */}
      <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-[hsl(224,55%,5%)] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[hsl(224,55%,5%)] to-transparent z-10 pointer-events-none" />
      {/* Gold spotlight from below */}
      <div
        className="absolute inset-x-0 bottom-0 h-[60%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 100%, hsl(40 65% 50% / 0.18), transparent 70%)",
        }}
      />

      <div className="relative z-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-10 sticky top-16 md:top-20 z-30 py-4 bg-[hsl(224,55%,6%)]/85 backdrop-blur-md rounded-2xl">
              <h3 className="font-heading text-xl md:text-2xl font-bold text-accent mb-2">Events</h3>
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-white mb-3 leading-[1.15]">
                Explore the Lineup
              </h2>
              <div className="editorial-line mx-auto mb-3" />
              <p className="text-white/55 text-[15px] md:text-[17px] leading-[1.7]">Events for Transformational Growth</p>
            </div>
          </ScrollReveal>

          {/* Carousel stage */}
          <div
            className="relative h-[520px] md:h-[600px] flex items-center justify-center"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {events.map((event, i) => {
              const offset = getOffset(i);
              const abs = Math.abs(offset);
              if (abs > 2) return null;
              const isActive = offset === 0;
              const translate = offset * (isMobile() ? 78 : 62);
              const scale = isActive ? 1 : 0.82 - (abs - 1) * 0.05;
              const opacity = isActive ? 1 : abs === 1 ? 0.45 : 0.15;
              const z = 10 - abs;

              return (
                <motion.div
                  key={event.slug}
                  className="absolute top-0"
                  animate={{
                    x: `${translate}%`,
                    scale,
                    opacity,
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 22 }}
                  style={{ zIndex: z, width: "min(460px, 80vw)" }}
                >
                  <Link
                    to={`/events/${event.slug}`}
                    className="block aspect-[3/4] rounded-3xl relative overflow-hidden group
                      border border-white/10
                      shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]"
                    tabIndex={isActive ? 0 : -1}
                  >
                    {/* Background image with Ken Burns only when active */}
                    <motion.div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${event.image})` }}
                      animate={
                        isActive
                          ? { scale: [1, 1.12], y: [0, -8] }
                          : { scale: 1, y: 0 }
                      }
                      transition={
                        isActive
                          ? { duration: 8, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }
                          : { duration: 0.6 }
                      }
                      aria-hidden
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(224,55%,4%)]/95 via-[hsl(224,55%,6%)]/55 to-transparent" />

                    {/* Tag with pulse on activation */}
                    <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={isActive ? "active" : "idle"}
                          initial={isActive ? { scale: 0.9, opacity: 0.6 } : false}
                          animate={
                            isActive
                              ? { scale: [0.9, 1.08, 1], opacity: 1 }
                              : { scale: 1, opacity: 1 }
                          }
                          transition={{ duration: 0.7 }}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
                        >
                          <Calendar className="w-3.5 h-3.5 text-white" />
                          <span className="text-[11px] font-sans font-semibold tracking-[0.18em] uppercase text-white">
                            {event.tag}
                          </span>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Bottom content with upward reveal when active */}
                    <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9 text-center overflow-hidden">
                      <motion.h4
                        animate={isActive ? { y: 0, opacity: 1 } : { y: 12, opacity: 0.7 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="font-heading font-bold text-white mb-3 text-2xl md:text-[28px] leading-[1.15]"
                      >
                        {event.title}
                      </motion.h4>
                      <motion.p
                        animate={isActive ? { y: 0, opacity: 0.85 } : { y: 16, opacity: 0.4 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: isActive ? 0.08 : 0 }}
                        className="text-[14px] text-white leading-[1.7] max-w-[90%] mx-auto"
                      >
                        {event.desc}
                      </motion.p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}

            {/* Arrows */}
            <button
              aria-label="Previous"
              onClick={() => go(-1)}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/5 backdrop-blur-md border border-white/15 text-white flex items-center justify-center hover:bg-accent/20 hover:border-accent/40 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              aria-label="Next"
              onClick={() => go(1)}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/5 backdrop-blur-md border border-white/15 text-white flex items-center justify-center hover:bg-accent/20 hover:border-accent/40 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Gold dash dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {events.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => jump(i)}
                className={`h-[2px] transition-all duration-500 ${
                  i === active ? "w-10 bg-accent" : "w-5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function isMobile() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 768px)").matches;
}

export default EventsSection;
