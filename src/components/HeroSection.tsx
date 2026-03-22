import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const slides = [
  {
    label: null,
    heading: (
      <>
        Welcome to{" "}
        <span className="text-gradient-gold">The Luminary Rise</span>
      </>
    ),
    description:
      "Your platform for Transformational Growth. Where emerging leaders, professionals, and organisations access the knowledge, tools, and support needed to rise.",
  },
  {
    label: null,
    heading: (
      <>
        Illuminate Transform{" "}
        <span className="text-gradient-gold">Rise</span>
      </>
    ),
    description:
      "A premier platform for transformational growth where emerging leaders, professionals, and organisations access the knowledge, tools, and support needed to rise with clarity, competence, and character.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0">
        <motion.img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 bg-[hsl(224,50%,10%)] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(224,50%,8%)]/60 via-transparent to-[hsl(224,50%,8%)]/90" />
      </div>

      {/* Soft ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 py-24 relative z-10 max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <h1 className="font-heading text-4xl md:text-6xl lg:text-[5rem] font-bold text-white mb-8 leading-[1.1]">
              {slide.heading}
            </h1>

            <div className="editorial-line mb-8" />

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
              onClick={() => setCurrent(i)}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                i === current ? "w-10 bg-accent" : "w-6 bg-white/20 hover:bg-white/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
