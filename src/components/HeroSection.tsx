import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef, lazy, Suspense } from "react";
import { Link } from "react-router-dom";

const AmbientParticles = lazy(() => import("@/components/AmbientParticles"));

const slides = [
  {
    heading: (
      <>
        Welcome to
        <br />
        <span className="text-gradient-gold">The Luminary Rise</span>
      </>
    ),
    description: "Your home for Transformational Growth.",
  },
  {
    heading: (
      <span className="whitespace-nowrap">
        Illuminate <span className="text-gradient-gold">Transform</span> Rise
      </span>
    ),
    description:
      "A premier platform for transformational growth where emerging leaders, professionals, and organisations access the knowledge, tools, and support needed to rise with clarity, competence, and character.",
  },
  {
    heading: (
      <>
        Rise with <span className="text-gradient-gold">Purpose</span>
      </>
    ),
    description:
      "Develop the clarity, competence, and character to thrive in every season of leadership.",
  },
];

const SLIDE_INTERVAL = 8000;
const SWIPE_THRESHOLD = 50;

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, SLIDE_INTERVAL);
  }, [next]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const dx = e.changedTouches[0].clientX - touchStart.current.x;
    const dy = e.changedTouches[0].clientY - touchStart.current.y;
    if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next(); else prev();
      resetTimer();
    }
    touchStart.current = null;
  }, [next, prev, resetTimer]);

  const slide = slides[current];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Dark elegant background with ambient particles */}
      <div className="absolute inset-0 bg-[hsl(224,50%,8%)]" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(224,50%,8%)]/60 via-transparent to-[hsl(224,50%,8%)]/90" />
        <Suspense fallback={null}>
          <AmbientParticles count={20} />
        </Suspense>
      </div>

      {/* Soft ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 py-24 relative z-10 max-w-3xl">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <h1 className="font-heading text-3xl md:text-5xl lg:text-[4.5rem] font-bold text-white mb-8 leading-[1.1]">
              {slide.heading}
            </h1>

            <p className="text-base md:text-lg text-white/70 mb-6 max-w-xl leading-relaxed">
              {slide.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="flex gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); resetTimer(); }}
              className="relative h-[3px] rounded-full overflow-hidden transition-all duration-500"
              style={{ width: i === current ? 40 : 24 }}
              aria-label={`Go to slide ${i + 1}`}
            >
              <div className="absolute inset-0 bg-white/20" />
              {i === current && (
                <motion.div
                  className="absolute inset-0 bg-accent rounded-full origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: SLIDE_INTERVAL / 1000, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex items-center gap-3">
          <span className="text-sm font-sans font-medium text-white/60 tracking-wide">Ready to Rise?</span>
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90 font-sans font-semibold text-[11px] px-4 py-2 rounded-md tracking-wide transition-colors duration-300"
          >
            Start Now
          </Link>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
