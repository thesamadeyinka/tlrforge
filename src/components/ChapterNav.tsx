import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const chapters = [
  { id: "reality", label: "Reality" },
  { id: "evolve", label: "EVOLVE" },
  { id: "network", label: "Network" },
  { id: "impact", label: "Impact" },
];

const ChapterNav = () => {
  const [active, setActive] = useState("reality");
  const reduce = useReducedMotion();

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    chapters.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Chapter navigation"
      className="fixed left-3 md:left-6 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col gap-4"
    >
      {chapters.map((c) => {
        const isActive = active === c.id;
        return (
          <button
            key={c.id}
            onClick={() => jump(c.id)}
            className="group flex items-center gap-3 text-left"
            aria-label={`Jump to ${c.label}`}
            aria-current={isActive ? "true" : undefined}
          >
            <motion.span
              className="block rounded-full"
              animate={{
                width: isActive ? 28 : 10,
                height: 2,
                backgroundColor: isActive ? "hsl(40 65% 55%)" : "hsl(0 0% 100% / 0.3)",
              }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            />
            <span
              className={`editorial-label text-[10px] tracking-[0.25em] transition-all duration-300 ${
                isActive ? "text-accent opacity-100" : "text-white/40 opacity-0 group-hover:opacity-100"
              }`}
            >
              {c.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default ChapterNav;
