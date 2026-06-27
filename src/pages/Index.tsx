import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollProgress from "@/components/ScrollProgress";
import ChapterNav from "@/components/ChapterNav";
import Chapter from "@/components/Chapter";

const AboutSection = lazy(() => import("@/components/AboutSection"));
const PillarsSection = lazy(() => import("@/components/PillarsSection"));
const EventsSection = lazy(() => import("@/components/EventsSection"));
const EvolveFeatureSection = lazy(() => import("@/components/EvolveFeatureSection"));
const WholePersonSection = lazy(() => import("@/components/WholePersonSection"));
const ValuePropSection = lazy(() => import("@/components/ValuePropSection"));
const AnimatedGradientBg = lazy(() => import("@/components/AnimatedGradientBg"));

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen relative bg-[hsl(224,55%,6%)]">
        <Suspense fallback={null}>
          <AnimatedGradientBg />
        </Suspense>
        <ScrollProgress />
        <ChapterNav />
        <Header />

        {/* 1 — Hero / Reality */}
        <section id="reality" className="scroll-mt-20">
          <HeroSection />
        </section>

        {/* 2 — Ecosystem */}
        <Suspense fallback={<div className="py-28" />}>
          <AboutSection />
        </Suspense>

        {/* 3 — Pillars / Network */}
        <Chapter id="network">
          <Suspense fallback={<div className="py-28" />}>
            <PillarsSection />
          </Suspense>
        </Chapter>

        {/* 4 — Events */}
        <Suspense fallback={<div className="py-28" />}>
          <EventsSection />
        </Suspense>

        {/* 5 — EVOLVE */}
        <Chapter id="evolve">
          <Suspense fallback={<div className="py-28" />}>
            <EvolveFeatureSection />
          </Suspense>
        </Chapter>

        {/* 6 — Our Approach */}
        <Suspense fallback={<div className="py-28" />}>
          <WholePersonSection />
        </Suspense>

        {/* 7 — Our Promise / Impact */}
        <Chapter id="impact">
          <Suspense fallback={<div className="py-28" />}>
            <ValuePropSection />
          </Suspense>
        </Chapter>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
