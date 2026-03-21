import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { BadgeDollarSign, TrendingUp, Handshake, Building2, Target, ShieldCheck, ArrowRight, CheckCircle } from "lucide-react";
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
            <div className="absolute inset-0 gradient-radiant opacity-90" />
            <div className="relative z-10 text-center px-4">
              <ScrollReveal>
                <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
                  Amplify <span className="text-gradient-gold">Impact Fund</span>
                </h1>
                <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                  The catalytic capital arm of The Luminary Rise.
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
                  Supporting Vision <span className="text-gradient-gold">With Resources</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
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
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 max-w-4xl">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
                What AIF <span className="text-gradient-gold">Focuses On</span>
              </h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {focusAreas.map((item, i) => (
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

        {/* Governance */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <ScrollReveal>
              <div className="bg-secondary rounded-3xl p-8 md:p-12 border border-border max-w-3xl mx-auto text-center">
                <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Strong Governance & Accountability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AMPLIFY operates with strong governance, accountability, and measurable impact standards, ensuring that capital is deployed responsibly and sustainably. Every investment is aligned with disciplined growth frameworks and designed for lasting, generational impact.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 gradient-gold">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-accent-foreground mb-4">
              Partner With Us
            </h2>
            <p className="text-accent-foreground/80 mb-8">Learn more about how Amplify Impact Fund can support your vision and growth journey.</p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold px-8 py-6">
              <Link to="/contact">Contact Us <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default AmplifyFundPage;
