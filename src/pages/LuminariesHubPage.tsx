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
            <div className="absolute inset-0 bg-[hsl(224,50%,10%)] opacity-85" />
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(224,50%,8%)]/50 via-transparent to-[hsl(224,50%,8%)]/70" />
            <div className="relative z-10 max-w-3xl px-6">
              <ScrollReveal>
                <p className="editorial-label text-white/40 mb-6 tracking-[0.25em]">Strategic Pillar</p>
                <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
                  The <span className="text-gradient-gold italic">Luminaries Network</span>
                </h1>
                <div className="editorial-line mb-6" />
                <p className="text-white/50 text-lg max-w-xl leading-relaxed">
                  The relational and influence ecosystem of The Luminary Rise.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20 md:py-24 bg-white">
          <div className="container mx-auto px-6 max-w-3xl">
            <ScrollReveal>
              <p className="editorial-label text-accent mb-6">Overview</p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 leading-[1.2]">
                A Community Built on <span className="text-gradient-gold italic">Trust & Excellence</span>
              </h2>
              <div className="editorial-line mb-8" />
              <div className="space-y-5 text-muted-foreground text-[16px] leading-[1.9]">
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
            </ScrollReveal>
          </div>
        </section>

        {/* Member Access */}
        <section className="py-20 md:py-24 bg-white grain relative">
          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="editorial-label text-accent mb-6">Benefits</p>
                <h2 className="font-heading text-3xl font-bold text-foreground leading-[1.15]">
                  Members <span className="text-gradient-gold italic">Gain Access To</span>
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden max-w-3xl mx-auto">
              {accessPoints.map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 0.06}>
                  <div className="bg-card p-7 h-full flex items-start gap-4 group">
                    <div className="w-9 h-9 rounded-md bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition-colors duration-500">
                      <item.icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-[14px] font-medium text-foreground mt-1.5">{item.label}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-20 md:py-24 bg-white">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <ScrollReveal>
              <p className="editorial-label text-accent mb-6">Audience</p>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-10">Who It's For</h2>
              <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
                {whoItIsFor.map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-card rounded-md p-4 border border-border text-left">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-[14px] font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 md:py-28 bg-[#0a0e1a] overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.18] blur-[180px] pointer-events-none" />
          <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
            <p className="editorial-label text-accent mb-6 tracking-[0.2em] text-sm font-bold">JOIN US</p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">Interested in Joining the Network?</h2>
            <div className="editorial-line mx-auto mb-8 !bg-accent/40" />
            <p className="text-white/70 text-lg mb-12 leading-[1.8] max-w-xl mx-auto">Connect with us to learn more about membership in The Luminaries Network.</p>
            <Button asChild size="lg" className="bg-accent text-[#0a0e1a] hover:bg-accent hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] font-sans font-bold text-base px-10 py-7 rounded-md tracking-wide transition-shadow duration-500">
              <Link to="/contact">Get in Touch <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default LuminariesHubPage;
