import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { TrendingUp, Brain, Heart, Wallet, ArrowRight, Clock, Users, Target, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import evolveLogo from "@/assets/evolve-logo.png";
import patternBg from "@/assets/pattern-bg.jpg";

const modules = [
  {
    title: "Growth & Transformation",
    icon: TrendingUp,
    weeks: "Weeks 1–4",
    topics: ["The AKA-RB Method", "Growth vs Transformation", "Designing Your Transformation", "Building Growth Systems"],
  },
  {
    title: "Decisions & Personal Effectiveness",
    icon: Brain,
    weeks: "Weeks 5–8",
    topics: ["Decision Frameworks", "Personal Effectiveness Systems", "Time Architecture", "Strategic Priority Management"],
  },
  {
    title: "Relationships & Emotional Intelligence",
    icon: Heart,
    weeks: "Weeks 9–12",
    topics: ["Emotional Intelligence Foundations", "Building Relational Capital", "Conflict Resolution", "Influence & Persuasion"],
  },
  {
    title: "Career & Finance",
    icon: Wallet,
    weeks: "Weeks 13–16",
    topics: ["Career Strategy & Positioning", "Financial Foundations for Leaders", "Wealth Creation Principles", "Legacy Planning"],
  },
];

const features = [
  { icon: Clock, label: "4-Month Programme", desc: "16 weeks of structured, intensive mentorship" },
  { icon: Users, label: "Small Cohorts", desc: "Intimate groups for maximum engagement" },
  { icon: Target, label: "Accountability Partners", desc: "Paired with peers for mutual accountability" },
];

const ProgrammesPage = () => {
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
                <img src={evolveLogo} alt="EVOLVE" className="h-12 md:h-16 mx-auto mb-4 brightness-0 invert" />
                <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
                  Growth Mentorship <span className="text-gradient-gold">Programme</span>
                </h1>
                <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                  A 4-month immersive experience for individuals committed to whole-person transformation.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Programme Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                  What is <span className="text-gradient-gold">EVOLVE</span>?
                </h2>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                  EVOLVE is not a course. It is a covenant — a structured commitment to becoming the best version of yourself through intentional growth across four transformational modules.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {features.map((f, i) => (
                <ScrollReveal key={f.label} delay={i * 0.1}>
                  <div className="bg-secondary rounded-2xl p-6 border border-border text-center h-full">
                    <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mx-auto mb-4">
                      <f.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground mb-1">{f.label}</h3>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Module Breakdown */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 max-w-5xl">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
                Module <span className="text-gradient-gold">Breakdown</span>
              </h2>
            </ScrollReveal>

            <div className="space-y-6">
              {modules.map((m, i) => (
                <ScrollReveal key={m.title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-background rounded-2xl p-6 md:p-8 border border-border hover:border-accent/30 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center shrink-0">
                        <m.icon className="w-7 h-7 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h3 className="font-heading text-xl font-bold text-foreground">{m.title}</h3>
                          <span className="text-xs font-medium text-accent bg-accent/10 rounded-full px-3 py-1">{m.weeks}</span>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {m.topics.map((topic) => (
                            <div key={topic} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                              <span className="text-sm text-muted-foreground">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Who It's For</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {[
                  "Emerging leaders seeking structure",
                  "Young professionals wanting clarity",
                  "Entrepreneurs building with intention",
                  "Individuals ready for a growth covenant",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-secondary rounded-xl p-4 border border-border">
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
              Ready to EVOLVE?
            </h2>
            <p className="text-accent-foreground/80 mb-8">Applications are now open for the next cohort.</p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold px-8 py-6">
              <Link to="/apply">Apply Now <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default ProgrammesPage;
