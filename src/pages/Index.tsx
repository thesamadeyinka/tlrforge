import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PhilosophySection from "@/components/PhilosophySection";
import ProgrammesSection from "@/components/ProgrammesSection";
import ValuePropSection from "@/components/ValuePropSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <PhilosophySection />
      <ProgrammesSection />
      <ValuePropSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
