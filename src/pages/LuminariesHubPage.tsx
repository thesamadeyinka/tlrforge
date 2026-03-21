import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { Network, Users, Briefcase, Globe, MessageSquare, Shield, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import patternBg from "@/assets/pattern-bg.jpg";

const accessPoints = [
  { icon: Shield, label: "High-trust relationships" },
  { icon: Globe, label: "Cross-sector opportunities" },
  { icon: Users, label: "Strategic introductions" },
  { icon: MessageSquare, label: "Knowledge exchange platforms" },
  { icon: Briefcase, label: "Exclusive briefings and leadership dialogues" },
];

const whoItIsFor = [
  "High-capacity leaders and professionals",
  "Founders and entrepreneurs building with integrity",
  "Senior executives and policy influencers",
  "Value-driven organisations committed to excellence",
];

const LuminariesHubPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />

        {/* Hero */}
        <section className="relative pt-16">
          <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            <img src={patternBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 gradient-radiant opacity-90" />
            <div className="relative z-10 text-center px-4">
              <ScrollReveal>
                <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
                  The <span className="text-gradient-gold">Luminaries Hub</span>
                </h1>
                <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                  The relational and influence ecosystem of The Luminary Rise.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  A Community Built on <span className="text-gradient-gold">Trust & Excellence</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The Luminaries Network is an invitation-only community of high-capacity leaders, professionals, founders, executives, policy influencers, and value-driven organisations committed to growth with integrity and excellence.
                  </p>
                  <p>
                    The Network fosters strategic collaboration, curated partnerships, executive roundtables, thought leadership forums, and peer-to-peer accountability.
                  </p>
                  <p>
                    The Luminaries Network is built on the conviction that transformation accelerates in the right environment.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Member Access */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 max-w-4xl">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
                Members <span className="text-gradient-gold">Gain Access To</span>
              </h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {accessPoints.map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 0.08}>
                  <div className="bg-background rounded-2xl p-6 border border-border h-full flex items-start gap-4 hover:border-accent/30 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-foreground mt-2">{item.label}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-8">Who It's For</h2>
              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {whoItIsFor.map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-secondary rounded-xl p-4 border border-border text-left">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 gradient-gold">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-accent-foreground mb-4">
              Interested in Joining the Network?
            </h2>
            <p className="text-accent-foreground/80 mb-8">Connect with us to learn more about membership in The Luminaries Hub.</p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold px-8 py-6">
              <Link to="/contact">Get in Touch <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default LuminariesHubPage;
