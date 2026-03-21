import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PhilosophySection from "@/components/PhilosophySection";
import ProgrammesSection from "@/components/ProgrammesSection";
import ValuePropSection from "@/components/ValuePropSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <AboutSection />
        <PhilosophySection />
        <ProgrammesSection />
        <ValuePropSection />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
