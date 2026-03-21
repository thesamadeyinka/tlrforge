import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { Brain, Heart, Flame, BarChart3, Users, Wallet, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import patternBg from "@/assets/pattern-bg.jpg";

const pillars = [
  { label: "Mental Clarity", icon: Brain, desc: "Sharpened focus, critical thinking, and strategic decision-making. We train the mind to operate with precision under pressure." },
  { label: "Spiritual Alignment", icon: Flame, desc: "Finding your core purpose and operating from conviction. Alignment creates consistency even when motivation fades." },
  { label: "Emotional Resilience", icon: Heart, desc: "Developing the emotional intelligence to navigate relationships, setbacks, and leadership challenges with composure." },
  { label: "Strategic Thinking", icon: BarChart3, desc: "Systems-level thinking that turns insight into execution. Moving from reactive decision-making to intentional strategy." },
  { label: "Relational Intelligence", icon: Users, desc: "Building the relational capital that accelerates growth. Great leaders are great connectors." },
  { label: "Financial Wisdom", icon: Wallet, desc: "Mastering the principles of wealth creation, stewardship, and strategic resource allocation." },
];

const PhilosophyPage = () => {
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
                <p className="editorial-label text-white/40 mb-6 tracking-[0.25em]">Philosophy</p>
                <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
                  Our <span className="text-gradient-gold italic">Philosophy</span>
                </h1>
                <div className="editorial-line mb-6" />
                <p className="text-white/50 text-lg max-w-xl leading-relaxed">
                  Real change is not accidental. It is designed.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Core Belief */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-6 max-w-3xl">
            <ScrollReveal>
              <div className="text-center">
                <p className="editorial-label text-accent mb-6">Core Belief</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 leading-[1.15]">
                  Growth Precedes <span className="text-gradient-gold italic">Transformation</span>
                </h2>
                <div className="editorial-line mx-auto mb-8" />
                <div className="max-w-2xl mx-auto space-y-5 text-muted-foreground text-[16px] leading-[1.9]">
                  <p>
                    Growth is incremental — it adds to what exists. Transformation is fundamental — it changes what something <em>is</em>. While both are necessary, only transformation guarantees lasting change.
                  </p>
                  <p>
                    Our programmes are built around <strong className="text-foreground">structure, frameworks, disciplines, and accountability systems</strong> that produce measurable transformation across every dimension of life.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Whole Person Integration */}
        <section className="py-32 bg-secondary grain relative">
          <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="editorial-label text-accent mb-6">The Framework</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 leading-[1.15]">The Whole Person Integration</h2>
                <p className="text-muted-foreground max-w-md mx-auto leading-[1.8]">Six interconnected pillars — when one is neglected, all are weakened.</p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
              {pillars.map((p, i) => (
                <ScrollReveal key={p.label} delay={i * 0.06}>
                  <div className="bg-card p-8 md:p-10 h-full group">
                    <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors duration-500">
                      <p.icon className="w-4.5 h-4.5 text-accent" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground mb-2 text-[16px]">{p.label}</h3>
                    <p className="text-[14px] text-muted-foreground leading-[1.8]">{p.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* AKA-RB Method */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="editorial-label text-accent mb-6">Methodology</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 leading-[1.15]">
                  The <span className="text-gradient-gold italic">AKA-RB</span> Method
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto leading-[1.8]">Our proprietary framework for lasting transformation.</p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden">
              {[
                { step: "A", title: "Awareness", desc: "See clearly where you are and what needs to change." },
                { step: "K", title: "Knowledge", desc: "Acquire the frameworks and principles for transformation." },
                { step: "A", title: "Action", desc: "Apply what you know with intention and consistency." },
                { step: "RB", title: "Repeat Better", desc: "Iterate, refine, and compound your growth." },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.08}>
                  <div className="bg-card p-8 text-center h-full">
                    <div className="w-11 h-11 rounded-md gradient-gold flex items-center justify-center mx-auto mb-5">
                      <span className="font-sans font-bold text-accent-foreground text-sm">{item.step}</span>
                    </div>
                    <h4 className="font-heading font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-[13px] text-muted-foreground leading-[1.7]">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-accent">
          <div className="container mx-auto px-6 max-w-2xl text-center">
            <p className="editorial-label text-accent-foreground/40 mb-6">Take Action</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-accent-foreground mb-4 italic">
              Experience Transformation First-Hand
            </h2>
            <div className="editorial-line mx-auto mb-10 !bg-accent-foreground/20" />
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans font-semibold px-8 py-6 rounded-md tracking-wide">
              <Link to="/apply">Apply to EVOLVE <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default PhilosophyPage;
