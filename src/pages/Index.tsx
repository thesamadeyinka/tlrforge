import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollProgress from "@/components/ScrollProgress";
import ChapterNav from "@/components/ChapterNav";
import Chapter from "@/components/Chapter";

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

        {/* Chapter 1 — Reality */}
        <section id="reality" className="scroll-mt-20">
          <HeroSection />
        </section>

        {/* Chapter 2 — EVOLVE */}
        <Chapter id="evolve">
          <Suspense fallback={<div className="py-28" />}>
            <EvolveFeatureSection />
          </Suspense>
        </Chapter>

        <Suspense fallback={<div className="py-28" />}>
          <EventsSection />
        </Suspense>

        {/* Chapter 3 — Network (pillars incl. The Luminaries Network) */}
        <Chapter id="network">
          <Suspense fallback={<div className="py-28" />}>
            <PillarsSection />
          </Suspense>
        </Chapter>

        <Suspense fallback={<div className="py-28" />}>
          <WholePersonSection />
        </Suspense>

        {/* Chapter 4 — Impact (the climax) */}
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
