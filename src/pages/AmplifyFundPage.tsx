import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { BadgeDollarSign, TrendingUp, Handshake, Building2, Target, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import patternBg from "@/assets/pattern-bg.jpg";

const focusAreas = [
  { icon: TrendingUp, label: "Growth grants for high-impact initiatives" },
  { icon: Target, label: "Strategic funding for scalable ventures" },
  { icon: Building2, label: "Business loans aligned with disciplined growth frameworks" },
  { icon: Handshake, label: "Enterprise support for alumni and vetted partners" },
  { icon: ShieldCheck, label: "Impact-driven capital deployment" },
];

const AmplifyFundPage = () => {
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
                  Amplify <span className="text-gradient-gold italic">Impact Fund</span>
                </h1>
                <div className="editorial-line mb-6" />
                <p className="text-white/50 text-lg max-w-xl leading-relaxed">
                  The catalytic capital arm of The Luminary Rise.
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
                Supporting Vision <span className="text-gradient-gold italic">With Resources</span>
              </h2>
              <div className="editorial-line mb-8" />
              <div className="space-y-5 text-muted-foreground text-[16px] leading-[1.9]">
                <p>
                  Amplify Impact Fund (AIF) is designed to support vision with resources, providing structured access to growth-enabling capital through grants, venture support, development funding, and strategic business loans.
                </p>
                <p>
                  It exists to ensure that clarity and competence are not limited by a lack of capital.
                </p>
                <p>
                  AIF is not merely a funding vehicle but a disciplined capital partnership designed to multiply vision responsibly.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="py-20 md:py-24 bg-white grain relative">
          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="editorial-label text-accent mb-6">Focus Areas</p>
                <h2 className="font-heading text-3xl font-bold text-foreground leading-[1.15]">
                  What AIF <span className="text-gradient-gold italic">Focuses On</span>
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden max-w-3xl mx-auto">
              {focusAreas.map((item, i) => (
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

        {/* Governance */}
        <section className="py-20 md:py-24 bg-white">
          <div className="container mx-auto px-6 max-w-3xl">
            <ScrollReveal>
              <div className="bg-card rounded-lg border border-border p-10 md:p-14 text-center">
                <div className="w-11 h-11 rounded-md bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                </div>
                <p className="editorial-label text-accent mb-4">Governance</p>
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Strong Governance & Accountability</h3>
                <p className="text-muted-foreground leading-[1.9] text-[15px] max-w-lg mx-auto">
                  AMPLIFY operates with strong governance, accountability, and measurable impact standards, ensuring that capital is deployed responsibly and sustainably. Every investment is aligned with disciplined growth frameworks and designed for lasting, generational impact.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 md:py-28 bg-[#0a0e1a] overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.18] blur-[180px] pointer-events-none" />
          <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
            <p className="editorial-label text-accent mb-6 tracking-[0.2em] text-sm font-bold">PARTNER</p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">Partner With Us</h2>
            <div className="editorial-line mx-auto mb-8 !bg-accent/40" />
            <p className="text-white/70 text-lg mb-12 leading-[1.8] max-w-xl mx-auto">Learn more about how Amplify Impact Fund can support your vision and growth journey.</p>
            <Button asChild size="lg" className="bg-accent text-[#0a0e1a] hover:bg-accent hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] font-sans font-bold text-base px-10 py-7 rounded-md tracking-wide transition-shadow duration-500">
              <Link to="/contact">Contact Us <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default AmplifyFundPage;
