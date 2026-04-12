import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const PillarsSection = lazy(() => import("@/components/PillarsSection"));
const EventsSection = lazy(() => import("@/components/EventsSection"));
const EvolveFeatureSection = lazy(() => import("@/components/EvolveFeatureSection"));
const WholePersonSection = lazy(() => import("@/components/WholePersonSection"));
const ValuePropSection = lazy(() => import("@/components/ValuePropSection"));
const AnimatedGradientBg = lazy(() => import("@/components/AnimatedGradientBg"));
const ParallaxWrapper = lazy(() => import("@/components/ParallaxWrapper"));

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen relative">
        <Suspense fallback={null}>
          <AnimatedGradientBg />
        </Suspense>
        <Header />
        <HeroSection />
        <Suspense fallback={<div className="py-28" />}>
          <ParallaxWrapper speed={-0.1}>
            <PillarsSection />
          </ParallaxWrapper>
        </Suspense>
        <Suspense fallback={<div className="py-28" />}>
          <EventsSection />
        </Suspense>
        <Suspense fallback={<div className="py-28" />}>
          <EvolveFeatureSection />
        </Suspense>
        <Suspense fallback={<div className="py-28" />}>
          <ParallaxWrapper speed={-0.08}>
            <WholePersonSection />
          </ParallaxWrapper>
        </Suspense>
        <Suspense fallback={<div className="py-28" />}>
          <ValuePropSection />
        </Suspense>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
