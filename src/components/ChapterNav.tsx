import { useEffect, useState, useCallback, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

const chapters = [
  { id: "reality", label: "Reality" },
  { id: "evolve", label: "EVOLVE" },
  { id: "network", label: "Network" },
  { id: "impact", label: "Impact" },
];

const ChapterNav = () => {
  const [active, setActive] = useState<string>(() => {
    if (typeof window === "undefined") return "reality";
    const h = window.location.hash.replace("#", "");
    return chapters.find((c) => c.id === h)?.id ?? "reality";
  });
  const reduce = useReducedMotion();
  const buttonsRef = useRef<Array<HTMLButtonElement | null>>([]);

  const jump = useCallback(
    (id: string, opts?: { focus?: boolean }) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
      setActive(id);
      if (opts?.focus) {
        const idx = chapters.findIndex((c) => c.id === id);
        requestAnimationFrame(() => buttonsRef.current[idx]?.focus());
      }
    },
    [reduce]
  );

  // Deep-link on first load.
  useEffect(() => {
    const h = window.location.hash.replace("#", "");
    if (h && chapters.some((c) => c.id === h)) {
      // Wait for lazy sections to mount.
      const t = setTimeout(() => jump(h), 150);
      return () => clearTimeout(t);
    }
  }, [jump]);

  // React to back/forward hash changes.
  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace("#", "");
      if (h && chapters.some((c) => c.id === h)) jump(h);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [jump]);

  // Active chapter from intersection.
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const id = visible.target.id;
          setActive((prev) => {
            if (prev !== id) history.replaceState(null, "", `#${id}`);
            return id;
          });
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    chapters.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, idx: number) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      const next = (idx + 1) % chapters.length;
      jump(chapters[next].id, { focus: true });
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = (idx - 1 + chapters.length) % chapters.length;
      jump(chapters[prev].id, { focus: true });
    } else if (e.key === "Home") {
      e.preventDefault();
      jump(chapters[0].id, { focus: true });
    } else if (e.key === "End") {
      e.preventDefault();
      jump(chapters[chapters.length - 1].id, { focus: true });
    }
  };

  return (
    <nav
      aria-label="Chapter navigation"
      role="navigation"
      className="fixed left-3 md:left-6 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col gap-4"
    >
      <ul role="list" className="flex flex-col gap-4">
        {chapters.map((c, i) => {
          const isActive = active === c.id;
          return (
            <li key={c.id}>
              <button
                ref={(el) => (buttonsRef.current[i] = el)}
                onClick={() => jump(c.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className="group flex items-center gap-3 text-left rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(224,55%,5%)] px-1 py-1"
                aria-label={`Jump to chapter: ${c.label}`}
                aria-current={isActive ? "true" : undefined}
              >
                <motion.span
                  aria-hidden="true"
                  className="block rounded-full"
                  animate={{
                    width: isActive ? 28 : 10,
                    height: 2,
                    backgroundColor: isActive ? "hsl(40 65% 55%)" : "hsl(0 0% 100% / 0.35)",
                  }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                />
                <span
                  className={`editorial-label text-[10px] tracking-[0.25em] transition-all duration-300 ${
                    isActive
                      ? "text-accent opacity-100"
                      : "text-white/50 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                  }`}
                >
                  {c.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ChapterNav;
