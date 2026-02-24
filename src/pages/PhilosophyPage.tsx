import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { Brain, Heart, Flame, BarChart3, Users, Wallet, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import patternBg from "@/assets/pattern-bg.jpg";

const pillars = [
  { label: "Mental Clarity", icon: Brain, desc: "Sharpened focus, critical thinking, and strategic decision-making. We train the mind to operate with precision under pressure.", color: "bg-sky/10" },
  { label: "Spiritual Alignment", icon: Flame, desc: "Finding your core purpose and operating from conviction. Alignment creates consistency even when motivation fades.", color: "bg-accent/10" },
  { label: "Emotional Resilience", icon: Heart, desc: "Developing the emotional intelligence to navigate relationships, setbacks, and leadership challenges with composure.", color: "bg-destructive/10" },
  { label: "Strategic Thinking", icon: BarChart3, desc: "Systems-level thinking that turns insight into execution. Moving from reactive decision-making to intentional strategy.", color: "bg-sky/10" },
  { label: "Relational Intelligence", icon: Users, desc: "Building the relational capital that accelerates growth. Great leaders are great connectors.", color: "bg-accent/10" },
  { label: "Financial Wisdom", icon: Wallet, desc: "Mastering the principles of wealth creation, stewardship, and strategic resource allocation.", color: "bg-muted" },
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
            <div className="absolute inset-0 gradient-radiant opacity-90" />
            <div className="relative z-10 text-center px-4">
              <ScrollReveal>
                <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
                  Our <span className="text-gradient-gold">Philosophy</span>
                </h1>
                <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                  Real change is not accidental. It is designed.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Core Belief */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                  Growth Precedes <span className="text-gradient-gold">Transformation</span>
                </h2>
                <div className="w-20 h-1 gradient-gold rounded-full mx-auto mb-8" />
                <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground text-lg leading-relaxed">
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
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 max-w-5xl">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl font-bold text-foreground mb-3">The Whole Person Integration</h2>
                <p className="text-muted-foreground">Six interconnected pillars — when one is neglected, all are weakened.</p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((p, i) => (
                <ScrollReveal key={p.label} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-background rounded-2xl p-8 border border-border hover:border-accent/40 transition-colors group cursor-default h-full"
                  >
                    <div className={`w-14 h-14 rounded-2xl ${p.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                      <p.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground mb-2">{p.label}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* AKA-RB Method detail */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl font-bold text-foreground mb-3">
                  The <span className="text-gradient-gold">AKA-RB</span> Method
                </h2>
                <p className="text-muted-foreground">Our proprietary framework for lasting transformation.</p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-4 gap-4">
              {[
                { step: "A", title: "Awareness", desc: "See clearly where you are and what needs to change." },
                { step: "K", title: "Knowledge", desc: "Acquire the frameworks and principles for transformation." },
                { step: "A", title: "Action", desc: "Apply what you know with intention and consistency." },
                { step: "RB", title: "Repeat Better", desc: "Iterate, refine, and compound your growth." },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="bg-secondary rounded-2xl p-6 border border-border text-center h-full">
                    <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                      <span className="font-heading font-bold text-accent-foreground text-sm">{item.step}</span>
                    </div>
                    <h4 className="font-heading font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 gradient-gold">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-accent-foreground mb-4">
              Experience Transformation First-Hand
            </h2>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold px-8 py-6">
              <Link to="/apply">Apply to EVOLVE <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default PhilosophyPage;
