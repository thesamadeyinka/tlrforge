import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";
import EventsSection from "@/components/EventsSection";
import EvolveFeatureSection from "@/components/EvolveFeatureSection";
import WholePersonSection from "@/components/WholePersonSection";
import ValuePropSection from "@/components/ValuePropSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <PillarsSection />
        <EventsSection />
        <EvolveFeatureSection />
        <WholePersonSection />
        <ValuePropSection />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
