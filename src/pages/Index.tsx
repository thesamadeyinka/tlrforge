import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";
import EventsSection from "@/components/EventsSection";
import EvolveFeatureSection from "@/components/EvolveFeatureSection";
import WholePersonSection from "@/components/WholePersonSection";
import ValuePropSection from "@/components/ValuePropSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import AnimatedGradientBg from "@/components/AnimatedGradientBg";
import ParallaxWrapper from "@/components/ParallaxWrapper";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen relative">
        <AnimatedGradientBg />
        <Header />
        <HeroSection />
        <ParallaxWrapper speed={-0.1}>
          <PillarsSection />
        </ParallaxWrapper>
        <EventsSection />
        <EvolveFeatureSection />
        <ParallaxWrapper speed={-0.08}>
          <WholePersonSection />
        </ParallaxWrapper>
        <ValuePropSection />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
